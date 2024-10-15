import Window from "@/components/Os/Window";
import Toolbar from "./Ui/Toolbar";
import Sidebar from "./Ui/Sidebar";
import FilesList from "./Ui/Lists/Files";
import { useExplorer } from "@/providers/explorer";
import Button from "@/components/Ui/Buttons/button";
import { useTranslate } from "@tolgee/react";

const Explorer = ({ forceRender = false, ...props }) => {
	const { setPath, getStructure } = useExplorer();
	const { t } = useTranslate();

	const { onSave, onSelect, onCancel } = props;

	return (
		<Window
			appName={"Explorateur de fichier"}
			onClose={() => {
				setPath(getStructure());
			}}
			forceRender={forceRender}
			hideTopbar={onSave || onSelect || onCancel}
		>
			<div className="flex flex-col flex-1 overflow-auto bg-white dark:bg-black">
				<Toolbar />

				<div className="grid grid-cols-[320px_1fr] flex-1 overflow-auto">
					<Sidebar />
					<FilesList />
				</div>

				{(onSave || onSelect) && (
					<div className="flex items-center justify-end gap-2 px-3 py-3 bg-[#F7F7F7] dark:bg-gray-900">
						<Button onClick={onCancel} size="sm" theme="secondary">
							{t("cancel", "Annuler")}
						</Button>
						{onSave && (
							<Button onClick={onSave} size="sm">
								{t("save", "Enregistrer")}
							</Button>
						)}
					</div>
				)}
			</div>
		</Window>
	);
};

export default Explorer;

Explorer.title = "Explorateur de fichier";

Explorer.icon = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 252">
		<defs>
			<linearGradient
				id="linear0"
				x1="6"
				x2="6"
				y1="2"
				y2="8.5"
				gradientTransform="scale(10.5)"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopOpacity="0"></stop>
				<stop offset="1" stopOpacity="0.102"></stop>
			</linearGradient>
			<linearGradient
				id="linear1"
				x1="10"
				x2="16.5"
				y1="14"
				y2="20.5"
				gradientTransform="scale(10.5)"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopOpacity="0.102"></stop>
				<stop offset="1" stopOpacity="0"></stop>
			</linearGradient>
			<linearGradient
				id="linear2"
				x1="17.641"
				x2="23.807"
				y1="14.441"
				y2="20.607"
				gradientTransform="scale(10.5)"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopOpacity="0.102"></stop>
				<stop offset="1" stopOpacity="0"></stop>
			</linearGradient>
			<linearGradient
				id="linear3"
				x1="-1.581"
				x2="24.815"
				y1="6.167"
				y2="18.476"
				gradientTransform="scale(10.5)"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stopColor="#FFF" stopOpacity="0.2"></stop>
				<stop offset="1" stopColor="#FFF" stopOpacity="0"></stop>
			</linearGradient>
		</defs>
		<g>
			<path
				fill="#FFE55E"
				d="M126 89.25H0V31.5C0 25.7 4.7 21 10.5 21h89.25L126 42zm0 0"
			></path>
			<path
				fill="url(#linear0)"
				d="M126 89.25H0V31.5C0 25.7 4.7 21 10.5 21h89.25L126 42zm0 0"
			></path>
			<path
				fill="#FFF"
				fillOpacity="0.2"
				d="M99.75 21H10.5C4.7 21 0 25.7 0 31.5v2.625c0-5.8 4.7-10.5 10.5-10.5h89.25l26.25 21V42zm0 0"
			></path>
			<path
				fill="#FD5"
				d="M241.5 42H126L99.75 63H10.5C4.7 63 0 67.7 0 73.5V210c0 5.8 4.7 10.5 10.5 10.5h231c5.8 0 10.5-4.7 10.5-10.5V52.5c0-5.8-4.7-10.5-10.5-10.5zm0 0"
			></path>
			<path
				fillOpacity="0.102"
				d="M241.5 217.875h-231c-5.8 0-10.5-4.703-10.5-10.5V210c0 5.797 4.7 10.5 10.5 10.5h231c5.8 0 10.5-4.703 10.5-10.5v-2.625c0 5.797-4.7 10.5-10.5 10.5zm0 0"
			></path>
			<path
				fill="#15BEF0"
				d="M199.5 126h-147c-5.8 0-10.5 4.7-10.5 10.5v89.25a5.251 5.251 0 005.25 5.25h31.5a5.251 5.251 0 005.25-5.25V168h84v57.75a5.251 5.251 0 005.25 5.25h31.5a5.251 5.251 0 005.25-5.25V136.5c0-5.8-4.7-10.5-10.5-10.5zm0 0"
			></path>
			<path
				fill="#FFF"
				fillOpacity="0.2"
				d="M241.5 42H126L99.75 63H10.5C4.7 63 0 67.7 0 73.5v2.625c0-5.8 4.7-10.5 10.5-10.5h89.25l26.25-21h115.5c5.8 0 10.5 4.7 10.5 10.5V52.5c0-5.8-4.7-10.5-10.5-10.5zm0 0M199.5 126h-147c-5.8 0-10.5 4.7-10.5 10.5v2.625c0-5.8 4.7-10.5 10.5-10.5h147c5.8 0 10.5 4.7 10.5 10.5V136.5c0-5.8-4.7-10.5-10.5-10.5zm0 0"
			></path>
			<path
				fillOpacity="0.102"
				d="M204.75 228.375h-31.5a5.251 5.251 0 01-5.25-5.25v2.625a5.251 5.251 0 005.25 5.25h31.5a5.251 5.251 0 005.25-5.25v-2.625a5.251 5.251 0 01-5.25 5.25zm0 0M78.75 228.375h-31.5a5.251 5.251 0 01-5.25-5.25v2.625a5.251 5.251 0 005.25 5.25h31.5a5.251 5.251 0 005.25-5.25v-2.625a5.251 5.251 0 01-5.25 5.25zm0 0M84 165.375h84V168H84zm0 0"
			></path>
			<path fill="#FFF" d="M21 36.75h73.5v10.5H21zm0 0"></path>
			<path fill="#82C341" d="M21 36.75h15.75v10.5H21zm0 0"></path>
			<path fill="url(#linear1)" d="M84 168l52.5 52.5H168V168"></path>
			<path
				fill="url(#linear2)"
				d="M207.281 129.582v.02c1.64 1.851 2.719 4.226 2.719 6.898v84h31.5c5.8 0 10.5-4.703 10.5-10.5v-35.7zm0 0"
			></path>
			<path
				fill="url(#linear3)"
				d="M241.5 42H126L99.75 21H10.5C4.7 21 0 25.7 0 31.5V210c0 5.797 4.7 10.5 10.5 10.5H42v5.25a5.251 5.251 0 005.25 5.25h31.5a5.251 5.251 0 005.25-5.25v-5.25h84v5.25a5.251 5.251 0 005.25 5.25h31.5a5.251 5.251 0 005.25-5.25v-5.25h31.5c5.8 0 10.5-4.703 10.5-10.5V52.5c0-5.8-4.7-10.5-10.5-10.5zm0 0"
			></path>
		</g>
	</svg>
);
