import { beacon } from "@/helpers/beacon";

interface ButtonWebsiteProps {
	website: Website;
}

const openWebsite = () => {
	console.log("openWebsite");
	beacon("openWebsite", {
		website: "salut",
		url: "",
	});
};

const ButtonWebsite = ({ website }: ButtonWebsiteProps) => {
	return (
		<li className="relative space-y-2 group">
			<figure className="[&_svg]:w-8 [&_svg]:h-8 flex items-center justify-center bg-white bg-opacity-25 rounded-xl w-14 h-14 mx-auto transition group-hover:bg-opacity-40">
				{website.favicon}
			</figure>
			<span className="text-[12px] text-center text-white block font-medium max-w-full truncate">
				{website.title}
			</span>
			<button
				className="absolute inset-0 !mt-0"
				onClick={() => openWebsite()}
			>
				<span className="sr-only">Consulter {website.title}</span>
			</button>
		</li>
	);
};

export default ButtonWebsite;
