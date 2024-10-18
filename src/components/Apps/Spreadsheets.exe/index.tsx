import IconStylesheets from "@/assets/icons/app-spreadsheets.svg?react";
import Window from "@/components/Os/Window";
import ContextualBar from "@/components/Os/Window/ContextualBar";
import { classNames } from "@/helpers/sanitize";
import { t } from "i18next";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export interface CellProps {
	position: string;
	data: {
		value: string;
		formula?: string;
		bold: boolean;
		italic: boolean;
		underline: boolean;
	};
}

const Spreadsheets = () => {
	const [currentCell, setCurrentCell] = useState<string>("");
	const [cells, setCells] = useState<CellProps[]>([]);

	const handleToolButtonClick = (tool: string) => {
		let newCells = [...cells];
		const cell = cells.find((cell) => cell.position === currentCell);
		if (!currentCell || currentCell === "" || !cell) {
			return;
		}
		// find currentCell in cells
		switch (tool) {
			case "bold":
				cell.data.bold = !cell.data.bold;
				break;
			case "italic":
				cell.data.italic = !cell.data.italic;
				break;
			case "underline":
				cell.data.underline = !cell.data.underline;
				break;
			default:
				break;
		}
		newCells = newCells.map((c) => (c.position === cell.position ? cell : c));
		setCells(newCells);
	};

	return (
		<Window
			appName={Spreadsheets.title}
			contextMenus={
				<>
					<ContextualBar.Menu name="Fichier">
						<ContextualBar.Item onClick={() => console.log("clicked !")}>
							{t("Joindre un fichier")}
						</ContextualBar.Item>
					</ContextualBar.Menu>
				</>
			}
		>
			<section className="flex flex-col flex-1 w-full overflow-auto text-black bg-white backdrop-blur dark:bg-black/70">
				<div className="flex items-center gap-2 px-4 py-2 bg-slate-100">
					<button
						className={classNames(
							"flex items-center justify-center p-1 transition rounded-sm hover:bg-gray-50 hover:bg-opacity-40",
							cells?.find((cell) => cell.position === currentCell)?.data
								.bold
								? "bg-gray-50 bg-opacity-40"
								: ""
						)}
						onClick={() => handleToolButtonClick("bold")}
					>
						<span
							aria-hidden="true"
							className="block w-4 text-sm font-bold aspect-square"
						>
							B
						</span>
						<span className="sr-only">Gras</span>
					</button>
					<button
						className={classNames(
							"flex items-center justify-center p-1 transition rounded-sm hover:bg-gray-50 hover:bg-opacity-20",
							cells?.find((cell) => cell.position === currentCell)?.data
								.italic
								? "bg-gray-50 bg-opacity-40"
								: ""
						)}
						onClick={() => handleToolButtonClick("italic")}
					>
						<span
							aria-hidden="true"
							className="block w-4 text-sm italic aspect-square"
						>
							I
						</span>
						<span className="sr-only">Italic</span>
					</button>
					<button
						className={classNames(
							"flex items-center justify-center p-1 transition rounded-sm hover:bg-gray-50 hover:bg-opacity-20",
							cells?.find((cell) => cell.position === currentCell)?.data
								.underline
								? "bg-gray-50 bg-opacity-40"
								: ""
						)}
						onClick={() => handleToolButtonClick("underline")}
					>
						<span
							aria-hidden="true"
							className="block w-4 text-sm underline aspect-square"
						>
							U
						</span>
						<span className="sr-only">Underline</span>
					</button>
				</div>
				<div className="grid grid-cols-[50px_repeat(26,minmax(96px,_200px))]">
					<div className="w-full text-sm text-center border-b min-h-8 bg-gray-50 bg-opacity-30 dark:bg-gray-800 border-gray-50" />
					{
						// first row buttons
						Array.from({ length: 26 }).map((_, index) => (
							<Button
								key={`buttons-row-${index}`}
								className={classNames(
									"w-full h-8 text-sm text-center border-b border-l bg-gray-50 bg-opacity-30 dark:bg-gray-800 border-gray-50"
								)}
							>
								{String.fromCharCode(65 + index)}
							</Button>
						))
					}

					{
						// first column buttons
						Array.from({ length: 99 }).map((_, index) => (
							<Button
								className="w-full col-start-1 text-sm text-center border-b border-l min-h-8 bg-gray-50 bg-opacity-30 dark:bg-gray-800 border-gray-50 last:border-b-0"
								key={`buttons-col-${index}`}
							>
								{index + 1}
							</Button>
						))
					}

					{
						// core inputs of the sheet
						Array.from({ length: 26 }).map((_, indexRow) =>
							Array.from({ length: 99 }).map((_, indexCol) => (
								<Input
									key={`inputs-spreadsheets-${indexRow}-${indexCol}`}
									indexRow={indexRow}
									indexCol={indexCol}
									currentCell={currentCell}
									setCurrentCell={setCurrentCell}
									cells={cells}
									setCells={setCells}
								/>
							))
						)
					}
				</div>
			</section>
		</Window>
	);
};

export default Spreadsheets;

Spreadsheets.title = "Tableur";
Spreadsheets.icon = <IconStylesheets />;
