import { ReactElement, useState, useCallback } from "react";
import emailsData from './emails.json';
import Window from "@/components/Os/Window";
import { useOS } from "@/providers/InclumeOS";
import MailIcon from "@/assets/icons/app-mail.svg?react";
import Folder from "./MailFolders";
import Message from "./MailsList";
import Drafts from "@/assets/icons/mail_drafts.svg";
import Inbox from "@/assets/icons/mail_inbox.svg";
import Send from "@/assets/icons/mail_send.svg";
import Spams from "@/assets/icons/mail_spams.svg";
import Trash from "@/assets/icons/mail_trash.svg";
import MailContent from "./MailContent";
import NewMessage from "@/assets/icons/mail_newmessage.svg";
import { getMailsFromLocalStorage, saveMailsToLocalStorage, resetLocalStorage } from "@/utils/localeStorage";
import { getNextStep, saveStep } from "@/lib/client/quiz";
import { useAuth } from "@/providers/auth";
import { beacon } from "@/helpers/beacon";
import { useNotification } from "@/providers/notifications";

interface AppProps<T> extends React.FC<T> {
  title: string;
  icon: ReactElement;
  unmount?: boolean;
}

interface MailProps {
  content?: string;
}

const Mail: AppProps<MailProps> = () => {
  
  const { user, setTestStatus, session } = useAuth();
  const {addNotification} = useNotification();
  const { openedApps } = useOS();
  const appData: any = Object.entries(openedApps).find(
    (x) => x[1].title === Mail.title
  );
  const validationEtape5 = async () =>{
    const step = await getNextStep(session);
    if (step.id === 6 || step.id === 42 || step.id === 7 || step.id === 46) {
      await saveStep(session, {
        test_step_template_id: step.id,
        is_successful: true,
      });
      setTimeout(() => {
        beacon("message", {
          id: Math.random(),
          sender: 0,
          content: `Super, merci pour la photo, nous avons trouvé le resto ! J’ai un petit service à te demander :<br><br>
          - Sur l'ordinateur de la maison, ouvre le dossier vacances.<br>
          - Trouve la fiche client pour la réservation à l’hôtel.<br>
          - Ajoute "Dupont" comme nom de famille de Céline.<br>
          - Enregistre le fichier en le renommant "dupont".<br>
          - Envoie-le par e-mail à l’hôtel. L’adresse est enregistrée dans mes contacts sous "hôtel Namur".`
        });              
        addNotification({
          title: "Nouveau message !",
          message:
            "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
        });
      }, 5000)
    }
  };
  const validationEtape7 = async () =>{
    const step = await getNextStep(session);
    if (step.id === 10) {
      await saveStep(session, {
        test_step_template_id: step.id,
        is_successful: true,
      });
    }
    if (step.id === 49) {
      await saveStep(session, {
        test_step_template_id: step.id,
        is_successful: true,
      });
    }
  };
  const validationEtape8 = async (contenu) =>{
    const step = await getNextStep(session);
      if (step.id === 11) {
        await saveStep(session, {
          test_step_template_id: step.id,
          is_successful: true,
        });
        setTimeout(() => {
          beacon("message", {
              id: Math.random(),
              sender: 0,
              content: "Salut, c’est encore moi, nous avons mal organisé nos vacances... Pourrais tu regarder sur internet quelles sont les activités disponibles dans le ville de Namur et nous envoyer le lien (url) de ce que tu as trouvé par mail?",
          });
          addNotification({
              title: "Nouveau message !",
              message:
                  "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
          });
      }, 5000)
        await saveStep(session, {
          test_step_template_id: 12,
          is_successful: true,
          extra_data: {
            "Mail envoyé" : contenu,
          },
        });
      }
      if (step.id === 54) {
        await saveStep(session, {
          test_step_template_id: step.id,
          is_successful: true,
        });
        setTimeout(() => {
          beacon("message", {
              id: Math.random(),
              sender: 0,
              content: `Nous aimerions bien faire cette activité, mais nous devons créer un fichier pour confirmer notre inscription avec nos noms, prénoms et photos d’identité.<br><br> - Peux-tu le faire depuis mon application éditeur de texte ?<br> - Tu trouveras les photos d’identité dans le dossier "vacances".<br> - Peux-tu l’enregistrer sur mon cloud ? Je pourrai l’avoir directement sur mon téléphone.<br><br> - Pour rappel, voici nos noms et prénoms :<br> &nbsp;&nbsp;&nbsp;&nbsp;- Vincent Inclume<br> &nbsp;&nbsp;&nbsp;&nbsp;- Céline Dupont.`
          });
          addNotification({
              title: "Nouveau message !",
              message:
                  "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
          });
      }, 5000)
        await saveStep(session, {
          test_step_template_id: 65,
          is_successful: true,
          extra_data: {
            "Mail envoyé" : contenu,
          },
        });
      }
  }
  const validationEtape10 = async () =>{
    const step = await getNextStep(session);
    if (step.id === 13) {
      await saveStep(session, {
        test_step_template_id: step.id,
        is_successful: true,
      });
      setTimeout(() => {
          beacon("message", {
              id: Math.random(),
              sender: 0,
              content: `Nous aimerions bien faire cette activité, mais nous devons créer un fichier pour confirmer notre inscription avec nos noms, prénoms et photos d’identité.<br><br> - Peux-tu le faire depuis mon application éditeur de texte ?<br> - Tu trouveras les photos d’identité dans le dossier "vacances".<br> - Peux-tu l’enregistrer sur mon cloud ? Je pourrai l’avoir directement sur mon téléphone.<br><br> - Pour rappel, voici nos noms et prénoms :<br> &nbsp;&nbsp;&nbsp;&nbsp;- Vincent Inclume<br> &nbsp;&nbsp;&nbsp;&nbsp;- Céline Dupont.`
          });
          addNotification({
              title: "Nouveau message !",
              message:
                  "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
          });
      }, 5000)
    }
  };
  const [folderName, setFolderName] = useState("Boîte de réception");
  const [activeFolder, setActiveFolder] = useState<string | null>("Boîte de réception");
  const [newMessage, setNewMessage] = useState(false);
  const [newMessageSent, setNewMessageSent] = useState(false);
  const [activeMail, setActiveMail] = useState<{
    id: number | null;
    content: string | null;
    from: string | null;
    emailFrom: string | null;
    to: string | null;
    emailTo: string | null;
    title: string | null;
    hour: string | null;
    files: { url: string; name: string }[] | null;
  }>({
    id: null,
    content: null,
    from: null,
    emailFrom: null,
    to: null,
    emailTo: null,
    title: null,
    hour: null,
    files: null,
  });

  const localStorageKey = `userSession_${session}`;

  const [mails, setMails] = useState(() => {
    const savedMails = localStorage.getItem(localStorageKey);
    if (savedMails) {
        return JSON.parse(savedMails).map(mail => ({
            ...mail,
            content: decodeURIComponent(mail.content),
            isRead: mail.isRead !== undefined ? mail.isRead : true,
        }));
    }
    return emailsData.map(mail => ({ ...mail, isRead: true })); 
  });

  const updateMails = useCallback((newMails) => {
    const encodedMails = newMails.map(mail => ({
        ...mail,
        content: encodeURIComponent(mail.content), // Encode le champ `content`
    }));

    setMails(newMails);
    localStorage.setItem(localStorageKey, JSON.stringify(encodedMails));  // Mise à jour du localStorage
  }, [mails]);

  const filteredMessages = mails.filter((email) => email.Folder === folderName);
  const sortedMessages = filteredMessages.sort((a, b) => b.id - a.id);

  const [isReply, setIsReply] = useState(false);

  const handleMailValidation = (email: string, newContent: string) => {
    const allowedEmails = ["vincent@inclume.be", "reservation@hotelnamur.be"];
  
    if (!allowedEmails.includes(email.split(" ").join("").toLowerCase())) {
      const errorMail = {
        id: mails.length + 1,
        from: "Echec de l'envoi",
        emailFrom: "echec.envoi@system.com",
        to: "Moi",
        emailTo: "moi@inclume.be",
        title: "Échec de la livraison du message",
        content: `Le message que vous avez envoyé à "${email}" n'a pas pu être envoyé.\n\nContenu du message:\n"${newContent}"`,
        hour: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        Folder: "Boîte de réception",
        files: [],
        isRead: false
      };
      updateMails([...mails, errorMail]);
    }
  };

  
  const handleFolderClick = useCallback((folderName: string) => {
    setNewMessage(false);
    setActiveFolder(folderName);
    setFolderName(folderName);
    setActiveMail({
      id: null,
      content: null,
      from: null,
      emailFrom: null,
      to: null,
      emailTo: null,
      title: null,
      hour: null,
      files: null,
    });
  }, []);

  const handleSelectMessage = useCallback((messageId: number, message: any) => {
    setNewMessageSent(false);
    setNewMessage(false);

    // ✅ Mettre à jour l'état isRead à true pour le mail sélectionné
    const updatedMails = mails.map(mail =>
        mail.id === messageId ? { ...mail, isRead: true } : mail
    );

    updateMails(updatedMails); // ✅ Mise à jour du localStorage

    if (messageId === activeMail.id) {
        setActiveMail({
            id: null,
            content: null,
            from: null,
            emailFrom: null,
            to: null,
            emailTo: null,
            title: null,
            hour: null,
            files: null,
        });
        } else {
            setActiveMail({
                id: messageId,
                content: message.content,
                from: message.from,
                emailFrom: message.email_from,
                to: message.to,
                emailTo: message.email_to,
                title: message.title,
                hour: message.hour,
                files: message.files,
            });
        }
    }, [activeMail, mails, updateMails]);


  const handleNewMessage = useCallback(() => {
    setNewMessageSent(false);
    setIsReply(false);
    setNewMessage(true);
    setActiveMail({
      id: null,
      content: null,
      from: null,
      emailFrom: null,
      to: null,
      emailTo: null,
      title: null,
      hour: null,
      files: null
    });
  }, []);

  const handleDeleteDraft = useCallback(() => {
    setNewMessage(false);
  }, []);

  const handleDeleteMail = useCallback((mailId: number) => {
    const emailToDelete = mails.find((email) => email.id === mailId);

    if (emailToDelete?.Folder === "Corbeille") {
      const updatedMails = mails.filter((email) => email.id !== mailId);
      updateMails(updatedMails);
    } else {
      const updatedMails = mails.map((email) =>
        email.id === mailId ? { ...email, Folder: "Corbeille" } : email
      );
      updateMails(updatedMails);
    }

    setActiveMail({
      id: null,
      content: null,
      from: null,
      emailFrom: null,
      to: null,
      emailTo: null,
      title: null,
      hour: null,
      files: null,
    });
  }, [mails, updateMails]);

  const handleReplyMail = useCallback(() => {
    setIsReply(true);
    if (activeMail.id) {
      setNewMessage(true);
      setActiveMail({
        ...activeMail,
        to: activeMail.emailFrom,
        emailTo: activeMail.emailFrom,
        content: activeMail.content,
        title: `Re: ${activeMail.title}`,
      });
    }
  }, [activeMail]);

  const handleSendMail = useCallback((newContent: string, email: string, title: string, files: { url: string; name: string }[]) => {

    const toEmail = email || (isReply ? activeMail.emailFrom : activeMail.emailTo);
    const emailTitle = title || (isReply ? `${activeMail.title}` : activeMail.title);

    const lastMailId = mails.length > 0 ? Math.max(...mails.map(mail => mail.id)) : 0;
    const newMailId = lastMailId + 1;

    const newMail = {
      id: newMailId,
      from: "Moi",
      emailFrom: "moi@example.com",
      to: toEmail,
      emailTo: toEmail,
      title: emailTitle,
      content: newContent,
      hour: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      Folder: "Messages envoyés",
      files: files
    };
    
    if(toEmail === "vincent@inclume.be" && files.length > 0){
      validationEtape5()
    }

    if(toEmail === "reservation@hotlenamur.be" && files.length > 0){
      validationEtape7()
    }

    if(toEmail === "reservation@hotelnamur.be" && files.length > 0){
      validationEtape8(newContent)
    }

    if(toEmail === "vincent@inclume.be" && newContent.toLowerCase().includes("namur") && newContent.toLowerCase().includes("https")){
      validationEtape10()
    }
    const updatedMails = [...mails, newMail];
    updateMails(updatedMails);

    handleMailValidation(toEmail, newContent);

    setActiveMail({
      id: null,
      content: null,
      from: null,
      emailFrom: null,
      to: null,
      emailTo: null,
      title: null,
      hour: null,
      files: null,
    });
    setNewMessage(false);
    setIsReply(false);
    setNewMessageSent(true);
  }, [mails, isReply, activeMail, updateMails]);

  return (
    <Window appName={Mail.title}>
      <div className="flex w-full bg-[#F9F9F9] relative h-full overflow-hidden">
        <div className="w-2/12 pl-1.5 pr-1.5">
          <div className="mail-folders pt-[20px]">
            <div
              className="nouveauMessage flex p-2.5 items-center h-[50px] rounded-[10px] bg-[#005FB8] text-[white] cursor-pointer"
              onClick={handleNewMessage}
            >
              <div className={`folder-icon w-[32px] mr-3`}>
                <img src={NewMessage} alt="Rédiger un nouveau mail" />
              </div>
              <div className="folder-title w-full">Nouveau message</div>
            </div>
            {["Boîte de réception", "Messages envoyés", "Brouillons", "Indésirables", "Corbeille"].map((folder) => (
              <Folder
                key={folder}
                title={folder}
                icon={folder === "Boîte de réception" ? Inbox : folder === "Messages envoyés" ? Send : folder === "Brouillons" ? Drafts : folder === "Indésirables" ? Spams : Trash}
                active={activeFolder === folder}
                onClick={() => handleFolderClick(folder)}
              />
            ))}
          </div>
        </div>

        <div className="w-3/12 bg-white border-gray-50 border overflow-scroll">
          <div className="mt-3.5 pl-6 border-b border-gray-50 pb-[15px]">
            <h1 className="text-[24px] font-semibold">{folderName}</h1>
            <p className="text-[12px] opacity-60">{sortedMessages.length} message(s)</p>
          </div>
          <div>
          {sortedMessages.map((message) => (
              <Message
                  key={message.id}
                  {...message}
                  isRead={message.isRead}
                  active={activeMail.id === message.id}
                  onClick={() => handleSelectMessage(message.id, message)}
              />
          ))}
          </div>
        </div>

        <div className="w-7/12 bg-white flex">
          <MailContent
            newMessageSent={newMessageSent}
            newMessage={newMessage}
            activeMail={!!activeMail.from}
            {...activeMail}
            onDeleteDraft={handleDeleteDraft}
            onDeleteMail={() => handleDeleteMail(activeMail.id!)}
            onReply={handleReplyMail}
            onSend={handleSendMail}
          />
        </div>
      </div>
    </Window>
  );
};

Mail.unmount = true;
Mail.title = "Boîte mail";
Mail.icon = <MailIcon />;
export default Mail;