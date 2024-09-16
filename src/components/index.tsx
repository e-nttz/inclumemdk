import { useOS } from "@/providers/InclumeOS";
import LoginScreen from "./Login";
import InclumeOs from "./Os";
import { useAuth } from "@/providers/auth";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

export const OS = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false);

	const { theme } = useOS();
	const { session } = useAuth();

	useEffect(() => {
		if (session) {
			setTimeout(() => {
				setIsAuth(true);
			}, 300);
		}
	}, [session]);

	return (
		<div
			data-theme={theme}
			className="relative min-h-screen bg-white bg-[url('/images/win11_wallpaper_light.jpg')] dark:bg-[url('/images/win11_wallpaper_dark.jpg')] bg-cover bg-center transition-all flex flex-col overflow-hidden text-gray dark:text-white"
		>
			{isAuth ? (
				<Transition show={true} appear={true}>
					<div className="flex flex-col flex-1 data-[leave]:duration-300 data-[leave]:data-[closed]:opacity-0 transition ease-in-out data-[enter]:opacity-100 duration-300">
						<InclumeOs />
					</div>
				</Transition>
			) : (
				<Transition show={!session}>
					<div className="flex flex-col flex-1 data-[leave]:duration-300 data-[leave]:data-[closed]:opacity-0 ease-in-out">
						<LoginScreen />
					</div>
				</Transition>
			)}
		</div>
	);
};

export default OS;
