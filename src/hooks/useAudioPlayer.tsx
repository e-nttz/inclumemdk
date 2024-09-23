import { useState, useEffect } from "react";

const useAudioPlayer = (src: string, loop: boolean = false) => {
	const [audio] = useState(new Audio(src));
	const [playing, setPlaying] = useState(false);

	const toggle = () => setPlaying(!playing);

	const play = () => {
		audio.play();
		setPlaying(true);
	};

	const pause = () => {
		audio.pause();
		setPlaying(false);
	};

	const revoke = () => {
		audio.pause();
		audio.currentTime = 0;

		URL.revokeObjectURL(audio.src);

		setPlaying(false);
	};

	useEffect(() => {
		audio.addEventListener("ended", () => setPlaying(false));
		return () => {
			audio.removeEventListener("ended", () => setPlaying(false));
		};
	}, [audio]);

	useEffect(() => {
		audio.loop = loop;
	}, [loop]);

	return { play, pause, toggle, playing, revoke };
};

export default useAudioPlayer;
