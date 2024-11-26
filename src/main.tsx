import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "@/assets/styles/main.scss";

createRoot(document.getElementById("root")!).render(<App />);

// (function (global) {
// 	if (typeof global === "undefined") {
// 		throw new Error("window is undefined");
// 	}

// 	const _hash = "!";
// 	const noBackPlease = function () {
// 		global.location.href += "#";

// 		// Making sure we have the fruit available for juice (^__^)
// 		global.setTimeout(function () {
// 			global.location.href += "!";
// 		}, 50);
// 	};

// 	global.onhashchange = function () {
// 		if (global.location.hash !== _hash) {
// 			global.location.hash = _hash;
// 		}
// 	};

// 	global.onload = function () {
// 		noBackPlease();

// 		// Disables backspace on page except on input fields and textarea..
// 		document.body.onkeydown = function (e) {
// 			const elm = (e.target as HTMLElement).nodeName.toLowerCase();
// 			if (e.which === 8 && elm !== "input" && elm !== "textarea") {
// 				e.preventDefault();
// 			}
// 			// Stopping the event bubbling up the DOM tree...
// 			e.stopPropagation();
// 		};
// 	};
// })(window);
