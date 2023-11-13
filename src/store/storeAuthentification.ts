import { reactive } from 'vue';

export const storeAuthentification = reactive({
    JWT: "",
    estConnecte: false,

    connexion(login: string, motDePasse: string, succes: () => void, echec: () => void): void {
        const connectingUser = {
            login: login,
            motDePasse: motDePasse,
        };

        fetch('https://webinfo.iutmontp.univ-montp2.fr/~polletm/r5.a.05-programmationavancee-web-td4/public/api/auth', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(connectingUser),
        }).then((response) => {
            if (response.status !== 200) {
                this.estConnecte = false;
                echec();
            } else {
                response.json().then((data) => {
                    this.estConnecte = true;
                    this.JWT = data.token;
                    succes();
                });
            }
        }).catch(() => {
            this.estConnecte = false;
            echec();
        });
    }
});
