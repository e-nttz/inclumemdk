import { useState, useEffect } from "react";

/**
 * A custom React hook to handle audio playback.
 * Provides controls to play, pause, toggle, and revoke audio files, with the option to loop the playback.
 *
 * @function useAudioPlayer
 * @memberof Hooks
 *
 * @param {string} src - The source URL of the audio file.
 * @param {boolean} [loop=false] - Whether to loop the audio automatically upon finishing.
 *
 * @returns {object} An object containing methods to control the audio playback and its state.
 * @returns {Function} play - Plays the audio.
 * @returns {Function} pause - Pauses the audio.
 * @returns {Function} toggle - Toggles between play and pause.
 * @returns {boolean} playing - The current playing state of the audio.
 * @returns {Function} revoke - Stops the audio and resets it to the start, freeing up memory.
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
		console.log("Playing audio");
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
