import FolderIcon from "@/assets/icons/colors/folder.svg?react";

const Icon = ({ type, className }) => {
	const icons = {
		folder: FolderIcon,
	};

	const Icon = icons?.[type] ?? icons["folder"];

	return <Icon className={className} />;
};

export default Icon;
