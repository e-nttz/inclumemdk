import { apps } from "@/components/Apps";
import { classNames } from "@/helpers/sanitize";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useAuth } from "@/providers/auth";
import { getNextStep, saveStep, updateTestSession } from "@/lib/client/quiz";
import { useOS } from "@/providers/InclumeOS";
import { Transition } from "@headlessui/react";
import { useRef } from "react";

const StartMenu = () => {
	const { startMenuOpen, setStartMenuOpen, launchApp } = useOS();
	const { logout, session } = useAuth();
  	const validationEtape19 = async (confirmation) =>{
		const step = await getNextStep(session);
		if (step.id === 41) {
			await saveStep(session, {
				test_step_template_id: step.id,
				is_successful: true,
			});
		}
		await updateTestSession(session, true)
		logout();
		window.location.reload();
	}
	const nodeRef = useRef<HTMLDivElement>(null);

	useClickOutside(nodeRef, (e: MouseEvent) => {
		// Check if e.target has the id of start-menu, or if it's a child of start-menu
		if ((e.target as HTMLElement).closest("#start-menu")) {
			return;
		}

		setStartMenuOpen(false);
	});

	return (
		<Transition
			show={startMenuOpen}
			enter="transition ease-out duration-300"
			enterFrom="opacity-0 translate-y-full"
			enterTo="opacity-100 translate-y-0"
			leave="transition ease-in duration-125"
			leaveFrom="opacity-100 translate-y-0"
			leaveTo="opacity-0 translate-y-60"
			unmount={false}
		>
			<div
				id="start-menu"
				className={classNames(
					"absolute w-[800px] mx-auto overflow-hidden bg-blue-100 shadow-lg bottom-5 left-1/2 -ml-96 rounded-xl backdrop-blur-lg backdrop-filter dark:bg-gray-800/90 z-[9998]"
				)}
				ref={nodeRef}
			>
				<div className="px-12 py-10 space-y-6 grow">
					<div className="space-y-4">
						<div className="flex items-center justify-between px-2">
							<h2 className="text-lg font-semibold">Épinglé</h2>
							<a
								className="inline-flex items-center gap-1 px-2 py-1 text-[15px] font-medium text-left bg-white rounded hover:bg-white/50 focus:outline-none active:bg-white dark:bg-black/30 dark:hover:bg-black/50 dark:active:bg-black/30"
								href="#"
							>
								<span>Toutes les apps</span>
								<svg
									className="inline-block w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M10.75 8.75L14.25 12L10.75 15.25"
									></path>
								</svg>
							</a>
						</div>
						<ul className="flex flex-wrap items-start justify-start max-h-full gap-16 !mt-9">
							{Object.entries(apps).map(([, value]: any) => (
								<li key={`start-menu-${value.title}`}>
									<button
										className="w-[70px] flex flex-col items-center justify-start transition duration-150 rounded group hover:bg-white/30 focus:bg-white/30 active:bg-white/75 dark:hover:bg-white/25 dark:active:bg-white/50"
										onClick={() => {
											launchApp({
												title: value.title,
												icon: value.icon,
											});
											setStartMenuOpen(false);
										}}
									>
										<figure className="w-[52px] h-[52px] mb-2 [&>svg]:mx-auto [&>svg]:w-full [&>svg]:h-full">
											{value.icon}
										</figure>
										<span className="text-sm font-medium">
											{value.title}
										</span>
									</button>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="flex items-center justify-between flex-none px-12 py-4 border-t border-t-black border-opacity-[0.08] dark:bg-gray-800/90">
					<div className="flex items-center gap-4">
						<figure className="relative w-10 h-10 before:bg-[#84ADC9] before:absolute before:inset-0 before:rounded-full before:z-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="40"
								height="40"
								fill="none"
								className="relative z-10"
							>
								<mask
									id="a"
									width="40"
									height="40"
									x="0"
									y="0"
									maskUnits="userSpaceOnUse"
									style={{ maskType: "alpha" }}
								>
									<circle
										cx="20"
										cy="20"
										r="20"
										fill="#84ADC9"
									></circle>
								</mask>
								<g mask="url(#a)">
									<path
										fill="#D7EBFF"
										d="M14.594 30.318h10.33a1.6 1.6 0 011.602 1.597v8.51a3.898 3.898 0 01-3.901 3.891h-5.728a3.898 3.898 0 01-3.9-3.892v-8.509c0-.882.716-1.597 1.6-1.597h-.003z"
									></path>
									<path
										fill="#15365E"
										d="M26.525 35.628H12.992v.708h13.533v-.708z"
									></path>
									<path
										fill="#D7EBFF"
										d="M16.587 37.844a1.86 1.86 0 001.863-1.858 1.86 1.86 0 00-1.863-1.858 1.86 1.86 0 00-1.862 1.858 1.86 1.86 0 001.862 1.858z"
									></path>
									<path
										fill="#15365E"
										d="M16.586 38.198a2.216 2.216 0 01-2.217-2.212 2.218 2.218 0 014.435 0 2.219 2.219 0 01-2.218 2.212zm0-3.717a1.51 1.51 0 00-1.508 1.505 1.509 1.509 0 003.017 0c0-.83-.677-1.505-1.509-1.505zm14.192-.218a2.304 2.304 0 002.306-2.301 2.304 2.304 0 00-2.306-2.302 2.304 2.304 0 00-2.307 2.302 2.304 2.304 0 002.307 2.301z"
									></path>
									<path
										fill="#D7EBFF"
										d="M34.259 32.16l1.146 8.15a1.477 1.477 0 01-1.259 1.666l-3.856.54a1.48 1.48 0 01-1.67-1.256l-1.147-8.15a.679.679 0 01.58-.767l5.433-.761a.68.68 0 01.77.578h.003z"
									></path>
									<path
										fill="#15365E"
										d="M8.408 34.714a2.218 2.218 0 002.221-2.216 2.218 2.218 0 00-2.22-2.216 2.219 2.219 0 00-2.222 2.216c0 1.224.995 2.216 2.221 2.216z"
									></path>
									<path
										fill="#D7EBFF"
										d="M11.64 33.428l-.667 7.898a1.422 1.422 0 01-1.537 1.295L5.7 42.306a1.421 1.421 0 01-1.297-1.532l.667-7.899a.655.655 0 01.709-.597l5.268.444c.36.03.629.347.598.706h-.003z"
									></path>
									<path
										fill="#FF5B00"
										d="M35.202 22.11l-3.073 1.15V11.917l3.073 1.15c.513.194.853.68.853 1.226v6.587c0 .547-.34 1.036-.853 1.226v.003zm-30.885 0l3.074 1.15V11.917l-3.074 1.15a1.31 1.31 0 00-.852 1.226v6.587c0 .547.34 1.036.852 1.226v.003z"
									></path>
									<path
										fill="#D7EBFF"
										d="M33.736 12.825v9.524a5.79 5.79 0 01-.462 2.28 5.878 5.878 0 01-3.12 3.113 5.812 5.812 0 01-2.282.46H11.65a5.8 5.8 0 01-2.282-.46 5.821 5.821 0 01-1.862-1.255 5.863 5.863 0 01-1.258-1.858 5.779 5.779 0 01-.462-2.28v-9.524c0-.79.154-1.555.462-2.277A5.747 5.747 0 017.505 8.69a5.878 5.878 0 011.862-1.254 5.811 5.811 0 012.282-.461h16.223c.792 0 1.558.153 2.282.46a5.762 5.762 0 011.863 1.255c.537.536.96 1.161 1.257 1.858.308.722.462 1.49.462 2.277z"
									></path>
									<path
										fill="#15365E"
										d="M11.65 9.633h16.223a3.196 3.196 0 013.199 3.192v9.524a3.196 3.196 0 01-3.199 3.19H11.65a3.196 3.196 0 01-3.199-3.19v-9.524a3.196 3.196 0 013.199-3.192z"
									></path>
									<path
										fill="#fff"
										d="M18.165 12.332c-.322-.519-1.905-.608-2.163.06-.258.668-.434 5.193 0 5.786.433.593 1.798.622 2.045.079.258-.569.54-5.243.118-5.926zm3.615 0c.337-.519 1.999-.608 2.27.06.273.672.456 5.193 0 5.786-.443.583-1.883.622-2.148.079-.265-.544-.57-5.243-.126-5.926h.004zm-1.404 9.363c-4.227.107-4.67-1.208-5.964-1.198-.666.004-.25 3.235 6.01 3.074 6.105-.158 6.62-2.988 5.818-3.095-.652-.086-1.422 1.108-5.864 1.219z"
									></path>
								</g>
							</svg>
						</figure>
						<span className="font-medium">Inclume</span>
					</div>
					<button
						type="button"
						className="p-3 -mr-3 transition rounded hover:bg-blue-200 focus:outline-none active:bg-transparent dark:hover:bg-black/20 dark:active:bg-black/30"
						onClick={() => {
							const confirmation = confirm(
								"Voulez-vous vraiment éteindre votre ordinateur ? Toutes modifications non sauvegardées seront perdues."
							);

							validationEtape19(confirmation);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-5 h-auto"
							fill="#000"
							version="1.1"
							viewBox="0 0 325.214 325.214"
						>
							<path d="M288.777 93.565c-15.313-23.641-36.837-42.476-62.243-54.472-1.616-.763-3.109-1.134-4.564-1.134-1.969 0-8.392.833-8.392 11.541v17.75c0 8.998 5.479 13.113 7.159 14.16 32.613 20.33 52.083 55.317 52.083 93.59 0 60.772-49.442 110.214-110.214 110.214S52.393 235.772 52.393 175c0-38.872 19.942-74.144 53.346-94.353 4.475-2.707 6.839-7.426 6.839-13.647V49c0-7.959-5.077-10.783-9.424-10.783-1.714 0-3.542.422-5.144 1.188-25.229 12.066-46.59 30.9-61.773 54.467C20.638 118.084 12.393 146.137 12.393 175c0 82.828 67.386 150.214 150.214 150.214S312.821 257.828 312.821 175c0-28.992-8.314-57.152-24.044-81.435z" />
							<path d="M152.579 117h21c5.514 0 10-4.486 10-10V10c0-5.514-4.486-10-10-10h-21c-5.514 0-10 4.486-10 10v97c0 5.514 4.485 10 10 10z" />
						</svg>
					</button>
				</div>
			</div>
		</Transition>
	);
};

export default StartMenu;
