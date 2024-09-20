import Message from "@/components/Apps/Message.exe";
import { useOS } from "@/providers/InclumeOS";

const GridIcons = () => {
	const { launchApp } = useOS();

	return (
		<ul className="absolute top-0 left-0 flex flex-col flex-wrap items-start justify-start max-h-full gap-4 p-4 pb-0">
			<li>
				<button
					className="w-[100px] h-[100px] flex flex-col items-center justify-center p-4 transition duration-150 rounded group hover:bg-white/30 focus:bg-white/30 active:bg-white/75 dark:hover:bg-white/25 dark:active:bg-white/50 cursor-default"
					onDoubleClick={() =>
						launchApp({
							title: "Message",
							icon: Message.icon,
						})
					}
				>
					<figure className="w-16 h-16 p-1 mb-2">{Message.icon}</figure>
					<span className="text-[12px] text-white">{Message.title}</span>
				</button>
			</li>
		</ul>
	);
};

export default GridIcons;
