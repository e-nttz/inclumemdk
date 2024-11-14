import { ReactElement, useEffect, useRef, useState } from "react";

import Window from "@/components/Os/Window";
import Editor, {
	BtnBold,
	BtnItalic,
	EditorProvider,
	Toolbar,
} from "react-simple-wysiwyg";
import { useOS } from "@/providers/InclumeOS";

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

	const appData: any = Object.entries(openedApps).find(
		// find openedApps by title
		(x) => x[1].title === TextEditor.title
	);

	console.log(appData?.[1]?.defaultContent);

	const [value, setValue] = useState(appData?.[1]?.defaultContent || content);
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

	return (
		<Window appName={TextEditor.title}>
			<EditorProvider>
				<section className="flex flex-col flex-1 w-full overflow-auto text-black bg-[#F5F5F5] backdrop-blur dark:bg-black/70">
					<Toolbar>
						<BtnBold />
						<BtnItalic />
						<button onClick={addImage}>Ajouter une image</button>
					</Toolbar>
					<div className="w-full max-w-5xl mx-auto mt-8 bg-white">
						<Editor
							value={value}
							onChange={onChange}
							containerProps={{ style: { resize: "vertical" } }}
							ref={editorRef}
						/>
					</div>
				</section>
			</EditorProvider>
		</Window>
	);
};

export default TextEditor;

TextEditor.unmount = true;
TextEditor.title = "Editeur de texte";
TextEditor.icon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		id="PLANCHE_02_-_icones_sans_noms"
		data-name="PLANCHE 02 - icones sans noms"
		viewBox="0 0 75.18 75.13"
	>
		<g
			id="Word_traitement_de_texte_-_copie"
			data-name="Word (traitement de texte) - copie"
		>
			<path
				d="M75.13 15.97v43.2c0 8.79-7.15 15.94-15.94 15.94h-43.2C7.2 75.11.05 67.96.05 59.17v-43.2C.05 7.17 7.2.02 15.99.02h43.2c8.79 0 15.94 7.15 15.94 15.95"
				className="cls-3"
			></path>
			<path
				fill="#25497a"
				strokeWidth="0"
				d="M75.13 37.89v21.28c0 8.79-7.15 15.94-15.94 15.94h-27.9L18.8 62.62l19.47-52.08 9.22.07z"
			></path>
			<path
				d="M57.63 25.75v33.42c0 2.96-2.4 5.35-5.35 5.35H22.9a5.36 5.36 0 0 1-5.36-5.36v-43.2c0-2.96 2.4-5.35 5.35-5.35h19.53c.94 0 1.7.76 1.7 1.7v4.76a6.98 6.98 0 0 0 6.98 6.98h4.82c.94 0 1.7.76 1.7 1.7Z"
				className="cls-2"
			></path>
			<path
				d="M49.95 31.81h-23.8c-1.21 0-2.18-.98-2.18-2.18s.98-2.18 2.18-2.18h23.8c1.21 0 2.18.98 2.18 2.18s-.98 2.18-2.18 2.18m0 8.85h-23.8c-1.21 0-2.18-.98-2.18-2.18s.98-2.18 2.18-2.18h23.8c1.21 0 2.18.98 2.18 2.18s-.98 2.18-2.18 2.18m0 8.85h-23.8c-1.21 0-2.18-.98-2.18-2.18s.98-2.18 2.18-2.18h23.8c1.21 0 2.18.98 2.18 2.18s-.98 2.18-2.18 2.18m-11.9 8.53h-11.9c-1.21 0-2.18-.98-2.18-2.18s.98-2.18 2.18-2.18h11.9c1.21 0 2.18.98 2.18 2.18s-.98 2.18-2.18 2.18"
				className="cls-3"
			></path>
			<path
				d="M56.95 21.37h-5.98c-2.34 0-4.23-1.89-4.23-4.23V11.3c0-.61.73-.91 1.16-.49l9.53 9.39c.44.43.13 1.17-.48 1.17"
				className="cls-2"
			></path>
		</g>
	</svg>
);
