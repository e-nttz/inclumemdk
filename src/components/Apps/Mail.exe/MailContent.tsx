import { useState } from "react";
import MailCloseIcon from "@/assets/icons/mail_not_open.svg";

interface MailContentProps {
    activeMail?: boolean;
    content?: string;
}

const MailContent = ({ activeMail, content }: MailContentProps) => {
    return (
        <>
            {!activeMail && (
                <div className="flex flex-col content-center items-center">
                    <img src={MailCloseIcon} />
                    <h1 className="text-2xl opacity-70">Aucun message sélectionné</h1>
                </div>
            )}
            {activeMail && <p>{content}</p>}
        </>
    );
};
export default MailContent