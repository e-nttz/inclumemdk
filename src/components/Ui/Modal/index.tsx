import { cn } from "@/lib/utils";
import { useState, useCallback, ReactNode } from "react";
import { createPortal } from "react-dom";

type UseModalResult = {
	ModalWrapper: ({ children }: { children: ReactNode }) => JSX.Element;
	openModal: () => void;
	closeModal: () => void;
	isOpen: boolean;
};

export function useModal(): UseModalResult {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = useCallback(() => setIsOpen(true), []);
	const closeModal = useCallback(() => setIsOpen(false), []);

	const ModalWrapper = ({ children }) => {
		// Utilisation de createPortal pour afficher le contenu dans modalRoot
		return createPortal(
			<div
				className={cn(
					"fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur dark:bg-black/70 z-[999999999] p-8 transition-all duration-300 ease-in-out pointer-events-none",
					!isOpen ? "opacity-0" : "opacity-100"
				)}
			>
				<button
					className="absolute h-8 px-2 transition rounded-md pointer-events-auto top-4 right-4 hover:bg-black hover:bg-opacity-20 focus-visible:bg-black focus-visible:bg-opacity-20 focus-visible:outline-none dark:hover:bg-white dark:hover:bg-opacity-10"
					onClick={() => closeModal()}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5"
						fill="none"
						viewBox="0 0 14 14"
						aria-hidden="true"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M.528 1l6 6m6 6l-6-6m0 0l-6 6 12-12"
						></path>
					</svg>
					<span className="sr-only">Fermer l'application</span>
				</button>

				<div
					className={cn(
						"w-full max-w-[1000px] max-h-[90vh] overflow-auto bg-white rounded-lg transition",
						!isOpen ? "translate-x-32" : "pointer-events-auto"
					)}
				>
					{children}
				</div>
			</div>,
			document.querySelector("#inclume-os")
		);
	};

	return { ModalWrapper, openModal, closeModal, isOpen };
}
