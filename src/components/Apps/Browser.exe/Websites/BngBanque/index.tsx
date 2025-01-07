import { useState } from "react";
import IconSearchEngine from "@/assets/icons/app-banque.svg?react";
import Logo from "@/assets/icons/app-banque.svg";
import Virement from "@/assets/icons/app-banque-virement.svg";
import Compte from "@/assets/icons/credit-card.svg";
import Epargne from "@/assets/icons/bank.svg";
import Go from "@/assets/icons/go.svg";

const BngBanque = () => {
  const [virement, setVirement] = useState(false);
  const [virementDone, setVirementDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Gestion des comptes et des soldes
  const [accounts, setAccounts] = useState({
    courant: { name: "Mr Inclume", balance: 950.14, iban: "BE12 3456 7890 1234", available: 789.78 },
    epargne: { name: "Livret épargne", balance: 4967.38, iban: "BE12 3456 7890 1234" },
  });

  const [virementData, setVirementData] = useState({
    montant: "",
    compteBeneficiaire: "",
    nomBeneficiaire: "",
  });

  const [communicationStructuree, setCommunicationStructuree] = useState("+++ / / ++");

  // Met à jour les données de virement
  const handleVirementChange = (e) => {
    const { name, value } = e.target;
    setVirementData({ ...virementData, [name]: value });
  };

  // Met à jour la communication structurée
  const handleCommunicationStructureeChange = (e) => {
    let inputValue = e.target.value.replace(/[^\d]/g, "");
    inputValue = inputValue.slice(0, 12);

    let formattedValue = "+++";
    if (inputValue.length > 0) formattedValue += inputValue.slice(0, 3);
    if (inputValue.length > 3) formattedValue += "/" + inputValue.slice(3, 7);
    if (inputValue.length > 7) formattedValue += "/" + inputValue.slice(7, 12);
    formattedValue += "++";

    setCommunicationStructuree(formattedValue);
  };

  // Exécute le virement
  const executeVirement = () => {
    const montant = parseFloat(virementData.montant);
    if (isNaN(montant) || montant <= 0) {
      alert("Veuillez entrer un montant valide.");
      return;
    }

	if (montant > accounts.courant.balance) {
	  setErrorMessage("Fonds insuffisants sur le compte courant.");
	  return;
	}

    // Mise à jour des soldes
    setAccounts((prev) => ({
      ...prev,
      courant: {
        ...prev.courant,
        balance: prev.courant.balance - montant,
        available: prev.courant.available - montant,
      },
    }));

	setVirement(false);
	setErrorMessage("");
    setVirementDone(true);	
  };

  return (
    <body className="flex flex-col items-center py-10">
      <header className="flex w-[60%] justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo banque BNG" className="w-16 h-16" />
          <p className="pl-4 text-2xl font-medium">Ma banque</p>
        </div>

        <div className="rounded-md bg-gray-200 opacity-30 w-[60%] h-10 mx-4"></div>

        <div>
          <button className="border-violet-400 border rounded-md py-2 px-6 text-violet-400">
            Déconnexion
          </button>
        </div>
      </header>

      {!virement && !virementDone && (
        <section className="content pt-16 w-[50%]">
          <h1 className="text-3xl font-semibold">Aperçu</h1>
          <div className="flex pt-6" onClick={() => setVirement(true)}>
            <div className="flex flex-col items-center cursor-pointer">
              <img src={Virement} alt="Icone virement" className="w-12 h-12" />
              <p className="font-medium">Nouveau virement</p>
            </div>
          </div>

          {/* Compte à vue */}
          <div className="compte flex flex-col border border-gray-300 rounded-md mt-6">
            <div className="flex border-b p-3 items-center">
              <img src={Compte} alt="Compte courant" className="w-[40px]" />
              <h2 className="text-lg ml-3">Comptes à vue</h2>
            </div>
            <div className="flex justify-between p-3">
              <div>
                <h2 className="text-xl font-medium">{accounts.courant.name}</h2>
                <p>{accounts.courant.iban}</p>
                <p>Banque Account</p>
              </div>
              <div className="flex h-auto cursor-pointer">
                <div className="flex flex-col items-end">
                  <p className="font-medium">{accounts.courant.balance.toFixed(2)} EUR</p>
                  <p className="font-light text-sm">
                    Disponible {accounts.courant.available.toFixed(2)} EUR
                  </p>
                </div>
                <img src={Go} alt="Aller sur le compte" className="h-8 ml-8 self-center" />
              </div>
            </div>
          </div>

          {/* Compte épargne */}
          <div className="compte flex flex-col border border-gray-300 rounded-md mt-6">
            <div className="flex border-b p-3 items-center">
              <img src={Epargne} alt="Compte épargne" className="w-[40px]" />
              <h2 className="text-lg ml-3">Comptes épargne</h2>
            </div>
            <div className="flex justify-between p-3">
              <div>
                <h2 className="text-xl font-medium">{accounts.epargne.name}</h2>
                <p>{accounts.epargne.iban}</p>
                <p>Mr Inclume</p>
              </div>
              <div className="flex h-auto">
                <div className="flex flex-col items-end">
                  <p className="font-medium">{accounts.epargne.balance.toFixed(2)} EUR</p>
                </div>
                <img src={Go} alt="Aller sur le compte" className="h-8 ml-8 self-center" />
              </div>
            </div>
          </div>
        </section>
      )}

      {virement && !virementDone && (
        <section className="flex justify-center w-full pt-16">
          <div className="flex flex-col items-start w-[50%]">
            <h1 className="text-4xl text-[#FF7212]">Virement</h1>
            <div className="mt-8 w-full">
              <h2 className="text-3xl text-[#FF7212] mb-8">De</h2>
              <div className="flex items-center border rounded-lg px-8 py-8">
                <img src={Logo} alt="Logo compte" className="w-16 h-16 mr-8" />
                <div>
                  <h2 className="text-xl font-medium">{accounts.courant.name}</h2>
                  <p>{accounts.courant.balance.toFixed(2)} EUR</p>
                  <p>{accounts.courant.iban}</p>
                  <p>Banque Account</p>
                </div>
              </div>
            </div>

            <div className="mt-8 w-full">
              <h2 className="text-3xl text-[#FF7212] mb-8">Vers</h2>
              <div className="flex">
                <div className="flex flex-col pb-8 w-1/2 mr-2">
                  <label htmlFor="nomBeneficiaire" className="text-xl">
                    Nom du bénéficiaire
                  </label>
                  <input
				  		required
                    	className="border w-96 p-1 rounded-sm w-full"
                    	type="text"
                    	id="nomBeneficiaire"
                    	name="nomBeneficiaire"
                    	value={virementData.nomBeneficiaire}
                    	onChange={handleVirementChange}
                  />
                </div>
                <div className="flex flex-col pb-8 w-1/2 ml-2">
                  <label htmlFor="compteBeneficiaire" className="text-xl">
                    Compte du bénéficiaire
                  </label>
                  <input
				 		required
                    	className="border w-96 p-1 rounded-sm w-full"
                    	type="text"
                    	id="compteBeneficiaire"
                    	name="compteBeneficiaire"
                    	value={virementData.compteBeneficiaire}
                    	onChange={handleVirementChange}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 w-full">
              <h2 className="text-3xl text-[#FF7212] mb-8">Paiement</h2>
              <div className="flex flex-col pb-8">
                <label htmlFor="montant" className="text-xl">
                  Montant (€)
                </label>
                <input
					required
                  	className="border w-96 p-1 rounded-sm"
                  	type="number"
                  	id="montant"
                  	name="montant"
                  	value={virementData.montant}
                  	onChange={handleVirementChange}
                />
              </div>
              <div className="flex flex-col pb-8">
                <label htmlFor="communication" className="text-xl">
                  Communication structurée (facultatif)
                </label>
                <input
                  	className="border w-96 p-1 rounded-sm"
                  	type="text"
                  	id="communication"
                  	value={communicationStructuree}
                  	onChange={handleCommunicationStructureeChange}
                />
              </div>
			  <div className="flex flex-col pb-8">
					<p className="text-xl">Calendrier</p>
						<div className="flex w-full">
							<div className="flex items-center border p-1 rounded-sm w-1/2">
								<input
									required
									id="default-radio-1"
									type="radio"
									value=""
									name="default-radio"
									className="w-4 h-4 accent-orange-600 text-orange-600 focus:ring-orange-500 checked:bg-orange-600 dark:focus:ring-orange-600"
								/>
								<label
									htmlFor="default-radio-1"
									className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
								>
									Paiement unique
								</label>
							</div>
							<div className="flex items-center border p-1 rounded-sm ml-4 w-1/2">
								<input
									required
									id="default-radio-1"
									type="radio"
									value=""
									name="default-radio"
									className="w-4 h-4 accent-orange-600 text-orange-600 focus:ring-orange-500 checked:bg-orange-600 dark:focus:ring-orange-600"
								/>
								<label
									htmlFor="default-radio-1"
									className="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300"
								>
									Paiement récurent
								</label>
							</div>
						</div>
            		</div>
			</div>
			<p className="text-red">{errorMessage}</p>
            <div className="flex">
				<button
				className="bg-[#FF7212] text-white rounded-md py-2 px-6 mt-8"
				onClick={executeVirement}
				>
					Exécuter le virement
				</button>
				<button
				className="bg-gray text-white rounded-md py-2 px-6 mt-8 ml-4"
				onClick={() => {
					setVirement(false)
					setErrorMessage("");
				}}
				>
					Annuler
				</button>
			</div>
          </div>
        </section>
      )}

	  {virementDone && (
		<section className="content pt-16 w-[50%]">
          	<h1 className="text-4xl text-[#FF7212] mb-8">Succès</h1>
		  	<p className="text-xl">
				Votre virement de <b>{virementData.montant}€</b> vers <b>{virementData.nomBeneficiaire}</b> a été effectué avec succès. <br/>
				Merci de votre confiance.
		  	</p>
		  	<button
				className="bg-[#FF7212] text-white rounded-md py-2 px-6 mt-8 float-right"
				onClick={() => {
					setVirementDone(false);
				}}
				>
					Retour
			</button>
		</section>
	  )}
    </body>
  );
};

export default BngBanque;

// used in RenderAllWebsites to select the right website
BngBanque.componentName = "bngBanque";
// used in tab as site title
BngBanque.title = "Bng | La banque proche de vous";
// used in searchEngine
BngBanque.excerpt = "Découvrez la banque préférée de Wap[e].";

// Mots clés
BngBanque.motsCles = ["banque", "bng"];

// Site favicon icon
BngBanque.favicon = <IconSearchEngine />;

BngBanque.pages = [
  {
    title: "Bng Banque",
    url: "https://www.bngbanque.be/accueil",
  },
];
