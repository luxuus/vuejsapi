export interface Utilisateur{
    id: number;
    adresseEmail: string;
    login: string;
    premium: boolean;
}

export interface Publication{
    id: number;
    auteur: Utilisateur;
    message: string;
    datePublication: string;
}
