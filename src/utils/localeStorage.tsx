// Fonction pour récupérer les mails depuis le localStorage
export const getMailsFromLocalStorage = (UserSession: string) => {
    const localStorageKey = `userSessions_${UserSession}`;  // Utilisez un identifiant unique pour l'utilisateur
    const savedMails = localStorage.getItem(localStorageKey);
    return savedMails ? JSON.parse(savedMails) : []; // Retourne un tableau vide si aucun mail n'est trouvé
};
  
// Fonction pour sauvegarder les mails dans le localStorage
export const saveMailsToLocalStorage = (UserSession: string, mails: any[]) => {
    const localStorageKey = `userSessions_${UserSession}`;  // Utilisez un identifiant unique pour l'utilisateur
    localStorage.setItem(localStorageKey, JSON.stringify(mails)); // Sauvegarde les mails dans le localStorage
};
  
// Fonction pour réinitialiser le localStorage (supprime les mails de l'utilisateur)
export const resetLocalStorage = (UserSession: string) => {
    const localStorageKey = `userSessions_${UserSession}`;
    localStorage.removeItem(localStorageKey);  // Supprime l'élément du localStorage
};


// Fonction pour récupérer la valeur de AntivirusInstalled depuis le localStorage
export const getAntivirusInstalledFromLocalStorage = (): boolean => {
    const antivirusInstalled = localStorage.getItem('AntivirusInstalled');
    return antivirusInstalled ? JSON.parse(antivirusInstalled) : false; // Par défaut, retourne `false` si non défini
};

// Fonction pour sauvegarder la valeur de AntivirusInstalled dans le localStorage
export const saveAntivirusInstalledToLocalStorage = (isInstalled: boolean) => {
    localStorage.setItem('AntivirusInstalled', JSON.stringify(isInstalled));
};

// Fonction pour réinitialiser AntivirusInstalled dans le localStorage
export const resetAntivirusInstalledInLocalStorage = () => {
    localStorage.removeItem('AntivirusInstalled');
};

// Fonction pour récupérer les transactions depuis le localStorage
export const getTransactions = (): { nom: string, montant: number, entree_sortie: string, date: string }[] => {
    const transactionTest = localStorage.getItem('TransactionsTest');
    return transactionTest ? JSON.parse(transactionTest) : [];  // Retourne un tableau vide par défaut
  };
  
  // Fonction pour sauvegarder une nouvelle transaction dans le localStorage
  export const saveTransactions = (nom: string, montant: number, entree_sortie: string, date: string) => {
    const transactions = getTransactions();  // Récupère les transactions existantes
  
    const newTransaction = { nom, montant, entree_sortie, date }; // Crée une nouvelle transaction
  
    transactions.push(newTransaction); // Ajoute la nouvelle transaction au tableau
  
    localStorage.setItem('TransactionsTest', JSON.stringify(transactions)); // Sauvegarde le tableau des transactions
  };
  
  // Fonction pour réinitialiser les transactions dans le localStorage
  export const resetTransactions = () => {
    localStorage.removeItem('TransactionsTest');  // Supprime l'élément du localStorage
  };
  
  export const saveMessageToLocalStorage = (UserSession: string, message: { id: string, text: string, timestamp: number }) => {
    const localStorageKey = `messages_${UserSession}`; 
    const savedMessages = localStorage.getItem(localStorageKey);
    const messages = savedMessages ? JSON.parse(savedMessages) : [];
    
    messages.push(message); // Ajoute le nouveau message à la liste
    localStorage.setItem(localStorageKey, JSON.stringify(messages)); // Sauvegarde
};

export const getMessagesFromLocalStorage = (UserSession: string) => {
    const localStorageKey = `messages_${UserSession}`;  
    const savedMessages = localStorage.getItem(localStorageKey);
    return savedMessages ? JSON.parse(savedMessages) : [];  
};

export const resetMessagesInLocalStorage = (UserSession: string) => {
    const localStorageKey = `messages_${UserSession}`;
    localStorage.removeItem(localStorageKey);  
};
