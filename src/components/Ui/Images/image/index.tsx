import { useTranslate } from "@tolgee/react";
import { ContextMenu, ContextMenuTrigger } from "../../context-menu";
import OSContextualMenu from "../../Menus/ContextualMenu";
import { useExplorer } from "@/providers/explorer";

const Image = ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
	const { t } = useTranslate();

	const { handleInfoWindow, closeInfoWindow, createFile } = useExplorer();

	return (
		<ContextMenu>
			<ContextMenuTrigger>
				<img {...props} />

				<OSContextualMenu
					actions={[
						{
							label: t("save_image", "Enregistrer l'image"),
							action: () => {
								handleInfoWindow(undefined, (currentPath) => {
									const fileName = prompt(
										t("enter_filename", "Entrez le nom du fichier")
									);

									console.log("currentPath = ", currentPath);

									createFile(fileName, "png", "test", currentPath);

									closeInfoWindow();
								});
							},
						},
					]}
				/>
			</ContextMenuTrigger>
		</ContextMenu>
	);
};

export default Image;
