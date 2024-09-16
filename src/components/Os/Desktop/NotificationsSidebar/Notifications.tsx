const Notifications = () => {
	return (
		<div className="p-4 space-y-4 grow">
			<div className="text-right">
				<a
					className="text-sm font-medium text-blue-900 hover:text-blue-600 active:text-blue-900 dark:text-blue-400 dark:hover:text-blue-500 dark:active:text-blue-400"
					href="javascript:void(0)"
				>
					Manage notifications
				</a>
			</div>
			<div className="space-y-2">
				<div className="text-center">
					<h2 className="flex items-center justify-center gap-1 text-sm font-medium">
						<svg
							className="inline-block w-5 h-5 opacity-50"
							fill="none"
							viewBox="0 0 24 24"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
							></path>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M5.5 6.5L12 12.25L18.5 6.5"
							></path>
						</svg>
						<span>Email</span>
					</h2>
				</div>
				<a
					className="block p-3 space-y-1 text-sm rounded bg-white/50 hover:bg-white/25 active:bg-white/50 dark:bg-black/30 dark:hover:bg-black/50 dark:active:bg-black/30"
					href="javascript:void(0)"
				>
					<h3 className="font-medium">Welcome to Windows 11!</h3>
					<p className="leading-5 text-gray-700 dark:text-gray-400">
						Well, not exactly but it was a fun mini side project. Waiting
						for the next version of Windows and excited for the upcoming
						UI redesign.
					</p>
					<p className="text-gray-600 dark:text-gray-500">June 17, 2024</p>
				</a>
				<a
					className="block p-3 space-y-1 text-sm rounded bg-white/50 hover:bg-white/25 active:bg-white/50 dark:bg-black/30 dark:hover:bg-black/50 dark:active:bg-black/30"
					href="https://tailkit.com"
				>
					<h3 className="mb-1 font-medium">
						Are you using Tailwind CSS in your next project?
					</h3>
					<p className="leading-5 text-gray-700 dark:text-gray-400">
						I have been working on Tailkit for almost 4 years now, a
						library of premium UI components and templates which can help
						you design modern web apps and websites. Be sure to check it
						out!
					</p>
					<p className="text-gray-600 dark:text-gray-500">June 17, 2024</p>
				</a>
			</div>
		</div>
	);
};

export default Notifications;
