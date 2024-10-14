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
import { useTolgee, useTranslate } from "@tolgee/react";

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

	const tolgee = useTolgee(["language"]);

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

			<ContextMenuItem
				inset
				onClick={async () => {
					// If focusedElement is an image, add the image to the clipboard
					if (focusedElement.tagName === "IMG") {
						// try {
						// 	setCanvasImage(
						// 		(focusedElement as HTMLImageElement).src,
						// 		(imgBlob) => {
						// 			navigator.clipboard
						// 				.write([
						// 					new ClipboardItem({
						// 						"image/png": imgBlob,
						// 					}),
						// 				])
						// 				.then(() => console.info("Image copied!"))
						// 				.catch((e) => {
						// 					console.error(e);
						// 				});
						// 		}
						// 	);

						// 	return;
						// } catch (error) {
						// 	console.error(error);
						// }

						// const imgSrc = (focusedElement as HTMLImageElement).src;
						// navigator.clipboard.writeText(imgSrc);

						// Copy the image URL without domain name
						const imgSrc = (focusedElement as HTMLImageElement).src;

						const url = new URL(imgSrc);
						const pathname = url.pathname;

						navigator.clipboard.writeText(pathname);

						return;
					}

					// Get selected text
					const selection = window.getSelection();

					navigator.clipboard.writeText(selection.toString());
				}}
			>
				{t("copy", "Copier")}
				<ContextMenuShortcut>⌘C</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuItem
				inset
				onSelect={() => {
					// Paste selected content to target
					navigator.clipboard.readText().then(async (text) => {
						if (
							focusedElement.tagName === "TEXTAREA" ||
							focusedElement.tagName === "INPUT"
						) {
							// If the data contains a path like a file (/images/**/*.[ext]), create an image element without using blob
							const filePattern =
								/^\/images\/.*\.(png|jpg|jpeg|gif|webp|svg|pdf)$/;
							if (filePattern.test(text)) {
								beacon("message", {
									id: Math.random(),
									sender: 1,
									content: (
										<img
											src={text}
											alt="Pasted image"
											className="h-auto max-w-full"
										/>
									),
								});

								return;
							} else {
								(focusedElement as HTMLInputElement).value = text;

								return;
							}

							// Get navigator clipboard data and check if this is a file
							// navigator.clipboard.read().then(async (data) => {
							// if (data[0].types.includes("image/png")) {
							// 	// Get the image dataset
							// 	const blob = await data[0].getType("image/png");
							// 	// Create a new file reader
							// 	const reader = new FileReader();
							// 	// Read the blob as a data URL
							// 	reader.readAsDataURL(blob);
							// 	// When the reader is done
							// 	reader.onload = () => {
							// 		// Create a new message
							// 		const message = {
							// 			id: Math.random(),
							// 			sender: 1,
							// 			content: (
							// 				<img
							// 					src={reader.result as string}
							// 					alt="Pasted image"
							// 					className="h-auto max-w-full"
							// 				/>
							// 			),
							// 		};
							// 		// add message to the list
							// 		// use beaconMessage
							// 		window.dispatchEvent(
							// 			new CustomEvent("beaconMessage", {
							// 				detail: message,
							// 			})
							// 		);
							// 	};
							// }
							// });

							// (focusedElement as HTMLInputElement).value = text;
						} else if (focusedElement.classList.contains("message")) {
							// Add the text to the message
							const message = focusedElement.querySelector("p");
							message.textContent += text;
						} else if (
							focusedElement.tagName === "P" ||
							focusedElement.tagName === "SPAN"
						) {
							focusedElement.textContent += text;
						}
					});
				}}
			>
				{t("paste", "Coller")}
				<ContextMenuShortcut>⌘V</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuItem inset>
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
							// Dispatch false message using "beacomMessage" event
							beacon("call", {
								status: "incoming",
							});
						}}
					>
						{t("start_call", "Démarrer un appel")}
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
