import ActivitesNamur from "./ActivitesNamur";
import AntivirusAdvisor from "./AntivirusAdvisor";
import AntivirusDeals from "./AntivirusDeals";
import AntivirusExpress from "./AntivirusExpress";
import AntivirusFacile from "./AntivirusFacile";
import Belparking from "./BelParking";
import CuevaDeGabi from "./CuevaDeGabi";
import CyberSafeAcademy from "./CyberSafeAcademy";
import DipLTraduction from "./DipLTraduction";
import ExploreOstende from "./ExploreOstende";
import FamilierestaurantOostende from "./FamilierestaurantOostende";
import GoulougoulouTranslate from "./GoulougoulouTranslate";
import Inverso from "./Inverso";
import LaSiestaHotel from "./LaSiestaHotel";
import MacrosoftTranslator from "./MacrosoftTranslator";
import MuseeArtsAnciens from "./MuseeArtsAnciens";
import MuseeFelicienRops from "./MuseeFelicienRops";
import NamurPage from "./NamurPage";
import OstendeInsider from "./OstendeInsider";
import OuikiHow from "./OuikiHow";
import ParcoursStreetArt from "./ParcoursStreetArt";
import ParkEasy from "./ParkEasy";
import ParkingChurchill from "./ParkingChurchill";
import ParkingMariaHendrikapark from "./ParkingMariaHendrikapark";
import ParkingsOostende from "./ParkingOostende";
import ParkingP3Oosteroever from "./ParkingP3Oosteroever";
import RestaurantDeLaMer from "./RestaurantDeLaMer";
import RestaurantLaSiesta from "./RestaurantLaSiesta";
import RestaurantLaSiestaCubanFood from "./RestaurantLaSiestaCubanFood";
import RestaurantLaSiestaOostende from "./RestaurantLaSiestaOostende";
import RestaurantVueSurMer from "./RestaurantVueSurMer";
import SearchEngine from "./SearchEngine";
import SecureInstall from "./SecureInstall";
import SecureTech from "./SecureTech";
import SkyParkingOostende from "./SkyParkingOostende";
import SocialScape from "./SocialScape";
import TeenTrends from "./TeenTrends";
import TelepheriqueNamur from "./TelepheriqueNamur";
import TukTukNamur from "./TukTukNamur";
import VenteCanapesLaSiesta from "./VenteCanapesLaSiesta";
import VideoVerse from "./VideoVerse";
import VilleDeNamur from "./VilleDeNamur";
import VirusGuardian from "./VirusGuardian";
import VisitOstende from "./VisitOstende";
import Welcome from "./Welcome";
import WereldsmakenOostende from "./WereldsmakenOostende";
import BngBanque from "./BngBanque";
import ChildVirus from "./ChildVirus";
import ActiverWifi from "./Wifi";

interface WebsiteComponentProps {
	url: string;
}

interface WebsitesProps {
	[key: string]: React.FC<WebsiteComponentProps>;
}

interface RenderWebsiteProps {
	componentName: string;
	url: string;
}

export const websites: WebsitesProps = {
	welcome: Welcome,
	searchEngine: SearchEngine,
	antivirusAdvisor: AntivirusAdvisor,
	antivirusDeals: AntivirusDeals,
	antivirusExpress: AntivirusExpress,
	cyberSafeAcademy: CyberSafeAcademy,
	virusGuardian: VirusGuardian,
	secureTech: SecureTech,
	videoVerse: VideoVerse,
	ouikiHow: OuikiHow,
	secureInstall: SecureInstall,
	antivirusFacile: AntivirusFacile,
	parkEasy: ParkEasy,
	belparking: Belparking,
	ostendeInsider: OstendeInsider,
	parkingP3Oosteroever: ParkingP3Oosteroever,
	visitOstende: VisitOstende,
	exploreOstende: ExploreOstende,
	parkingMariaHendrikapark: ParkingMariaHendrikapark,
	parkingChurchill: ParkingChurchill,
	skyParkingOostende: SkyParkingOostende,
	macrosoftTranslator: MacrosoftTranslator,
	diplTraduction: DipLTraduction,
	parkingsOostende: ParkingsOostende,
	namurPage: NamurPage,
	goulougoulouTranslate: GoulougoulouTranslate,
	inverso: Inverso,
	teenTrends: TeenTrends,
	socialScape: SocialScape,
	villeDeNamur: VilleDeNamur,
	tukTukNamur: TukTukNamur,
	telepheriqueNamur: TelepheriqueNamur,
	activitesNamur: ActivitesNamur,
	parcoursStreetArt: ParcoursStreetArt,
	museeArtsAnciens: MuseeArtsAnciens,
	museeFelicienRops: MuseeFelicienRops,
	venteCanapesLaSiesta: VenteCanapesLaSiesta,
	laSiestaHotel: LaSiestaHotel,
	restaurantVueSurMer: RestaurantVueSurMer,
	familierestaurantOostende: FamilierestaurantOostende,
	wereldsmakenOostende: WereldsmakenOostende,
	restaurantDeLaMer: RestaurantDeLaMer,
	cuevaDeGabi: CuevaDeGabi,
	restaurantLaSiesta: RestaurantLaSiesta,
	restaurantLaSiestaCubanFood: RestaurantLaSiestaCubanFood,
	restaurantLaSiestaOostende: RestaurantLaSiestaOostende,
	bngBanque: BngBanque,
	childVirus: ChildVirus,
	activerWifi: ActiverWifi
};

const RenderWebsite = ({ componentName, url }: RenderWebsiteProps) => {
	return (
		// loop through all apps and render them
		<>
			{Object.keys(websites).map((key) => {
				const Website = websites[key];
				if (key === componentName) {
					return <Website key={`all-websites-${key}-${url}`} url={url} />;
				}
			})}
		</>
	);
};

export default RenderWebsite;
