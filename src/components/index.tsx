import { useOS } from "@/providers/InclumeOS";
import LoginScreen from "./Login";

export const OS = () => {
	return (
		<div
			data-theme={useOS().theme}
			className="relative min-h-screen bg-white bg-[url('/images/win11_wallpaper_light.jpg')] dark:bg-[url('/images/win11_wallpaper_dark.jpg')] p-6 bg-cover bg-center transition-all flex flex-col"
		>
			<LoginScreen />
		</div>
	);
};

export default OS;
