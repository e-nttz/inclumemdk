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
		<li className="relative space-y-2 bg-white bg-opacity-60 backdrop-blur-[70] rounded-[20px] transition hover:-translate-y-4 duration-500 group">
			<figure className="[&_svg]:w-[62px] [&_svg]:h-[62px] flex items-center justify-start rounded-xl transition translate-x-[30px] -translate-y-[22px]">
				{website.favicon}
			</figure>
			<span className="flex items-center justify-between max-w-full font-semibold px-[30px] pb-[30px] text-black group-hover:text-accent">
				{website.title}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="15"
					fill="none"
					viewBox="0 0 16 15"
				>
					<path
						fill="currentColor"
						d="M8.797 14.398a.8.8 0 0 1-.57-.234.9.9 0 0 1-.165-.258.8.8 0 0 1-.062-.312q0-.328.234-.563L13.274 8H.796a.8.8 0 0 1-.313-.062.82.82 0 0 1-.421-.422.8.8 0 0 1 .171-.875.8.8 0 0 1 .25-.18.8.8 0 0 1 .313-.063h12.469l-5.032-5.03A.78.78 0 0 1 8 .796q0-.165.063-.313a.7.7 0 0 1 .171-.25.8.8 0 0 1 .57-.234q.33 0 .563.234l6.399 6.399a.78.78 0 0 1 .234.57.72.72 0 0 1-.21.531v.008l-.024.024-6.399 6.398a.78.78 0 0 1-.57.234"
					></path>
				</svg>
			</span>
			<span className="text-[10px] font-semibold uppercase absolute top-[30px] right-[30px] text-black text-opacity-60">
				{website.pages[0].url.replace("https://", "")}
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
