import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

import Window from "@/components/Os/Window";
import Editor, {
	createButton,
	EditorProvider,
	Toolbar,
} from "react-simple-wysiwyg";
import { useOS } from "@/providers/InclumeOS";
import TextEditorIcon from "@/assets/icons/app-textEditor.svg?react";
import IconImage from "@/assets/icons/image.svg?react";
import ContextualBar from "@/components/Os/Window/ContextualBar";
import { useTranslate } from "@tolgee/react";
import { useExplorer } from "@/providers/explorer";
import { beacon } from "@/helpers/beacon";
interface AppProps<T> extends React.FC<T> {
	title: string;
	icon: ReactElement;
	unmount?: boolean;
}

interface TextEditorProps {
	content?: string;
}

const TextEditor: AppProps<TextEditorProps> = ({ content = "" }) => {
	const { openedApps } = useOS();

	const { t } = useTranslate();
	const { createFile, handleInfoWindow, closeInfoWindow } = useExplorer();

	const appData: any = Object.entries(openedApps).find(
		(x) => x[1].title === TextEditor.title
	);


	const [value, setValue] = useState(appData?.[1]?.defaultContent || content);
	const editorRef = useRef(null);

	function onChange(e) {
		setValue(e.target.value);
		console.log(value)
	}

	const addImage = (url) => {
		const selection = window.getSelection();
		const img = document.createElement("img");
		img.src = url;
		img.className = "h-auto max-w-[50%] inline-block";
	
		if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const startContainer = range.startContainer;
    console.log(startContainer);

    // Vérifier si le startContainer est un élément HTML ou un nœud texte
    let element = startContainer.nodeType === 1 ? startContainer : startContainer.parentNode;

    if (element && (element instanceof HTMLElement)) {
        console.log(element);

        if (element.closest(".rsw-ce") || element.classList.contains("rsw-ce")) {
            if (range.collapsed) {
                range.insertNode(img);
            } else {
                range.deleteContents();
                range.insertNode(img);
            }
            range.collapse(false);
            setValue(editorRef.current.innerHTML);
        }
    }
}
 else {
			setValue(value + img.outerHTML);
		}
	};
	

	const BtnBoldCustom = createButton("Bold", "B", "bold");
	const BtnItalicCustom = createButton("Italic", "I", "italic");
	const BtnUnderlineCustom = createButton("Underline", "U", "underline");

	const saveFile = () => {
		handleInfoWindow((selected: FileNode) => {
			if (selected?.url || selected?.name) {
				addImage(selected.url)
			}
			closeInfoWindow();
		}, undefined);
	}

	const handleUserKeyPress = useCallback(event => {
		if (event.ctrlKey && event.key === "s") {
			event.preventDefault();
			saveFile();
		}
	}, []);
	
	useEffect(() => {
		window.addEventListener("keydown", handleUserKeyPress);
		return () => {
			window.removeEventListener("keydown", handleUserKeyPress);
		};
	}, [handleUserKeyPress]);

	return (
		<Window
			appName={TextEditor.title}
			contextMenus={
				<>
					<ContextualBar.Menu name="Fichier">
						<ContextualBar.Item
							onClick={() => {
								beacon("triggerStep", {
									value: "saveFile",
								  });
								handleInfoWindow(undefined, (currentPath) => {
									const fileName = (document.querySelector("#inputSaveFile") as HTMLInputElement).value;

									createFile(
										fileName,
										"docx",
										{
											data: value,
										},
										currentPath
									);

									closeInfoWindow();
								});
							}}
						>
							{t("save_file", "Enregistrer sous")}
						</ContextualBar.Item>
						<ContextualBar.Item onClick={() => {}}>
							{t("settings", "Paramètres")}
						</ContextualBar.Item>
					</ContextualBar.Menu>
				</>
			}
		>
			<EditorProvider>
				{/* ✅ Ajout de `flex-wrap` pour éviter que l'image ne casse la disposition */}
				<section className="relative flex flex-row flex-wrap flex-1 w-full overflow-auto text-black bg-[#F5F5F5] backdrop-blur dark:bg-black/70">
					<Toolbar>
						<BtnBoldCustom className="flex items-center justify-center p-1 font-bold transition rounded-sm hover:bg-gray-50 hover:bg-opacity-40" />
						<BtnItalicCustom className="flex items-center justify-center p-1 italic transition rounded-sm hover:bg-gray-50 hover:bg-opacity-40" />
						<BtnUnderlineCustom className="flex items-center justify-center p-1 underline transition rounded-sm hover:bg-gray-50 hover:bg-opacity-40" />
						<button
							className="flex items-center justify-center gap-1 p-1 transition rounded-sm hover:bg-gray-50 hover:bg-opacity-20"
							onClick={() => {
								saveFile();
							}}
						>
							<IconImage className="w-4 h-4" />
							<span aria-hidden="true" className="block text-sm">
								Insérer une image
							</span>
						</button>
					</Toolbar>
					<div className="w-full aspect-[9/16] max-w-5xl mx-auto mb-8 overflow-visible bg-white">
						<Editor
							value={value}
							onChange={onChange}
							containerProps={{
								style: { height: "100%", borderRadius: "0" },
							}}
							ref={editorRef}
							autoFocus
						/>
					</div>
				</section>
			</EditorProvider>
		</Window>
	);
};

export default TextEditor;

TextEditor.unmount = true;
TextEditor.title = "Traitement de texte";
TextEditor.icon = <TextEditorIcon />;
