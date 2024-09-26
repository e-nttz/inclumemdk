import IconArrowLeft from "@/assets/icons/arrow-left.svg?react";
import IconArrowRight from "@/assets/icons/arrow-right.svg?react";
import IconRefresh from "@/assets/icons/refresh.svg?react";
import { FormEvent } from "react";

const NavigationBar = () => {
	return (
		<div className="p-4 bg-[#F7F7F7] shadow flex items-center justify-between gap-6 dark:text-white dark:bg-[#292929]">
			<div className="flex items-center gap-6">
				<button type="button" className="px-2 first:pl-0">
					<IconArrowLeft className="w-6 h-auto" />
					<span className="sr-only">Afficher la page précédente</span>
				</button>
				<button
					type="button"
					className="px-2 pointer-events-none first:pl-0 opacity-20"
				>
					<IconArrowRight className="w-6 h-auto" />
					<span className="sr-only">Afficher la page suivante</span>
				</button>
				<button type="button" className="px-2 first:pl-0">
					<IconRefresh className="w-6 h-auto" />
					<span className="sr-only">Rafraichir la page</span>
				</button>
			</div>
			<form
				onSubmit={(e: FormEvent) => {
					e.preventDefault();
					console.log("submit");
				}}
				className="relative flex-1"
			>
				<input
					type="text"
					placeholder="Entrez une URL..."
					className="w-full px-2 py-2 transition border rounded-md shadow-sm border-gray-50 focus-visible:outline-accent"
				/>
				<button
					type="submit"
					className="absolute p-1 -translate-y-1/2 right-2 top-1/2 focus-visible:outline-accent"
				>
					<IconArrowRight className="w-6 h-auto" />
					<span className="sr-only">Aller à l'URL</span>
				</button>
			</form>
		</div>
	);
};

export default NavigationBar;
