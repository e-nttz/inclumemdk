import { beacon } from "@/helpers/beacon";

interface ButtonWebsiteProps {
	website: Website;
}

const ButtonWebsite = ({ website }: ButtonWebsiteProps) => {
	const openWebsite = () => {
		beacon("openWebsite", {
			website,
			url: website.pages[0].url,
		});
	};

	return (
		<li className="relative space-y-2 group bg-white bg-opacity-60 backdrop-blur-[70] rounded-[20px] p-[30px]">
			<figure className="[&_svg]:w-8 [&_svg]:h-8 flex items-center justify-center bg-white bg-opacity-25 rounded-xl w-14 h-14 mx-auto transition group-hover:bg-opacity-40">
				{website.favicon}
			</figure>
			<span className="block max-w-full font-medium truncate">
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
