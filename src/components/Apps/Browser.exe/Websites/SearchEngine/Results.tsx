import { beacon } from "@/helpers/beacon";
import { useState } from "react";
import SearchEngine from ".";
import SearchIcon from "@/assets/icons/search.svg"
import CHOQ from "@/assets/icons/choq.png"

import ActivitesNamur from "../ActivitesNamur";
import AntivirusAdvisor from "../AntivirusAdvisor";
import AntivirusDeals from "../AntivirusDeals";
import AntivirusExpress from "../AntivirusExpress";
import AntivirusFacile from "../AntivirusFacile";
import Belparking from "../BelParking";
import CuevaDeGabi from "../CuevaDeGabi";
import CyberSafeAcademy from "../CyberSafeAcademy";
import DipLTraduction from "../DipLTraduction";
import ExploreOstende from "../ExploreOstende";
import FamilierestaurantOostende from "../FamilierestaurantOostende";
import GoulougoulouTranslate from "../GoulougoulouTranslate";
import Inverso from "../Inverso";
import LaSiestaHotel from "../LaSiestaHotel";
import MacrosoftTranslator from "../MacrosoftTranslator";
import MuseeArtsAnciens from "../MuseeArtsAnciens";
import MuseeFelicienRops from "../MuseeFelicienRops";
import NamurPage from "../NamurPage";
import OstendeInsider from "../OstendeInsider";
import OuikiHow from "../OuikiHow";
import ParcoursStreetArt from "../ParcoursStreetArt";
import ParkEasy from "../ParkEasy";
import ParkingChurchill from "../ParkingChurchill";
import ParkingMariaHendrikapark from "../ParkingMariaHendrikapark";
import ParkingsOostende from "../ParkingOostende";
import ParkingP3Oosteroever from "../ParkingP3Oosteroever";
import RestaurantDeLaMer from "../RestaurantDeLaMer";
import RestaurantLaSiesta from "../RestaurantLaSiesta";
import RestaurantLaSiestaCubanFood from "../RestaurantLaSiestaCubanFood";
import RestaurantLaSiestaOostende from "../RestaurantLaSiestaOostende";
import RestaurantVueSurMer from "../RestaurantVueSurMer";
import SecureInstall from "../SecureInstall";
import SecureTech from "../SecureTech";
import SkyParkingOostende from "../SkyParkingOostende";
import SocialScape from "../SocialScape";
import TeenTrends from "../TeenTrends";
import TelepheriqueNamur from "../TelepheriqueNamur";
import TukTukNamur from "../TukTukNamur";
import VenteCanapesLaSiesta from "../VenteCanapesLaSiesta";
import VideoVerse from "../VideoVerse";
import VilleDeNamur from "../VilleDeNamur";
import VirusGuardian from "../VirusGuardian";
import VisitOstende from "../VisitOstende";
import WereldsmakenOostende from "../WereldsmakenOostende";

