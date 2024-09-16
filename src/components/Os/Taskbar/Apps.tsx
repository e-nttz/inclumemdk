import { Transition } from "@headlessui/react";

interface AppsProps {
	startMenuOpen: boolean;
	setStartMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Apps = ({ startMenuOpen, setStartMenuOpen }: AppsProps) => {
	return (
		<nav className="flex items-center justify-center gap-1 h-14">
			<button
				type="button"
				className="relative transition duration-150 rounded group hover:bg-white/50 focus:outline-none active:bg-white/75 dark:hover:bg-black/25 dark:active:bg-black/50"
				onClick={() => setStartMenuOpen((prevState) => !prevState)}
			>
				<Transition
					show={startMenuOpen}
					enter="transition ease-out duration-200"
					enterFrom="opacity-0 scale-0"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-0"
				>
					<span className="absolute bottom-0 left-0 right-0 h-1 mx-4 bg-blue-500 rounded" />
				</Transition>
				<span className="block p-2 transition duration-75 active:scale-90">
					<img
						className="relative w-8 h-8"
						src="./images/icons/windows.png"
						alt="Start Menu"
					/>
				</span>
			</button>
			<button
				type="button"
				id="btn-fullscreen"
				className="relative transition duration-75 rounded group hover:bg-white/50 focus:outline-none active:bg-white/75 dark:hover:bg-black/25 dark:active:bg-black/50"
			>
				<span className="block p-2 transition duration-75 active:scale-90">
					<img
						className="relative w-8 h-8"
						src="./images/icons/desktop.png"
						alt="Full screen mode"
					/>
				</span>
			</button>
			<button
				type="button"
				className="relative transition duration-150 rounded group hover:bg-white/50 focus:outline-none active:bg-white/75 dark:hover:bg-black/25 dark:active:bg-black/50"
			>
				<span className="block p-2 transition duration-75 active:scale-90">
					<img
						className="relative w-8 h-8"
						src="./images/icons/folder.png"
						alt="Explorer"
					/>
				</span>
			</button>
		</nav>
	);
};

export default Apps;
