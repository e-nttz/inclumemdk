import { useOS } from "@/providers/InclumeOS";
import LoginScreen from "./Login";
import InclumeOs from "./Os";
import { useAuth } from "@/providers/auth";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import BootScreen from "./Boot";
import Questionnary from "./Questionnary";
import { ExplorerProvider } from "@/providers/explorer";

export const OS = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false);

	const { theme, appLoading } = useOS();
	const { session, testStatus } = useAuth();

	useEffect(() => {
		if (session) {
			setTimeout(() => {
				setIsAuth(true);
			}, 300);
		}
	}, [session]);

	if (appLoading) {
		return <BootScreen />;
	}

	return (
		<div
			data-theme={theme}
			className="relative min-h-screen bg-white bg-[url('/images/win11_wallpaper_light.jpg')] dark:bg-[url('/images/win11_wallpaper_dark.jpg')] bg-cover bg-center transition-all flex flex-col overflow-hidden text-gray dark:text-white dark:[color-scheme:dark]"
		>
			{!isAuth && (
				<Transition show={!session}>
					<div className="flex flex-col flex-1 data-[leave]:duration-300 data-[leave]:data-[closed]:opacity-0 ease-in-out">
						<LoginScreen />
					</div>
				</Transition>
			)}

			{isAuth && testStatus === "waiting" && (
				<Transition show={true} appear={true}>
					<div className="flex flex-col flex-1 data-[leave]:duration-300 data-[leave]:data-[closed]:opacity-0 transition ease-in-out data-[enter]:opacity-100 duration-300">
						<Questionnary />
					</div>
				</Transition>
			)}

			{isAuth && testStatus === "success" && (
				<Transition show={true} appear={true}>
					<div className="flex flex-col flex-1 data-[leave]:duration-300 data-[leave]:data-[closed]:opacity-0 transition ease-in-out data-[enter]:opacity-100 duration-300">
						<ExplorerProvider>
							<InclumeOs />
						</ExplorerProvider>
					</div>
				</Transition>
			)}
		</div>
	);
};

export default OS;
