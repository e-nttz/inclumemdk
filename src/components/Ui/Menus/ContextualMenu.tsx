import {
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
} from "@/components/Ui/context-menu";
import { beacon } from "@/helpers/beacon";
import { useOS } from "@/providers/InclumeOS";
import { useNotification } from "@/providers/notifications";
import { useStepsListener } from "@/providers/stepsListener";
import { useTolgee, useTranslate } from "@tolgee/react";
import { useExplorer } from "@/providers/explorer";
import { useAuth } from "@/providers/auth";
import { getNextStep, saveStep } from "@/lib/client/quiz";
interface OSContextualMenuProps {
	actions?: {
		label: string;
		shortcut?: string;
		action: () => void;
	}[];
}

	  
// const setCanvasImage = (path, func) => {
// 	const img = document.createElement("img");

// 	const c = document.createElement("canvas") as HTMLCanvasElement;
// 	const ctx = c.getContext("2d");

// 	img.onload = () => {
// 		c.width = img.width;
// 		c.height = img.height;

// 		c.dataset.srcExemple = path;

// 		ctx.drawImage(img, 0, 0);
// 		c.toBlob((blob) => {
// 			func(blob);
// 		}, "image/png");
// 	};

// 	img.src = path;

// 	return img;
// };

const OSContextualMenu = ({ actions }: OSContextualMenuProps) => {
	const { changeTheme, theme, focusedElement } = useOS();
	const { t } = useTranslate();
	const {user, session} = useAuth();
	const validationEtape4 = async () =>{
		const step = await getNextStep(session);
		if (step.id === 5) {
			await saveStep(session, {
				test_step_template_id: step.id,
				is_successful: true,
			});
		}
	}
	const tolgee = useTolgee(["language"]);
	const { addNotification } = useNotification();
	const { setPauseMode, clearTimer } = useStepsListener();

	const { createFile, handleInfoWindow, closeInfoWindow } = useExplorer();
	const validationEtape18 = async () =>{
			const step = await getNextStep(session);
			if (step.id === 64) {
				await saveStep(session, {
					test_step_template_id: step.id,
					is_successful: true,
			});
			setTimeout(() => {
							beacon("message", {
							id: Math.random(),
							sender: 0,
							content: "Merci pour tout ce que tu as fait pour moi, avant de partir, n’oublie pas d’éteindre mon ordinateur!",
							});
							addNotification({
							title: "Nouveau message !",
							message:
								"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
						});
					},5000)
		}
	}
	return (
		<ContextMenuContent className="w-64 z-[15555000]" sticky={"always"}>
			{actions?.map((action) => {
				return (
					<ContextMenuItem
						key={action.label}
						inset
						onClick={action.action}
					>
						{action.label}
						{action.shortcut && (
							<ContextMenuShortcut>
								{action.shortcut}
							</ContextMenuShortcut>
						)}
					</ContextMenuItem>
				);
			})}

			{actions?.length && <ContextMenuSeparator />}

			{focusedElement &&
  				focusedElement.tagName !== "IMG" &&
  				!(focusedElement.tagName === "DIV" && getComputedStyle(focusedElement).backgroundImage !== "none") && (
				<ContextMenuItem
				inset
				onClick={async () => {
					try {
					// Vérifier si l'élément ciblé est une image
					if (focusedElement.tagName === "IMG") {
						const imgSrc = (focusedElement as HTMLImageElement).src;

						// Copier l'URL relative de l'image (sans domaine)
						await navigator.clipboard.writeText(imgSrc);
						console.info("Image URL copiée !");
						return;
					}

					if (focusedElement.tagName === "DIV") {
						const backgroundImage = window.getComputedStyle(focusedElement).backgroundImage;
				
						if (backgroundImage && backgroundImage !== 'none') {
						  // Extraire l'URL du background-image avec une meilleure gestion des espaces et guillemets
						  const urlMatch = backgroundImage.match(/url\(["']?(.*?)["']?\)/);
				
						  if (urlMatch && urlMatch[1]) {
							let backgroundUrl = urlMatch[1].trim(); // Nettoyage de l'URL
				
							// Si l'URL est relative, nous la transformons en URL absolue
							if (!backgroundUrl.startsWith('http')) {
							  const baseUrl = window.location.origin; // Utilise l'origine de la page comme base
							  backgroundUrl = new URL(backgroundUrl, baseUrl).href;
							}
				
							// Copier l'URL relative de l'image de fond (sans domaine)
							await navigator.clipboard.writeText(backgroundUrl);
							console.info("URL de l'image de fond copiée !");
							return;
						  }
						}
					  }
					  
					// Sinon, si ce n'est pas une image, copier le texte sélectionné
					const selection = window.getSelection();
					if (selection && selection.toString()) {
						await navigator.clipboard.writeText(selection.toString());
						beacon("triggerStep", {
							value: "copyLink",
						});
						console.info("Texte copié !");
					} else {
						console.warn("Aucun texte sélectionné !");
					}
					} catch (error) {
					console.error("Erreur lors de la copie :", error);
					}
				}}
				>
				{t("copy", "Copier")}
				<ContextMenuShortcut>⌘C</ContextMenuShortcut>
			</ContextMenuItem>
			)}

			<ContextMenuItem
				inset
				onSelect={() => {
					navigator.clipboard.readText().then(async (text) => {
						if (
							focusedElement.tagName === "TEXTAREA" ||
							focusedElement.tagName === "INPUT"
						) {
							const inputElement = focusedElement as HTMLInputElement;
				
							// Si un texte est sélectionné, on le remplace, sinon on insère à la position actuelle du curseur
							const start = inputElement.selectionStart ?? 0;
							const end = inputElement.selectionEnd ?? 0;
				
							// Insérer le texte à la position du curseur
							inputElement.setRangeText(text, start, end, "end");
				
							// Créer et déclencher un événement `InputEvent`
							const event = new InputEvent("input", { bubbles: true, cancelable: true });
							inputElement.dispatchEvent(event);
				
							return;
						} else if (focusedElement.classList.contains("message")) {
							const message = focusedElement.querySelector("p");
							message.textContent += text;
						} else if (
							focusedElement.tagName === "P" ||
							focusedElement.tagName === "SPAN" ||
							focusedElement.tagName === "DIV"
						) {
							focusedElement.textContent += text;
						}
					});
				}}
				
			>
				{t("paste", "Coller")}
				<ContextMenuShortcut>⌘V</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuItem inset onClick={() => {
				beacon("triggerStep", {
					value: "clicDroit",
				  });
				validationEtape4();
				if (focusedElement.tagName === "IMG") {
					const imgSrc = (focusedElement as HTMLImageElement).src;
					handleInfoWindow(undefined, (currentPath) => {
						const fileName = (document.querySelector("#inputSaveFile") as HTMLInputElement).value;
						createFile(
							fileName,
							"png",
							{
								url: imgSrc,
							},
							currentPath
						);
						closeInfoWindow();
					});
				}
				if (focusedElement.tagName === "DIV") {
					const backgroundImage = window.getComputedStyle(focusedElement).backgroundImage;
			
					if (backgroundImage && backgroundImage !== 'none') {
					  // Extraire l'URL du background-image avec une meilleure gestion des espaces et guillemets
					  const urlMatch = backgroundImage.match(/url\(["']?(.*?)["']?\)/);
			
					  if (urlMatch && urlMatch[1]) {
						let backgroundUrl = urlMatch[1].trim(); // Nettoyage de l'URL
			
						// Si l'URL est relative, nous la transformons en URL absolue
						if (!backgroundUrl.startsWith('http')) {
						  const baseUrl = window.location.origin; // Utilise l'origine de la page comme base
						  backgroundUrl = new URL(backgroundUrl, baseUrl).href;
						}
						handleInfoWindow(undefined, (currentPath) => {
							const fileName = (document.querySelector("#inputSaveFile") as HTMLInputElement).value;
							createFile(
								fileName,
								"png",
								{
									url: backgroundUrl,
								},
								currentPath
							);
							closeInfoWindow();
						});
					}
				}
			}}}>
				{t("download picture", "Télécharger l'image")}
			</ContextMenuItem>
			<ContextMenuItem inset onClick={() => setPauseMode(true)}>
				{t("pause", "Pause")}
				<ContextMenuShortcut>&#8679;P</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuSub>
				<ContextMenuSubTrigger inset>
					{t("settings", "Paramètres")}
				</ContextMenuSubTrigger>
				<ContextMenuSubContent className="w-48">
					<ContextMenuItem
						onClick={() => {
							changeTheme(theme === "light" ? "dark" : "light");
							validationEtape18();
						}}
					>
						{theme === "light"
							? t("dark_mode", "Passez en mode sombre")
							: t("light_mode", "Passez en mode clair")}
					</ContextMenuItem>
				</ContextMenuSubContent>
			</ContextMenuSub>
			<ContextMenuSub>
				<ContextMenuSubTrigger inset>
					{t("development_tools", "Outils de développement")}
				</ContextMenuSubTrigger>
				<ContextMenuSubContent className="w-48">
					<ContextMenuItem
						onClick={() => {
							// Dispatch false message using "beacomMessage" event
							beacon("message", {
								id: Math.random(),
								sender: 4,
								content: "Hello, world!",
							});
						}}
					>
						{t("send_message", "Envoyer un message")}
					</ContextMenuItem>
					<ContextMenuItem
						onClick={() => {
							beacon("call", {
								status: "incoming",
							});
						}}
					>
						{t("start_call", "Démarrer un appel")}
					</ContextMenuItem>
					<ContextMenuItem
						onClick={() => {
							// Dispatch false message using "beacomMessage" event
							addNotification({
								title: "Notification",
								message:
									"<strong>Bonjour !</strong> Adipisicing pariatur minim enim magna fugiat aute aliquip sint minim ullamco. Eu amet duis laborum anim enim sunt irure ullamco incididunt pariatur consectetur sit id et cillum.\n\nSit pariatur tempor laboris minim nisi amet consectetur dolore excepteur occaecat ea excepteur excepteur. Proident Lorem dolore irure nostrud anim dolore. Ea ea ex incididunt. Et cupidatat sunt velit tempor dolor anim officia sit culpa ad magna.",
							});
						}}
					>
						Envoyer une notification
					</ContextMenuItem>
					<ContextMenuItem onClick={() => clearTimer()}>
						Réinitialiser le timer
					</ContextMenuItem>
				</ContextMenuSubContent>
			</ContextMenuSub>
			<ContextMenuSub>
				<ContextMenuSubTrigger inset>
					{t("language", "Language")}

					{/* <ContextMenuShortcut>FR</ContextMenuShortcut> */}
				</ContextMenuSubTrigger>
				<ContextMenuSubContent className="w-48">
					<ContextMenuRadioGroup value={tolgee.getLanguage()}>
						<ContextMenuRadioItem
							value="fr"
							onClick={() => {
								tolgee.changeLanguage("fr");
							}}
						>
							Français
						</ContextMenuRadioItem>
						<ContextMenuRadioItem
							value="en"
							onClick={() => {
								tolgee.changeLanguage("en");
							}}
						>
							English
						</ContextMenuRadioItem>
					</ContextMenuRadioGroup>
				</ContextMenuSubContent>
			</ContextMenuSub>
		</ContextMenuContent>
	);
};

export default OSContextualMenu;
