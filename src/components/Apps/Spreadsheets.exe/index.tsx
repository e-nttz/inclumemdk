import IconStylesheets from "@/assets/icons/app-spreadsheets.svg?react";
import Window from "@/components/Os/Window";
import ContextualBar from "@/components/Os/Window/ContextualBar";
import { classNames } from "@/helpers/sanitize";
import { t } from "i18next";
import { memo } from "react";

const Spreadsheets = () => {
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
				<div className="grid grid-cols-[50px_repeat(26,96px)]">
					<div className="w-full h-8 text-sm text-center border-b border-r bg-gray-50 bg-opacity-30 dark:bg-gray-800 border-gray-50" />
					{
						// first row buttons
						Array.from({ length: 26 }).map((_, index) => (
							<Button
								key={`buttons-row-${index}`}
								className={classNames(
									"w-full h-8 text-sm text-center border-b border-r bg-gray-50 bg-opacity-30 dark:bg-gray-800 border-gray-50",
									index === 25 && "border-r-0"
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
								className="w-full h-8 col-start-1 text-sm text-center border-b border-r bg-gray-50 bg-opacity-30 dark:bg-gray-800 border-gray-50 last:border-b-0"
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

// Composant Button mémorisé
const Button = memo(
	({
		children,
		className,
	}: {
		children: React.ReactNode;
		className: string;
	}) => {
		return <button className={className}>{children}</button>;
	}
);

// Composant Input mémorisé
const Input = memo(
	({ indexRow, indexCol }: { indexRow: number; indexCol: number }) => {
		return (
			<input
				type="text"
				className={classNames(
					`w-full h-8 text-sm text-left border-b border-r bg-white dark:bg-gray-800 border-gray-50 last:border-b-0 px-1 outline-none`
				)}
				style={{
					gridColumn: `${indexRow + 2} / ${indexRow + 3}`,
					gridRow: `${indexCol + 2} / ${indexCol + 3}`,
				}}
			/>
		);
	}
);
