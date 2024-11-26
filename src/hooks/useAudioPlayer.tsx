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
	const [audio] = useState(() => new Audio(src));
	const [playing, setPlaying] = useState(false);

	/**
	 * Play the audio.
	 *
	 * @function play
	 */
	const play = () => {
		audio
			.play()
			.then(() => {
				setPlaying(true);
			})
			.catch((error) => {
				console.error("Error playing audio:", error);
			});
	};

	/**
	 * Pause the audio.
	 *
	 * @function pause
	 */
	const pause = () => {
		audio.pause();
		setPlaying(false);
	};

	/**
	 * Toggle between play and pause.
	 *
	 * @function toggle
	 */
	const toggle = () => {
		if (playing) {
			pause();
		} else {
			play();
		}
	};

	/**
	 * Stop the audio and reset it to the start, freeing up memory.
	 *
	 * @function stop
	 */
	const stop = () => {
		audio.pause();
		audio.currentTime = 0;
		setPlaying(false);
	};

	useEffect(() => {
		audio.loop = loop;

		const onEnded = () => setPlaying(false);
		const onError = (e) => console.error("Audio error:", e);
		const onCanPlayThrough = () => audio.addEventListener("ended", onEnded);
		audio.addEventListener("error", onError);
		audio.addEventListener("canplaythrough", onCanPlayThrough);

		return () => {
			audio.removeEventListener("ended", onEnded);
			audio.removeEventListener("error", onError);
			audio.removeEventListener("canplaythrough", onCanPlayThrough);
		};
	}, [audio, loop]);

	return { play, pause, stop, toggle, playing };
};

export default useAudioPlayer;
