import { classNames } from "@/helpers/sanitize";
import { Transition } from "@headlessui/react";

interface StartMenuProps {
	startMenuOpen: boolean;
}

const StartMenu = ({ startMenuOpen }: StartMenuProps) => {
	return (
		<Transition
			show={startMenuOpen}
			enter="transition ease-out duration-300"
			enterFrom="opacity-0 translate-y-full"
			enterTo="opacity-100 translate-y-0"
			leave="transition ease-in duration-125"
			leaveFrom="opacity-100 translate-y-0"
			leaveTo="opacity-0 translate-y-60"
		>
			<div
				id="start-menu"
				className={classNames(
					"absolute w-3/5 mx-auto overflow-hidden bg-blue-100 shadow-lg bottom-5 left-1/2 -ml-96 rounded-xl backdrop-blur-lg backdrop-filter dark:bg-gray-800/90 xl:w-2/5"
				)}
			>
				<div className="px-12 py-10 space-y-6 grow">
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<h2 className="font-semibold">Pinned</h2>
							<a
								className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-left bg-white rounded hover:bg-white/50 focus:outline-none active:bg-white dark:bg-black/30 dark:hover:bg-black/50 dark:active:bg-black/30"
								href="javascript:void(0)"
							>
								<span>All Apps</span>
								<svg
									className="inline-block w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M10.75 8.75L14.25 12L10.75 15.25"
									></path>
								</svg>
							</a>
						</div>
						<div className="grid grid-cols-6 gap-1 text-center">
							<a
								className="block p-3 text-sm font-medium transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
								href="javascript:void(0)"
							>
								<img
									className="w-16 mx-auto mb-2"
									src="./images/icons/folder-downloads.png"
									alt="Folder Downloads"
								/>
								<span>Downloads</span>
							</a>
							<a
								className="block p-3 text-sm font-medium transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
								href="javascript:void(0)"
							>
								<img
									className="w-16 mx-auto mb-2"
									src="./images/icons/folder-videos.png"
									alt="Folder Videos"
								/>
								<span>Videos</span>
							</a>
							<a
								className="block p-3 text-sm font-medium transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
								href="javascript:void(0)"
							>
								<img
									className="w-16 mx-auto mb-2"
									src="./images/icons/folder-games.png"
									alt="Folder Games"
								/>
								<span>Games</span>
							</a>
							<a
								className="block p-3 text-sm font-medium transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
								href="javascript:void(0)"
							>
								<img
									className="w-16 mx-auto mb-2"
									src="./images/icons/folder-links.png"
									alt="Folder Favorites"
								/>
								<span>Favorites</span>
							</a>
							<a
								className="block p-3 text-sm font-medium transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
								href="javascript:void(0)"
							>
								<img
									className="w-16 mx-auto mb-2"
									src="./images/icons/folder-user.png"
									alt="Folder Folder"
								/>
								<span>User Folder</span>
							</a>
							<a
								className="block p-3 text-sm font-medium transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
								href="javascript:void(0)"
							>
								<img
									className="w-16 mx-auto mb-2"
									src="./images/icons/folder-zip.png"
									alt="Folder Archives"
								/>
								<span>Archives</span>
							</a>
							<a
								className="block p-3 text-sm font-medium transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
								href="javascript:void(0)"
							>
								<img
									className="w-16 mx-auto mb-2"
									src="./images/icons/video.png"
									alt="Movies"
								/>
								<span>Movies</span>
							</a>
							<a
								className="block p-3 text-sm font-medium transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
								href="javascript:void(0)"
							>
								<img
									className="w-16 mx-auto mb-2"
									src="./images/icons/phone.png"
									alt="Mobile"
								/>
								<span>Mobile</span>
							</a>
							<a
								className="block p-3 text-sm font-medium transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
								href="javascript:void(0)"
							>
								<img
									className="w-16 mx-auto mb-2"
									src="./images/icons/options.png"
									alt="Settings"
								/>
								<span>Settings</span>
							</a>
							<a
								className="block p-3 text-sm font-medium transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
								href="javascript:void(0)"
							>
								<img
									className="w-16 mx-auto mb-2"
									src="./images/icons/bin.png"
									alt="Bin"
								/>
								<span>Bin</span>
							</a>
						</div>
					</div>
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<h2 className="font-semibold">Recommended</h2>
							<a
								className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-left bg-white rounded hover:bg-white/50 focus:outline-none active:bg-white dark:bg-black/30 dark:hover:bg-black/50 dark:active:bg-black/30"
								href="https://pixelcave.com/freebies"
							>
								<span>More Freebies</span>
								<svg
									className="inline-block w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M10.75 8.75L14.25 12L10.75 15.25"
									></path>
								</svg>
							</a>
						</div>
						<div className="grid grid-cols-2 gap-1">
							<a
								className="flex items-center gap-3 p-3 text-sm font-medium transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
								href="https://pixelcave.com"
							>
								<span className="relative inline-block size-10">
									<svg
										className="absolute inset-0 inline-block text-[#e9263c] transition duration-100 group-hover:scale-95 group-active:scale-100"
										xmlns="http://www.w3.org/2000/svg"
										fill-rule="evenodd"
										fill="currentColor"
										stroke-linejoin="round"
										stroke-miterlimit="2"
										clip-rule="evenodd"
										viewBox="0 0 134 134"
									>
										<path d="M0 66.667C0 29.872 29.872 0 66.667 0c36.794 0 66.666 29.872 66.666 66.667 0 36.794-29.872 66.666-66.666 66.666-19.903 0-37.781-8.74-50-22.589V125c0 4.599-3.734 8.333-8.334 8.333A8.337 8.337 0 0 1 0 125V66.667Zm16.667 0c0 27.595 22.404 50 50 50 27.595 0 50-22.405 50-50 0-27.596-22.405-50-50-50-27.596 0-50 22.404-50 50Z"></path>
									</svg>
									<svg
										className="absolute inset-0 inline-block text-[#1e293b] dark:text-slate-200"
										xmlns="http://www.w3.org/2000/svg"
										fill-rule="evenodd"
										fill="currentColor"
										stroke-linejoin="round"
										stroke-miterlimit="2"
										clip-rule="evenodd"
										viewBox="0 0 134 134"
									>
										<path d="M90.232 90.232C84.199 96.266 75.865 100 66.667 100c-18.398 0-33.334-14.936-33.334-33.333 0-18.398 14.936-33.334 33.334-33.334 9.198 0 17.532 3.734 23.566 9.768a8.305 8.305 0 0 1 2.494 5.942 8.337 8.337 0 0 1-8.333 8.333 8.31 8.31 0 0 1-5.944-2.493A16.614 16.614 0 0 0 66.667 50C57.468 50 50 57.468 50 66.667c0 9.198 7.468 16.666 16.667 16.666 4.599 0 8.766-1.866 11.783-4.883a8.308 8.308 0 0 1 5.944-2.494 8.337 8.337 0 0 1 8.333 8.333 8.304 8.304 0 0 1-2.495 5.943Z"></path>
									</svg>
								</span>
								<div>
									<h3>pixelcave</h3>
									<p className="opacity-75">Check out more projects</p>
								</div>
							</a>
							<a
								className="flex items-center gap-3 p-3 text-sm font-medium transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
								href="https://pixelcave.com/download/freebie-45-windows-11-tailwind"
							>
								<svg
									className="inline-block hi-solid hi-download size-10"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
								<div>
									<h3>Download this template</h3>
									<p className="opacity-75">
										Feel free to grab it and play around
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between flex-none px-12 py-4 bg-blue-200/50 backdrop-blur-lg backdrop-filter dark:bg-gray-800/90">
					<a
						className="p-3 -ml-3 text-sm font-medium leading-5 transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
						href="https://twitter.com/pixelcave_john"
					>
						<span>By John Champ</span>
						<br />
						<span className="opacity-75">@pixelcave_john</span>
					</a>
					<button
						type="button"
						className="p-3 -mr-3 transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
					>
						<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M18.2813 12.0313L11.9687 5.7187C11.4896 5.23964 10.6829 5.36557 10.3726 5.96785L6.75 13L11 17.25L18.0321 13.6274C18.6344 13.3171 18.7604 12.5104 18.2813 12.0313Z"
							></path>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M4.75 19.25L8.5 15.5"
							></path>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M13.75 7.25L16.25 4.75"
							></path>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								d="M16.75 10.25L19.25 7.75"
							></path>
						</svg>
					</button>
				</div>
			</div>
		</Transition>
	);
};

export default StartMenu;
