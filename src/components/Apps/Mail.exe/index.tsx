import { ReactElement, useRef, useState } from "react";

import Window from "@/components/Os/Window";
import Editor, {
	createButton,
	EditorProvider,
	Toolbar,
} from "react-simple-wysiwyg";
import { useOS } from "@/providers/InclumeOS";
import MailIcon from "@/assets/icons/app-mail.svg?react";
import IconImage from "@/assets/icons/image.svg?react";
import { useTranslate } from "@tolgee/react";
import Folder from "./MailFolders";
import Message from "./MailsList";
import Drafts from "@/assets/icons/mail_drafts.svg";
import Inbox from "@/assets/icons/mail_inbox.svg";
import NewMessage from "@/assets/icons/mail_newmessage.svg";
import Send from "@/assets/icons/mail_send.svg";
import Spams from "@/assets/icons/mail_spams.svg";
import Trash from "@/assets/icons/mail_trash.svg";
import MailContent from "./MailContent";

interface AppProps<T> extends React.FC<T> {
	title: string;
	icon: ReactElement;
	unmount?: boolean;
}

interface MailProps{
    content?: string;
}

const Mail: AppProps<MailProps> = ({content = ""}) => {
    const { openedApps } = useOS();

	const { t } = useTranslate();

    const appData: any = Object.entries(openedApps).find(
		// find openedApps by title
		(x) => x[1].title === Mail.title
	);

    const [value, setValue] = useState(appData?.[1]?.defaultContent || content);
    	
    const editorRef = useRef(null);

	function onChange(e) {
		setValue(e.target.value);
		console.log(e.target.value);
	}

    const BtnBoldCustom = createButton("Bold", "B", "bold");
	const BtnItalicCustom = createButton("Italic", "I", "italic");
	const BtnUnderlineCustom = createButton("Underline", "U", "underline");

	console.log(appData?.[1]?.defaultContent);

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

    const [folderName, setFolderName] = useState("Boîte de réception")
    const [activeFolder, setActiveFolder] = useState<string | null>("Boîte de réception");

    const handleFolderClick = (folderName: string) => {
        setActiveFolder(folderName);
        setFolderName(folderName)
    };

    const [activeMailContent, setActiveMailContent] = useState<string | null>(null);

    const handleSelectMessage = (content: string) => {
        setActiveMailContent(content);
    };

    return (
		<Window
			appName={Mail.title}
		>
            <div className="flex w-full bg-[#F9F9F9] relative h-full overflow-auto">
                <div className="w-2/12 p-1.5">
                    <div className="mail-folders">
                        <Folder
                            title="Boîte de réception"
                            icon={Inbox}
                            active={activeFolder === "Boîte de réception"}
                            onClick={handleFolderClick}
                        />
                        <Folder
                            title="Messages envoyés"
                            icon={Send}
                            active={activeFolder === "Messages envoyés"}
                            onClick={handleFolderClick}
                        />
                        <Folder
                            title="Brouillons"
                            icon={Drafts}
                            active={activeFolder === "Brouillons"}
                            onClick={handleFolderClick}
                        />
                        <Folder
                            title="Indésirables"
                            icon={Spams}
                            active={activeFolder === "Indésirables"}
                            onClick={handleFolderClick}
                        />
                        <Folder
                            title="Corbeille"
                            icon={Trash}
                            active={activeFolder === "Corbeille"}
                            onClick={handleFolderClick}
                        />
                    </div>
                </div>
                <div className="w-3/12 bg-white border-gray-50 border">
                    <div className="mt-3.5 pl-6 border-b border-gray-50 pb-[15px]">
                        <h1 className="text-[24px] font-semibold">Boîte de réception</h1>
                        <p className="text-[12px] opacity-60">8 messages - 1 non lu</p>
                    </div>
                    <div>
                        <Message
                            from="Jean Dupont"
                            title="Titre du mail"
                            hour="12h45"
                            preview="Salut, je t'envoie ce message pour t'informer..."
                            active={false}
                            onClick={() => handleSelectMessage("Ceci est le contenu complet du message de Jean Dupont.")}
                        />
                    </div>
                </div>

                <div className="w-7/12 bg-white flex items-center justify-center">
                    <MailContent activeMail={!!activeMailContent} content={activeMailContent} />
                </div>
            </div>
		</Window>
	);
};


export default Mail;

Mail.unmount = true;
Mail.title = "Boîte mail";
Mail.icon = <MailIcon />;