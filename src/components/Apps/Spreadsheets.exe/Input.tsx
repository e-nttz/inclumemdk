import { memo, useEffect, useRef, useState } from "react";
import { CellProps } from ".";
import { classNames } from "@/helpers/sanitize";

const Input = memo(
	({
		indexRow,
		indexCol,
		currentCell,
		setCurrentCell,
		cells,
		setCells,
		...props
	}: {
		indexRow: number;
		indexCol: number;
		currentCell: string;
		setCurrentCell: (value: string) => void;
		cells?: CellProps[];
		setCells?: (value: CellProps[]) => void;
		onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
		onDoubleClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
	}) => {
		const [editionMode, setEditionMode] = useState<boolean>(false);
		const inputRef = useRef<HTMLInputElement>(null);

		// Focus automatique quand on passe en édition
		useEffect(() => {
			if (editionMode && inputRef.current) {
				inputRef.current.focus();
				inputRef.current.select();
			}
		}, [editionMode]);

		// Rendu d'image si la valeur contient "imagekit"
		const buttonValueWithImage = (value: string) => {
			return value && value.includes("imagekit") ? (
				<img src={value} alt="" className="w-full h-full" />
			) : (
				value
			);
		};

		const cellPosition = `${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`;
		const currentCellValue =
			cells?.find((cell) => cell.position === cellPosition)?.data.value || "";

		const updateCellValue = (value: string) => {
			const newCells = [...(cells || [])];
			let currCell = newCells.find((cell) => cell.position === cellPosition);
			if (!currCell) {
				currCell = {
					position: cellPosition,
					data: { value: "", bold: false, italic: false, underline: false },
				};
				newCells.push(currCell);
			}
			currCell.data.value = value;
			setCells?.(newCells);
		};

		return editionMode ? (
			<input
				autoComplete="off"
				type="text"
				className={classNames(
					`cellule_spreadsheets relative w-full min-h-8 text-sm cursor-pointer text-left border border-r-transparent border-t-transparent border-b border-l bg-white dark:bg-gray-800 border-gray-50 last:border-b-0 px-1 outline-none focus-visible:border-green-600`,
					currentCell === cellPosition ? "!border-2 border-green-600 z-50" : "z-0",
					cells?.find((cell) => cell.position === cellPosition)?.data.bold
						? "font-bold"
						: "",
					cells?.find((cell) => cell.position === cellPosition)?.data.italic
						? "italic"
						: "",
					cells?.find((cell) => cell.position === cellPosition)?.data.underline
						? "underline"
						: ""
				)}
				style={{
					gridColumn: `${indexRow + 2} / ${indexRow + 3}`,
					gridRow: `${indexCol + 2} / ${indexCol + 3}`,
				}}
				ref={inputRef}
				value={currentCellValue}
				onChange={(e) => updateCellValue(e.target.value)}
				onKeyUp={(e) => {
					if (e.key === "Enter") {
						setEditionMode(false);
						setCurrentCell(
							`${String.fromCharCode(65 + indexRow)}:${indexCol + 2}`
						);
					}
				}}
				onBlur={() => setEditionMode(false)}
				{...props}
			/>
		) : (
			<button
				tabIndex={0}
				className={classNames(
					`cellule_spreadsheets relative w-full min-h-8 text-sm cursor-pointer text-left border border-b border-l bg-white dark:bg-gray-800 border-gray-50 last:border-b-0 outline-none`,
					currentCell === cellPosition
						? "!border-2 border-t-green-600 border-r-green-600 border-green-600 z-50"
						: "z-0 border-t-transparent border-r-transparent",
					(indexCol + 2).toString() === currentCell.split(":")[1] &&
						indexRow === currentCell.split(":")[0].charCodeAt(0) - 65
						? "border-b-transparent"
						: ""
				)}
				style={{
					gridColumn: `${indexRow + 2} / ${indexRow + 3}`,
					gridRow: `${indexCol + 2} / ${indexCol + 3}`,
				}}
				onContextMenu={() => setCurrentCell(cellPosition)}

				// clic → sélection + édition
				onClick={() => {
					setCurrentCell(cellPosition);
					setEditionMode(true);
				}}

				// focus (TAB) → sélection + édition
				onFocus={() => {
					setCurrentCell(cellPosition);
					setEditionMode(true);
				}}

				// frappe clavier → édition
				onKeyDown={(e) => {
					if (e.key.length === 1 || e.key === "Backspace") {
						setEditionMode(true);
					}
				}}
			>
				<span
					className={classNames(
						cells?.find((cell) => cell.position === cellPosition)?.data.bold
							? "font-bold"
							: "",
						cells?.find((cell) => cell.position === cellPosition)?.data.italic
							? "italic"
							: "",
						cells?.find((cell) => cell.position === cellPosition)?.data.underline
							? "underline"
							: "",
						"whitespace-break-spaces"
					)}
				>
					{buttonValueWithImage(currentCellValue)}
				</span>
			</button>
		);
	}
);

export default Input;
