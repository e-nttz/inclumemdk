import Button from "../Ui/Buttons/button";
import IconPlay from "@/assets/icons/play.svg?react";
import { useEffect, useState } from "react";
import { useStepsListener } from "@/providers/stepsListener";

const ScreenPaused = () => {
	const { setPauseMode } = useStepsListener();

	const [buttonClicked, setButtonClicked] = useState(false);
	const [countdownInterval, setCountdownInterval] = useState<number>(null);
	const [countdown, setCountdown] = useState(5);

	const handleClick = () => {
		setButtonClicked(true);
		setCountdownInterval(
			setInterval(() => {
				setCountdown((prev) => prev - 1);
			}, 1000)
		);
	};

	useEffect(() => {
		if (buttonClicked) {
			if (countdown === 0) {
				setPauseMode(false);
				clearInterval(countdownInterval);
			}
		}
	}, [countdown]);

	return (
		<div className="absolute inset-0 z-[9999] flex items-center justify-center before:absolute before:inset-0 before:bg-white dark:before:bg-black dark:before:bg-opacity-40 before:bg-opacity-80 before:backdrop-blur-lg">
			{buttonClicked ? (
				<div className="z-10 text-center max-w-7xl">
					<h1 className="mb-8 text-3xl font-bold">
						Le test est sur le point de reprendre...
					</h1>
					<p className="text-xl">
						Reprise dans ...
						<span className="block mt-8 font-bold text-7xl">
							{countdown}
						</span>
					</p>
				</div>
			) : (
				<div className="z-10 text-center max-w-7xl">
					<h1 className="mb-8 text-3xl font-bold">Le test est en pause</h1>
					<p className="text-xl">
						Le mode pause est actuellement activé. Lorsque vous
						souhaiterez le reprendre, cliquez sur le bouton ci-dessous.
					</p>
					<Button className="mx-auto mt-8" onClick={handleClick}>
						<IconPlay className="w-4 h-auto" />
						Relancer le test
					</Button>
				</div>
			)}
		</div>
	);
};

export default ScreenPaused;
