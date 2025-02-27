import MailCloseIcon from "@/assets/icons/mail_not_open.svg";
import Reply from "@/assets/icons/mail_reply.svg"
import Trash from "@/assets/icons/mail_delete.svg"
import SendMail from "@/assets/icons/send_mail.svg"
import MailAttachment from "@/assets/icons/mail_attachment.svg"
import MailSendSucces from "@/assets/icons/mail_send_success.svg"
import AttachmentDocument from "@/assets/icons/attachment_document.svg"
import DeleteAttachment from "@/assets/icons/cross_close.svg"
import DownloadAttachment from "@/assets/icons/download_attachment.svg"
import { useState, useRef } from "react";
import { useExplorer } from "@/providers/explorer";
import { useOS } from "@/providers/InclumeOS";
import { beacon } from "@/helpers/beacon";
interface MailContentProps {
    activeMail?: boolean;
    title?: string;
    from?: string;
    to?: string;
    emailTo?: string;
    emailFrom?: string;
    content?: string;
    hour?: string;
    newMessage?: boolean;
    newMessageSent?: boolean;
    files?:{url:string; name:string}[]
    onDeleteDraft?: () => void;
    onDeleteMail?: () => void;
    onReply?: () => void;
    onSend?: (content: string, email: string, title: string, files: { url: string; name: string }[]) => void;
}