const sites = [
	RestaurantVueSurMer,
	AntivirusAdvisor,
	AntivirusDeals,
	AntivirusExpress,
	CyberSafeAcademy,
	VirusGuardian,
	SecureTech,
	VideoVerse,
	OuikiHow,
	SecureInstall,
	AntivirusFacile,
	ParkEasy,
	Belparking,
	OstendeInsider,
	ParkingP3Oosteroever,
	VisitOstende,
	ExploreOstende,
	ParkingMariaHendrikapark,
	ParkingChurchill,
	SkyParkingOostende,
	MacrosoftTranslator,
	DipLTraduction,
	ParkingsOostende,
	NamurPage,
	GoulougoulouTranslate,
	Inverso,
	TeenTrends,
	SocialScape,
	VilleDeNamur,
	TukTukNamur,
	TelepheriqueNamur,
	ActivitesNamur,
	ParcoursStreetArt,
	MuseeArtsAnciens,
	MuseeFelicienRops,
	VenteCanapesLaSiesta,
	LaSiestaHotel,
	FamilierestaurantOostende,
	WereldsmakenOostende,
	RestaurantDeLaMer,
	CuevaDeGabi,
	RestaurantLaSiesta,
	RestaurantLaSiestaCubanFood,
	RestaurantLaSiestaOostende
];
interface WebsiteProps extends React.FC {
	pages: {
	  title: string;
	  url: string;
	}[];
  }
  
  export interface ResultsProps {
	url: string;
  }
  
  const Results = ({ url }: ResultsProps) => {
	const [searchedValue, setSearchedValue] = useState(
	  decodeURI(url.split("?search=")[1])
	);
  
	const handleInputChange = (e) => {
	  setSearchedValue(e.target.value);
	};
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  if (!searchedValue) return;
  
	  let copiedSearchValue = searchedValue;
  
	  // Remplacer les espaces par des +
	  copiedSearchValue = encodeURI(copiedSearchValue);
  
	  beacon("openWebsite", {
		website: SearchEngine,
		url: `${SearchEngine.pages[0].url}/?search=${copiedSearchValue}`,
	  });
	};
  
	// Extraire les mots-clés de la recherche
	const searchKeywords = searchedValue.toLowerCase().split(/\s+/);
  
	// Filtrer et trier les sites par pertinence
	const filteredAndSortedSites = sites
		.map((site) => {
			// Vérifier que motsCles est un tableau
			if (!Array.isArray(site.motsCles)) {
			return { ...site, matchCount: 0 };
			}

			// Normaliser les mots-clés en minuscules
			const normalizedKeywords = site.motsCles.map((keyword) =>
			keyword.toLowerCase()
			);

			// Compter les correspondances
			const matchCount = normalizedKeywords.filter((keyword) =>
			searchKeywords.includes(keyword)
			).length;

			return { ...site, matchCount };
		})
		.filter((site) => site.matchCount > 0) // Garder uniquement les sites pertinents
		.sort((a, b) => b.matchCount - a.matchCount); // Trier par nombre de correspondances
  
	const handleResultClick = (siteUrl: string) => {
	  Object.keys(sites).map((key) => {
		const website = sites[key] as WebsiteProps;
		website.pages.map((page) => {
		  if (page.url === siteUrl) {
			beacon("openWebsite", {
			  website,
			  url: siteUrl,
			});
		  }
		});
	  });
	};
  
	return (
	  <div className="absolute inset-0 h-full px-8 py-8 overflow-y-auto bg-white flex">
		<div className="logo">
			<h1 className="mb-8 text-3xl text-[#5A9DFF] font-semibold">Gougoule</h1>
		</div>
		<div className="ml-8 w-5/12 max-w-7xl mr-8">
			<div className="relative flex items-center mb-4">
				<form onSubmit={handleSubmit} className="w-full">
					<input
					type="text"
					placeholder="Rechercher sur Goulougoulou"
					className="bg-[#f2f2f2] rounded-[85px] h-[40px] w-full px-2 py-2 transition border shadow-sm border-gray-50 focus-visible:outline-accent pr-[40px] pl-[10px]"
					defaultValue={searchedValue || ""}
					onChange={(e) => handleInputChange(e)}
					/>
				</form>
				<img src={SearchIcon} alt="Icône de recherche" className="search absolute w-[30px] right-[10px]"/>
			</div>
			<div className="filtres flex mb-4">
				<div className="filtre border rounded-[20px] cursor-pointer pl-3 pr-3 pt-2 pb-2 mr-2">
					<p>Tous</p>
				</div>
				<div className="filtre border rounded-[20px] cursor-pointer pl-3 pr-3 pt-2 pb-2 mr-2">
					<p>Images</p>
				</div>
				<div className="filtre text-gray-300 cursor-not-allowed border border-gray-300 rounded-[20px] pl-3 pr-3 pt-2 pb-2 mr-2">
					<p>Vidéos</p>
				</div>
				<div className="filtre text-gray-300 cursor-not-allowed border border-gray-300 rounded-[20px] pl-3 pr-3 pt-2 pb-2">
					<p>Actualités</p>
				</div>
			</div>
			<p className="text-gray-500">{`Résultats de recherches pour "${searchedValue}"`}</p>
		  {/* Affichage des résultats */}
		  {filteredAndSortedSites.length > 0 ? (
			filteredAndSortedSites.map((site, index) => (
			  <div
				key={index}
				className="mt-8 cursor-pointer"
				onClick={() => handleResultClick(site.pages[0].url)}
			  >
				<h2>{site.pages[0].title}</h2>
				<p className="text-sm">{site.pages[0].url}</p>
				<h3 className="text-xl font-medium text-[#1265AF]">{site.title}</h3>
				<p className="mt-2 text-gray-500">{site.excerpt}</p>
				<p className="mt-1 text-sm text-gray-400">{`Mots-clés correspondants : ${site.matchCount}`}</p>
			  </div>
			))
		  ) : (
			<p className="mt-8 text-gray-500">Aucun résultat trouvé pour "{searchedValue}"</p>
		  )}
		</div>
		<div className="choq relative w-3/12 mt-[]">
		  <p className="font-bold absolute bg-[white] left-[20px]">Annonce partenaire</p>
		  <div className="shadow-md p-5 rounded-[20px]">
			<img src={CHOQ} alt="Logo du CHOQ - Association en Wallonie picarde" className="mt-5 mb-5"/>
			<h3 className="text-xl font-medium text-[#1265AF]">CHOQ</h3>
			<p className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, libero iste? Reprehenderit sit corporis accusamus, labore harum, eos recusandae dicta tenetur quibusdam omnis unde laborum asperiores sapiente libero laboriosam ab?</p>
		  </div>
		</div>
	  </div>
	);
  };
  
  export default Results;