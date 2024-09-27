import { useState, useEffect } from "react";

/**
 * A custom hook to handle audio playback.
 *
 * @interface useAudioPlayer
 *
 * @param {string} src - The source of the audio file
 * @param {boolean} loop - Whether to loop the audio
 *
 * @returns {object} - The audio player object
 */
const useAudioPlayer = (src: string, loop: boolean = false) => {
	const [audio] = useState(new Audio(src));
	const [playing, setPlaying] = useState(false);

	/**
	 * Toggle the audio playback
	 *
	 * @method
	 * @memberof useAudioPlayer
	 *
	 */
	const toggle = () => setPlaying(!playing);

	/**
	 * Play the audio
	 *
	 * @method
	 * @memberof useAudioPlayer
	 *
	 */
	const play = () => {
		audio.play();
		setPlaying(true);
	};

	/**
	 * Pause the audio
	 *
	 * @method
	 * @memberof useAudioPlayer
	 *
	 */
	const pause = () => {
		audio.pause();
		setPlaying(false);
	};

	/**
	 * Revoke the audio
	 *
	 * This method is used to revoke the audio, it stop and dequene the audio to
	 * avoid memory leaks.
	 *
	 * @method
	 * @memberof useAudioPlayer
	 *
	 */
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
