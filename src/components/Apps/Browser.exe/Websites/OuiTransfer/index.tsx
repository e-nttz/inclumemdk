import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext } from "imagekitio-react";
import { useExplorer } from "@/providers/explorer";
import { useState } from "react";
import { useAuth } from "@/providers/auth";
import { getNextStep, saveStep } from "@/lib/client/quiz";
import { beacon } from "@/helpers/beacon";
import { useNotification } from "@/providers/notifications";

const OuiTransfer = () => {
	const {session} = useAuth();
	const { createFile, handleInfoWindow, closeInfoWindow } = useExplorer();
	const [selectedFiles, setSelectedFiles] = useState<{ url: string; name: string }[]>([]);
	const [email, setEmail] = useState("");
	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(false);
	const {addNotification} = useNotification();

	const handleSendFile = async () => {
		if (!email) return;
		setSending(true);
		const step = await getNextStep(session);
			if (step.id === 71) {
				await saveStep(session, {
					test_step_template_id: step.id,
					is_successful: true,
			});
		}
		setTimeout(() => {
			setSending(false);
			setSent(true);
		}, 2000);
		setTimeout(() => {
		  beacon("message", {
			id: Math.random(),
			sender: 0,
			content: "Merci pour tout ce que tu as fait pour moi aujourd’hui! J’ai un dernier service à te demander, peux-tu changer l’interface de mon bureau pour le mode “sombre”? Si tu n’y arrives, pas ce n’est pas grave, je le ferais moi-même. N’oublie pas d’éteindre l’ordinateur quand tu auras fini!",
		  });
		  addNotification({
			title: "Nouveau message !",
			message:
			  "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
		  });
		},5000)
	};

	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
				<section className="relative text-white bg-green-500">
					<div
						className="absolute inset-0 bg-center bg-cover opacity-70"
						style={{
							backgroundImage: `url("https://ik.imagekit.io/0jngziwft/inclume/photos_sites/${OuiTransfer.images[0]}")`,
						}}
					></div>
					<div className="container relative px-6 py-20 mx-auto text-center">
						<h1 className="text-4xl font-bold lg:text-5xl">
							Envoyez vos fichiers en toute simplicité
						</h1>
						<p className="mt-4 text-lg lg:text-xl">
							OuiTransfer vous permet de transférer des fichiers en ligne et d’obtenir un lien à partager.
						</p>
					</div>
				</section>

				<section className="py-16 bg-gray-100">
					<div className="container px-6 mx-auto text-center">
						<h2 className="text-3xl font-bold text-gray-800">Comment ça fonctionne ?</h2>
						<p className="mt-4 text-gray-600">
							Téléversez votre fichier, indiquez une adresse mail, et nous nous occupons du reste.
						</p>
					</div>
				</section>

				<section className="py-16 bg-white">
					<div className="container px-6 mx-auto">
						<ul className="space-y-8">
							<li className="p-6 bg-gray-200 rounded-lg shadow">
								<h3 className="text-xl font-semibold">Étape 1 : Choisir un fichier</h3>
								<p className="mt-2 text-gray-700">
									Sélectionnez le fichier que vous souhaitez transférer depuis votre appareil.
								</p>
							</li>
							<li className="p-6 bg-gray-200 rounded-lg shadow">
								<h3 className="text-xl font-semibold">Étape 2 : Entrer un email</h3>
								<p className="mt-2 text-gray-700">
									Entrez l’adresse email du destinataire pour confirmer l’envoi.
								</p>
							</li>
							<li className="p-6 bg-gray-200 rounded-lg shadow">
								<h3 className="text-xl font-semibold">Étape 3 : Envoyer</h3>
								<p className="mt-2 text-gray-700">
									Le fichier sera envoyé par email avec un lien sécurisé.
								</p>
							</li>
						</ul>
					</div>
				</section>

				<section className="py-16 text-center text-white bg-green-600">
					<h2 className="text-3xl font-bold">Envoyer un fichier maintenant</h2>
					<p className="mt-4 text-lg">Sélectionnez un fichier et confirmez l’envoi par email.</p>

					{/* Affichage du fichier sélectionné */}
					{selectedFiles.length > 0 && (
						<p className="mt-4 text-lg text-white">
							Fichier sélectionné : <strong>{selectedFiles[0].name}</strong>
						</p>
					)}

					{/* Étapes selon le flux */}
					{selectedFiles.length === 0 ? (
						<button
							className="inline-block px-8 py-4 mt-6 text-white bg-green-500 rounded-lg hover:bg-green-400"
							onClick={() => {
								handleInfoWindow((selected) => {
									if (selected?.url || selected?.name) {
										setSelectedFiles([{ url: selected.url, name: selected.name }]);
									}
									closeInfoWindow();
								}, undefined);
							}}
						>
							Importer un fichier
						</button>
					) : !sent ? (
						<div className="flex flex-col items-center justify-center mt-6 space-y-4">
							<input
								type="email"
								placeholder="Entrez l'adresse email du destinataire"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="px-4 py-2 text-black rounded-md w-72"
							/>
							<button
								className="px-8 py-4 text-white bg-green-500 rounded-lg hover:bg-green-400"
								onClick={handleSendFile}
								disabled={sending || !email}
							>
								{sending ? "Envoi en cours..." : "Envoyer le fichier"}
							</button>
						</div>
					) : (
						<p className="mt-6 text-xl text-white font-semibold">
							Fichier envoyé avec succès à <span className="underline">{email}</span> !
						</p>
					)}
				</section>
			</body>
		</IKContext>
	);
};

export default OuiTransfer;


// used in RenderAllWebsites to select the right website
OuiTransfer.componentName = "ouiTransfer";
OuiTransfer.title = "Transférez vos fichiers en ligne | OuiTransfer";
OuiTransfer.excerpt = "Transférez des fichiers en ligne avec OuiTransfer et obtenez un lien de partage sécurisé.";

OuiTransfer.motsCles = [
	"transfert",
	"fichier",
	"envoi",
	"lien",
	"partage",
	"wetransfer",
	"ouitransfer",
	"upload",
	"téléversement",
	"envoyer",
	"envoyer fichier",
	"partager",
	"envoyer gros fichier",
	"télécharger",
	"envoyer un lien",
	"outil en ligne",
	"partage de document",
	"partage sécurisé",
	"fichier sécurisé",
	"envoyer un fichier",
	"outil de transfert",
	"gratuit",
	"simple",
	"rapide"
];

OuiTransfer.favicon = <IconSearchEngine />;

OuiTransfer.images = [
	"ouitransfer.jpg"
];

OuiTransfer.pages = [
	{
		title: "Envoyez vos fichiers simplement avec OuiTransfer",
		url: "https://www.ouitransfer.be/accueil",
	},
];
