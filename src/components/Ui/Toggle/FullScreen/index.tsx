declare global {
	interface Document {
		mozCancelFullScreen: () => void;
		msExitFullscreen: () => void;
		webkitExitFullscreen: () => void;
		mozFullScreenElement: () => void;
		msFullscreenElement: () => void;
		webkitFullscreenElement: () => void;
	}
}

import Maximize from "@/assets/icons/maximize.svg?react";

export const toggleFullscreen = () => {
	const elem = document.documentElement as HTMLElement & {
		requestFullscreen: () => void;
		msRequestFullscreen: () => void;
		mozRequestFullScreen: () => void;
		webkitRequestFullscreen: (options?: FullscreenOptions) => void;
	};

	if (
		!document.fullscreenElement &&
		!document.mozFullScreenElement &&
		!document.webkitFullscreenElement &&
		!document.msFullscreenElement
	) {
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
			elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen((Element as any).ALLOW_KEYBOARD_INPUT);
		}

		document.body.classList.remove("fullscreen-exited");
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
};

const FullScreenToggler = () => {
	return (
		<button
			onClick={() => {
				toggleFullscreen();
			}}
		>
			<span className="sr-only">Afficher en pleine écran</span>
			<Maximize className="w-5 h-auto text-white mix-blend-difference" />
		</button>
	);
};

export default FullScreenToggler;
