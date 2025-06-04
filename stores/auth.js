import { defineStore } from 'pinia';
// Pour Nuxt 3, utilisez navigateTo pour la redirection
// import { navigateTo } from '#app'; // Décommentez si vous utilisez Nuxt 3 et navigateTo

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
  }),

  getters: {
    // Getter pour vérifier si l'utilisateur est authentifié
    isLoggedIn: (state) => !!state.token && !!state.user,
    // Getter pour obtenir l'utilisateur actuel
    currentUser: (state) => state.user,
    // Getter pour obtenir le token
    getToken: (state) => state.token,
  },

  actions: {
    // Action pour initialiser le store depuis localStorage (à appeler côté client)
    initAuth() {
      if (process.client) {
        const token = localStorage.getItem('authToken');
        const userString = localStorage.getItem('authUser');

        if (token && userString) {
          try {
            const user = JSON.parse(userString);
            this.token = token;
            this.user = user;
            this.isAuthenticated = true;
            // Optionnel : vous pourriez vouloir vérifier la validité du token auprès du backend ici
            // Par exemple, en appelant une action comme this.fetchUserProfileSilently();
          } catch (e) {
            console.error('Failed to parse authUser from localStorage or token invalid:', e);
            // Nettoyer si les données sont corrompues ou le token est invalide
            this.logoutAction(false); // false pour ne pas rediriger, car cela se passe à l'init
          }
        } else {
          // S'assurer que l'état est propre si rien n'est dans localStorage
          this.user = null;
          this.token = null;
          this.isAuthenticated = false;
        }
      }
    },

    async register(userData) {
      try {
        const response = await $fetch('/api/auth/register', {
          method: 'POST',
          body: userData,
        });

        if (response.status === 'success' && response.user) {
          // Pour simplifier, on ne logue pas automatiquement après inscription.
          // L'utilisateur devra se connecter.
          // Vous pouvez changer ce comportement si vous le souhaitez.
          // this.login({ email: userData.email, password: userData.password }); // Pour login auto
          return { success: true, message: response.message || 'Inscription réussie! Veuillez vous connecter.' };
        } else {
          return { success: false, message: response.message || 'Erreur lors de l\'inscription.' };
        }
      } catch (error) {
        console.error('Registration error:', error.data ? error.data.message : error);
        return { success: false, message: error.data?.message || 'Une erreur est survenue.' };
      }
    },

    async login(credentials) {
      try {
        const response = await $fetch('/api/auth/login', {
          method: 'POST',
          body: credentials,
        });

        if (response.token && response.user) {
          this.token = response.token;
          this.user = response.user;
          this.isAuthenticated = true;

          if (process.client) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('authUser', JSON.stringify(response.user));
          }
          
          // Redirection avec navigateTo pour Nuxt 3
          // await navigateTo('/'); // ou '/profile'
          // Pour Vue Router standard (si Nuxt 2 ou Vue CLI)
          // const router = useRouter(); router.push('/');

          return { success: true, message: response.message || 'Connexion réussie!' };
        } else {
          return { success: false, message: response.message || 'Identifiants invalides ou réponse incorrecte.' };
        }
      } catch (error) {
        console.error('Login error:', error.data ? error.data.message : error);
        return { success: false, message: error.data?.message || 'Email ou mot de passe incorrect.' };
      }
    },

    async forgotPassword(emailData) { // emailData devrait être { email: '...' }
      try {
        const response = await $fetch('/api/auth/forgot-password', {
          method: 'POST',
          body: emailData,
        });
        return { success: true, message: response.message || 'Email de réinitialisation envoyé.' };
      } catch (error) {
        console.error('Forgot password error:', error.data ? error.data.message : error);
        return { success: false, message: error.data?.message || 'Erreur lors de l\'envoi de l\'email.' };
      }
    },

    // Action pour se déconnecter
    logoutAction(shouldRedirect = true) {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      if (process.client) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
      }
      if (shouldRedirect) {
        // Redirection avec navigateTo pour Nuxt 3
        // navigateTo('/auth/login');
        // Pour Vue Router standard
        // const router = useRouter(); router.push('/auth/login');
        console.log("User logged out. Redirection should occur here if configured.");
      }
    },

    // Optionnel: Action pour récupérer le profil utilisateur si le token est valide
    async fetchUserProfile() {
      if (!this.token) {
        // console.warn('Attempted to fetch user profile without a token.');
        return;
      }
      try {
        // Note: Cet endpoint '/api/auth/profile' n'a pas encore été créé.
        // Vous devrez le créer côté serveur pour qu'il renvoie les infos utilisateur basées sur le token.
        const profileData = await $fetch('/api/auth/profile', { // Assurez-vous que cet endpoint existe
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        });
        this.user = profileData.user; // Supposant que l'API renvoie { user: {...} }
        this.isAuthenticated = true;
         if (process.client) { // Mettre à jour localStorage si le profil change
            localStorage.setItem('authUser', JSON.stringify(this.user));
          }
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        // Si le token est invalide (ex: expiré), déconnecter l'utilisateur
        if (error.response && error.response.status === 401) {
          this.logoutAction();
        }
      }
    }
  }
});