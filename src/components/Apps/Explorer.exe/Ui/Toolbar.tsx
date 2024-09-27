import IconArrowLeft from "@/assets/icons/arrow-left.svg?react";
import HomeIcon from "@/assets/icons/home.svg?react";

const Toolbar = () => {
	return (
		<div className="p-4 bg-[#F7F7F7] dark:bg-gray-900 shadow flex items-center justify-between gap-6">
			<div className="flex items-center gap-6">
				<button type="button" className="px-2 first:pl-0">
					<IconArrowLeft className="w-6 h-auto" />
					<span className="sr-only">Afficher le dossier parent</span>
				</button>
			</div>

			<div className="relative flex items-center flex-1 px-1.5 py-1 rounded bg-gray-100/25 dark:bg-gray-800">
				<button className="rounded p-1.5 hover:bg-gray-50/50 transition dark:hover:bg-gray-700">
					<HomeIcon className="w-5 h-auto" />
				</button>
			</div>
		</div>
	);
};

export default Toolbar;