const MailContent = ({ 
    activeMail, 
    content, 
    title, 
    from, 
    to, 
    emailTo, 
    emailFrom, 
    hour, 
    newMessage, 
    newMessageSent, 
    onDeleteDraft, 
    onDeleteMail, 
    onReply,
    files,
    onSend
}: MailContentProps) => {
    const {createFile, handleInfoWindow, closeInfoWindow } = useExplorer();
    const [selectedFiles, setSelectedFiles] = useState<{ url: string; name: string }[]>([]);

    const [editableEmailTo, setEditableEmailTo] = useState<string>(emailTo || "");
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [editableTitle, setEditableTitle] = useState<string>(title || "");
    const contentRef = useRef<HTMLDivElement>(null);

    const cleanContent = (content: string) => {
        return content
            .replace(/<br\s*\/?>/gi, '\n') 
            .replace(/&nbsp;/gi, ' ')
            .replace(/<[^>]*>/g, '');
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setEditableEmailTo(value);

        // Vérifier si les 3 premières lettres correspondent à "res"
        if (value.toLowerCase().startsWith("res") || value.toLowerCase().startsWith("hot")) {
            setShowSuggestion(true);
            const email = "reservation@hotlenamur.be"
            if(!email.includes(value.toLowerCase())){
                setShowSuggestion(false);
            }
        } else {
            setShowSuggestion(false);
        }
    };

    const handleSelectSuggestion = () => {
        setEditableEmailTo("reservation@hotlenamur.be");
        setShowSuggestion(false);
    };
    const handleSendClick = () => {
        const newContent = contentRef.current?.innerHTML || "";
        if (onSend) {
            onSend(newContent, editableEmailTo, editableTitle, selectedFiles);
        }
    };
    const { setOpenedApps, openedApps } = useOS();
    const removeApp = (titleToRemove: string) => {
        const openedAppsCopy = [...openedApps];
        // Filtrer le tableau pour retirer l'application avec le title correspondant
        const updatedApps = openedAppsCopy.filter((app) => app.title !== titleToRemove);
        // Mettre à jour l'état avec le tableau filtré
        setOpenedApps(updatedApps);
    };
    return (
        <>
            {!activeMail && !newMessage && !newMessageSent && (
                <div className="flex flex-col content-center items-center justify-center w-full">
                    <img src={MailCloseIcon} />
                    <h1 className="text-2xl opacity-70">Aucun message sélectionné</h1>
                </div>
            )}
            {activeMail && !newMessage && (
                <div className="w-full">
                    <div className="headMail pl-[30px] pr-[30px] pt-[20px] mb-[20px] flex w-full justify-between h-[100px]">
                        <div className="flex items-center">
                            <div className="w-[40px] h-[40px] mr-6 rounded-[50%] bg-[#005fb8] flex justify-center items-center text-[white] text-2xl">{from?.charAt(0)}</div>
                            <div>
                                <p className="font-bold text-xl">{emailFrom || "Moi"}</p>
                                <p className="text-lg">{title}</p>
                                <p className="mt-2">À: <span>{to}</span></p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-sm opacity-60 text-right">{hour}</p>
                            <div className="actions flex">
                                <div 
                                    className="repondre mr-[25px] flex items-center cursor-pointer"
                                    onClick={onReply}
                                >
                                    <img src={Reply} alt="Répondre au mail" className="h-[12px] w-[16px] mr-3"/>
                                    <p>Répondre</p>
                                </div>
                                <div 
                                    className="supprimer flex items-center cursor-pointer" 
                                    onClick={() => onDeleteMail && onDeleteMail()}
                                >
                                    <img src={Trash} alt="Supprimer mail" className="h-[16px] w-[14px] mr-3"/>
                                    <p>Supprimer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contentMail border-t border-gray-50 pl-[30px] pr-[30px] pt-[20px]">
                        <p className="whitespace-pre-line">{cleanContent(content)}</p>
                    </div>
                    {files && files.length > 0 && (
                        <div className="fichiersJoints flex flex-col pl-[30px] mt-16 w-full border-t border-gray-50 pt-4">
                            <p className="uppercase opacity-60">Fichier(s) joint(s)</p>
                            <div className="mt-4">
                                {files.map((file, index) => (
                                    <div
                                        key={index}
                                        className="fichierJoint cursor-pointer flex border w-fit rounded-[30px] pl-3 pr-3 pt-2 pb-2 items-center mr-6"
                                    >
                                        <img
                                            className="mr-3"
                                            src={AttachmentDocument}
                                            alt="Icone fichier joint"
                                        />
                                        <p className="mr-3 underline text-[#005FB8]">{file.name}</p>
                                        <img
                                            src={DownloadAttachment}
                                            alt="Télécharger pièce jointe"
                                            onClick={() => {
                                                handleInfoWindow(undefined, (currentPath) => {
                                                    createFile(
                                                        file.name,
                                                        "docx",
                                                        {
                                                            data: "",
                                                        },
                                                        currentPath
                                                    );
                
                                                    closeInfoWindow();
                                                });
                                            }}
                                            />
                                    </div>
                                ))}
                            </div>
                        </div>
                        )
                    }
                    <div 
                        className="ml-[30px] mt-16 repondre mr-[25px] flex items-center rounded-[30px] bg-[#F2F2F2] w-fit pt-2 pb-2 pl-6 pr-6 cursor-pointer"
                        onClick={onReply}
                    >
                        <img src={Reply} alt="Répondre au mail" className="h-[12px] w-[16px] mr-3"/>
                        <p>Répondre</p>
                    </div>
                </div>
            )}
            {!activeMail && newMessage && (
                <div className="pl-[30px] pr-[30px] pt-[20px] pb-[20px] w-full">
                    <div className="headerNewMessage">
                    <div className="inputMessage w-full border-b border-gray-50 pb-2 relative">
                        <label htmlFor="a" className="mr-3 opacity-60">À :</label>
                        <input
                            type="text"
                            id="a"
                            className="border-none outline-none w-[90%]"
                            value={editableEmailTo}
                            onChange={handleChange}
                            autoComplete="off"
                        />

                        {showSuggestion && (
                            <div 
                                className="absolute z-10 mt-2 bg-white border border-gray-300 p-2 cursor-pointer w-full"
                                onClick={handleSelectSuggestion}
                            >
                                reservation@hotlenamur.be
                            </div>
                            )}
                        </div>
                        <div className="inputMessage w-full border-b border-gray-50 pb-2 pt-2">
                            <label htmlFor="objet" className="mr-3 opacity-60">Objet :</label>
                            <input 
                                type="text" 
                                id="objet" 
                                className="border-none outline-none w-[90%]" 
                                value={editableTitle} 
                                onChange={(e) => setEditableTitle(e.target.value)}
                                autoComplete="off"
                            />
                        </div>
                        <div className="inputMessage w-full border-b border-gray-50 pb-2 pt-2">
                            <label htmlFor="de" className="mr-3 opacity-60">De :</label>
                            <input autoComplete="off" type="text" id="de" className="border-none outline-none w-[90%]" value={"Moi"} disabled/>
                        </div>
                    </div>

                    {/* rédaction */}
                    <div className="redactionMessage overflow-x-hidden overflow-y-scroll w-full h-[65%] mt-[20px] outline-none" contentEditable ref={contentRef}>
                        {content || ""}
                    </div>

                    <div className="fichiersJoints flex absolute bottom-200">
                        {selectedFiles.map((file, index) => (
                            <div
                                key={index}
                                className="fichierJoint cursor-pointer flex border w-fit rounded-[30px] pl-3 pr-3 pt-2 pb-2 items-center mr-6"
                            >
                                <img
                                    className="mr-3"
                                    src={AttachmentDocument}
                                    alt="Icone fichier joint"
                                />
                                <p className="mr-3 underline text-[#005FB8]">{file.name}</p>
                                <img
                                    src={DeleteAttachment}
                                    alt="Retirer pièce jointe"
                                    onClick={() => {
                                        setSelectedFiles((prevFiles) =>
                                            prevFiles.filter((_, i) => i !== index)
                                        );
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Actions mail */}
                    <div className="actionsMail w-7/12 absolute bottom-0 right-0 bg-[#F9F9F9] pl-[30px] pr-[30px] pt-[20px] pb-[20px] flex justify-between">
                        <div className="flex">
                            <div 
                                className="nouveauMessage flex items-center h-[50px] rounded-[30px] bg-[#005FB8] text-[white] w-fit pl-4 pr-4 mr-6 cursor-pointer"
                                onClick={handleSendClick}
                            >
                                <div className={`folder-icon w-[32px] mr-3`}>
                                    <img src={SendMail} alt="Envoyer le mail" />
                                </div>
                                <div className="folder-title w-full">Envoyer</div>
                            </div>
                            <div className="flex items-center mr-6 cursor-pointer"
                            onClick={async () => {
                                beacon("triggerStep", {
                                    value: "addFile",
                                });
                                removeApp("Explorateur de fichier")
                                handleInfoWindow((selected: FileNode) => {
                                    if (selected?.url || selected?.name) {
                                        setSelectedFiles((prevFiles) => [
                                            ...prevFiles,
                                            { url: selected.url, name: selected.name },
                                        ]);
                                    }
                                    closeInfoWindow();
                                }, undefined);
                            }}
                            
                            >
                                <img src={MailAttachment} alt="Inclure des fichiers joints" className="h-[16px] w-[14px] mr-3"/>
                                <p>Inclure des fichiers joints</p>
                            </div>
                        </div>
                        <div 
                            className="supprimer flex items-center cursor-pointer" 
                            onClick={() => onDeleteDraft && onDeleteDraft()}
                        >
                            <img src={Trash} alt="Supprimer mail" className="h-[16px] w-[14px] mr-3"/>
                            <p>Supprimer</p>
                        </div>
                    </div>    
                </div>
            )}
            {activeMail && newMessage && (
                <div className="pl-[30px] pr-[30px] pt-[20px] pb-[20px] w-full">
                    <div className="headerNewMessage">
                        <div className="inputMessage w-full border-b border-gray-50 pb-2">
                            <label htmlFor="a" className="mr-3 opacity-60">À :</label>
                            <input type="text" id="a" className="border-none outline-none w-[90%]" autoComplete="off" value={emailTo || ""}/>
                        </div>
                        <div className="inputMessage w-full border-b border-gray-50 pb-2 pt-2">
                            <label htmlFor="objet" className="mr-3 opacity-60">Objet :</label>
                            <input autoComplete="off" type="text" id="objet" className="border-none outline-none w-[90%]" value={title || ""}/>
                        </div>
                        <div className="inputMessage w-full border-b border-gray-50 pb-2 pt-2">
                            <label htmlFor="de" className="mr-3 opacity-60">De :</label>
                            <input autoComplete="off" type="text" id="de" className="border-none outline-none w-[90%]" value={"Moi"} disabled/>
                        </div>
                    </div>

                    {/* rédaction */}
                    <div className="redactionMessage overflow-x-hidden overflow-y-scroll w-full h-[70%] mt-[20px] outline-none whitespace-pre-line" contentEditable ref={contentRef}>
                        <p>
                            {`


                            `}
                        </p>
                        <p className="text-[#005FB8] border-l border-[#005FB8] border-l-2 pl-4">
                            {`==========================================================
                            De : ${emailFrom}
                            À : ${emailTo}
                            Date : ${hour}
                            Objet : ${title}

                            ${content || ""}
                            `}
                        </p>
                    </div>
                    <div className="fichiersJoints flex absolute bottom-200">
                        {selectedFiles.map((file, index) => (
                            <div
                                key={index}
                                className="fichierJoint cursor-pointer flex border w-fit rounded-[30px] pl-3 pr-3 pt-2 pb-2 items-center mr-6"
                            >
                                <img
                                    className="mr-3"
                                    src={AttachmentDocument}
                                    alt="Icone fichier joint"
                                />
                                <p className="mr-3 underline text-[#005FB8]">{file.name}</p>
                                <img
                                    src={DeleteAttachment}
                                    alt="Retirer pièce jointe"
                                    onClick={() => {
                                        setSelectedFiles((prevFiles) =>
                                            prevFiles.filter((_, i) => i !== index)
                                        );
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    
                    {/* Actions mail */}
                    <div className="actionsMail w-7/12 absolute bottom-0 right-0 bg-[#F9F9F9] pl-[30px] pr-[30px] pt-[20px] pb-[20px] flex justify-between">
                        <div className="flex">
                            <div 
                                className="nouveauMessage flex items-center h-[50px] rounded-[30px] bg-[#005FB8] text-[white] w-fit pl-4 pr-4 mr-6 cursor-pointer"
                                onClick={handleSendClick}
                            >
                                <div className="folder-icon w-[32px] mr-3">
                                    <img src={SendMail} alt="Envoyer le mail" />
                                </div>
                                <div className="folder-title w-full">Envoyer</div>
                            </div>
                            <div className="flex items-center mr-6 cursor-pointer"
                            onClick={async () => {
                                removeApp("Explorateur de fichier")
                                beacon("triggerStep", {
                                    value: "addFile",
                                });
                                handleInfoWindow((selected: FileNode) => {
                                    if (selected?.url || selected?.name) {
                                        setSelectedFiles((prevFiles) => [
                                            ...prevFiles,
                                            { url: selected.url, name: selected.name },
                                        ]);
                                    }
                                    closeInfoWindow();
                                }, undefined);
                            }}
                            
                            >
                                <img src={MailAttachment} alt="Inclure des fichiers joints" className="h-[16px] w-[14px] mr-3"/>
                                <p>Inclure des fichiers joints</p>
                            </div>
                        </div>
                        <div 
                            className="supprimer flex items-center cursor-pointer" 
                            onClick={() => onDeleteDraft && onDeleteDraft()}
                        >
                            <img src={Trash} alt="Supprimer mail" className="h-[16px] w-[14px] mr-3"/>
                            <p>Supprimer</p>
                        </div>
                    </div>    
                </div>
            )}
            {!activeMail && !newMessage && newMessageSent && (
                <div className="flex flex-col content-center items-center justify-center w-full">
                    <img src={MailSendSucces} />
                    <h1 className="text-2xl opacity-70">Message envoyé</h1>
                </div>
            )}
        </>
    );
};

export default MailContent;