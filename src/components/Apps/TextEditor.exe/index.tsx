import { ReactElement, useRef, useState } from "react";

import Window from "@/components/Os/Window";
import Editor, {
	BtnBold,
	BtnItalic,
	createButton,
	EditorProvider,
	Toolbar,
} from "react-simple-wysiwyg";

import TextEditorIcon from "@/assets/icons/app-textEditor.svg?react";
import IconImage from "@/assets/icons/image.svg?react";

interface AppProps extends React.FC {
	title: string;
	icon: ReactElement;
}

interface TextEditorProps {
	content?: string;
}

const TextEditor: AppProps<TextEditorProps> = ({ content = "" }) => {
	const [value, setValue] = useState(content);
	const editorRef = useRef(null);

	function onChange(e) {
		setValue(e.target.value);
		console.log(e.target.value);
	}

	const addImage = () => {
		const selection = window.getSelection();
		const img = document.createElement("img");
		img.src =
			"https://images.unsplash.com/photo-1721332150382-d4114ee27eff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
		img.className = "h-auto max-w-full";
		if (selection.rangeCount > 0) {
			const range = selection.getRangeAt(0);
			range.insertNode(img);
			range.collapse(false); // Placer le curseur après l'image
			setValue(editorRef.current.innerHTML); // Met à jour l'état avec le contenu modifié
		} else {
			setValue(value + img.outerHTML);
		}
	};

	const BtnBoldCustom = createButton("Bold", "B", "bold");
	const BtnItalicCustom = createButton("Italic", "I", "italic");
	const BtnUnderlineCustom = createButton("Underline", "U", "underline");

	return (
		<Window appName={TextEditor.title}>
			<EditorProvider>
				<section className="relative flex flex-col flex-1 w-full overflow-auto text-black bg-[#F5F5F5] backdrop-blur dark:bg-black/70">
					<Toolbar>
						<BtnBoldCustom className="flex items-center justify-center p-1 font-bold transition rounded-sm hover:bg-gray-50 hover:bg-opacity-40" />
						<BtnItalicCustom className="flex items-center justify-center p-1 italic transition rounded-sm hover:bg-gray-50 hover:bg-opacity-40" />
						<BtnUnderlineCustom className="flex items-center justify-center p-1 underline transition rounded-sm hover:bg-gray-50 hover:bg-opacity-40" />
						<button
							className="flex items-center justify-center gap-1 p-1 transition rounded-sm hover:bg-gray-50 hover:bg-opacity-20"
							onClick={addImage}
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

TextEditor.title = "Editeur de texte";
TextEditor.icon = <TextEditorIcon />;
