import { useTranslate } from "@tolgee/react";
import { ContextMenu, ContextMenuTrigger } from "../../context-menu";
import OSContextualMenu from "../../Menus/ContextualMenu";
import { useExplorer } from "@/providers/explorer";import { useAuth } from "@/providers/auth";
import { getNextStep, saveStep } from "@/lib/client/quiz";

const Image = ({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
	const { t } = useTranslate();
	const {user, session} = useAuth();
	const validationEtape4 = async () =>{
		const step = await getNextStep(session);
		if (step.id === 4) {
			await saveStep(session, {
				test_step_template_id: step.id,
				is_successful: true,
			});
		}
	}
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

									createFile(fileName, "png", "test", currentPath);

									closeInfoWindow();
									validationEtape4();
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
