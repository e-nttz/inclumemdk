import {
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
} from "@/components/Ui/context-menu";
import { useOS } from "@/providers/InclumeOS";
import { useTranslation } from "react-i18next";

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
	const { t } = useTranslation();

	return (
		<ContextMenuContent
			className="w-64 z-[15555000]"
			sticky={"always"}
			onPointerDown={(e) => console.log(e)}
		>
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
				{t("Copy")}
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
								// Send new message with image
								window.dispatchEvent(
									new CustomEvent("beaconMessage", {
										detail: {
											id: Math.random(),
											sender: 1,
											content: (
												<img
													src={text}
													alt="Pasted image"
													className="h-auto max-w-full"
												/>
											),
										},
									})
								);

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
				{t("Paste")}
				<ContextMenuShortcut>⌘V</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuItem inset>
				{t("Pause")}
				<ContextMenuShortcut>&#8679;P</ContextMenuShortcut>
			</ContextMenuItem>
			<ContextMenuSeparator />
			<ContextMenuSub>
				<ContextMenuSubTrigger inset>
					{t("Paramètres")}
				</ContextMenuSubTrigger>
				<ContextMenuSubContent className="w-48">
					<ContextMenuItem
						onClick={() => {
							changeTheme(theme === "light" ? "dark" : "light");
						}}
					>
						{theme === "light"
							? t("Passez en mode sombre")
							: t("Passez en mode clair")}
					</ContextMenuItem>
				</ContextMenuSubContent>
			</ContextMenuSub>
			<ContextMenuSub>
				<ContextMenuSubTrigger inset>
					{t("Outils de développement")}
				</ContextMenuSubTrigger>
				<ContextMenuSubContent className="w-48">
					<ContextMenuItem
						onClick={() => {
							// Dispatch false message using "beacomMessage" event
							window.dispatchEvent(
								new CustomEvent("beaconMessage", {
									detail: {
										id: Math.random(),
										sender: 4,
										content:
											"Velit enim sit magna. Nostrud do nisi adipisicing. Proident excepteur sint eiusmod sint. Ut ipsum incididunt non do aute sunt sint aliquip aute esse elit esse eiusmod anim non. Magna ea mollit consequat cupidatat consequat ea eiusmod irure officia tempor non cupidatat. Excepteur sit et mollit adipisicing occaecat occaecat proident. Id amet cillum dolore veniam reprehenderit in adipisicing est.",
									},
								})
							);
						}}
					>
						{t("Envoyer un message")}
					</ContextMenuItem>
				</ContextMenuSubContent>
			</ContextMenuSub>
		</ContextMenuContent>
	);
};

export default OSContextualMenu;
