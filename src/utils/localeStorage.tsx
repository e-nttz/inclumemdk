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