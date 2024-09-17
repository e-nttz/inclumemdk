const GridIcons = () => {
	const buttonClass =
		"w-[100px] h-[100px] flex flex-col items-center justify-center p-4 transition duration-150 rounded group hover:bg-white/30 focus:bg-white/30 active:bg-white/75 dark:hover:bg-white/25 dark:active:bg-white/50";
	return (
		<ul className="absolute top-0 left-0 flex flex-col flex-wrap items-start justify-start max-h-full gap-4 p-4 pb-0">
			<li>
				<button className={buttonClass}>
					<img src="./images/icons/desktop.png" alt="Start Menu" />
					<span className="text-[12px] text-white">Démarrer</span>
				</button>
			</li>
			<li>
				<button className={buttonClass}>
					<img
						src="./images/icons/folder-downloads.png"
						alt="Téléchargements"
					/>
					<span className="text-[12px] text-white">Éditeur de texte</span>
				</button>
			</li>
			<li>
				<button className={buttonClass}>
					<img src="./images/icons/folder-games.png" alt="Tableur" />
					<span className="text-[12px] text-white">Tableur</span>
				</button>
			</li>
		</ul>
	);
};

export default GridIcons;
