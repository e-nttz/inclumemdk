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

		useEffect(() => {
			if (editionMode && inputRef.current) {
				inputRef.current.focus();
			}
		}, [editionMode]);
		
		useEffect(() => {
			setEditionMode(false);
		}, [currentCell]);
		
		const buttonValueWithImage = (value: string) => {
			return value && value.includes("imagekit") ? (
				<img src={value} alt="" className="w-full h-full" />
			) : (
				value
			);
		};

		return editionMode ? (
			<input
			autoComplete="off"
				type="text"
				className={classNames(
					`relative w-full min-h-8 text-sm cursor-pointer text-left border border-r-transparent border-t-transparent border-b border-l bg-white dark:bg-gray-800 border-gray-50 last:border-b-0 px-1 outline-none focus-visible:border-green-600`,
					currentCell ===
						`${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`
						? "!border-2 border-green-600 z-50"
						: "z-0",
					cells?.find(
						(cell) =>
							cell.position ===
							`${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`
					)?.data.bold
						? "font-bold"
						: "",
					cells?.find(
						(cell) =>
							cell.position ===
							`${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`
					)?.data.italic
						? "italic"
						: "",
					cells?.find(
						(cell) =>
							cell.position ===
							`${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`
					)?.data.underline
						? "underline"
						: ""
				)}
				style={{
					gridColumn: `${indexRow + 2} / ${indexRow + 3}`,
					gridRow: `${indexCol + 2} / ${indexCol + 3}`,
				}}
				onKeyUp={(e) => {
					if (e.key === "Enter") {
						setEditionMode(false);
						setCurrentCell(
							`${String.fromCharCode(65 + indexRow)}:${indexCol + 2}`
						);
					}
				}}
				onBlur={() => setEditionMode(false)}
				value={
					cells?.find(
						(cell) =>
							cell.position ===
							`${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`
					)?.data.value || ""
				}
				ref={inputRef}
				onChange={(e) => {
					const newCells = [...cells];
					let currCell = newCells.find(
						(cell) => cell.position === currentCell
					);
					if (!currCell) {
						currCell = {
							position: currentCell,
							data: {
								value: "",
								bold: false,
								italic: false,
								underline: false,
							},
						};
						newCells.push(currCell);
					}
					currCell.data.value = e.target.value;
					setCells(newCells);
				}}
				{...props}
			/>
		) : (
			<button
				className={classNames(
					`relative w-full min-h-8 text-sm cursor-pointer text-left border border-b border-l bg-white dark:bg-gray-800 border-gray-50 last:border-b-0 outline-none`,
					currentCell ===
						`${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`
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
				onContextMenu={() =>
					setCurrentCell(
						`${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`
					)
				}
				onClick={() => {
					setCurrentCell(`${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`);
					setEditionMode(true);
				}}				
				onKeyDown={(e) => {
					if (e.key.length === 1 || e.key === "Backspace") {
						setEditionMode(true);
					}
					if (e.key === "Backspace") {
						const newCells = [...cells];
						const currCell = newCells.find(
							(cell) => cell.position === currentCell
						);
						if (currCell && currCell.data.value.includes("/images/")) {
							// remove currCell from newCells
							const index = newCells.indexOf(currCell);
							if (index > -1) {
								newCells.splice(index, 1);
								setCells(newCells);
							}
						}
					}
				}}
			>
				<span
					className={classNames(
						cells?.find(
							(cell) =>
								cell.position ===
								`${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`
						)?.data.bold
							? "font-bold"
							: "",
						cells?.find(
							(cell) =>
								cell.position ===
								`${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`
						)?.data.italic
							? "italic"
							: "",
						cells?.find(
							(cell) =>
								cell.position ===
								`${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`
						)?.data.underline
							? "underline"
							: "",
						"whitespace-break-spaces"
					)}
				>
					{buttonValueWithImage(
						cells?.find(
							(cell) =>
								cell.position ===
								`${String.fromCharCode(65 + indexRow)}:${indexCol + 1}`
						)?.data.value
					)}
				</span>
			</button>
		);
	}
);

export default Input;
