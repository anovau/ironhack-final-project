import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            // Nos indicara si el usuario esta autenticado
            isAuth: false,
            // Guardaremos el id de supabase que nos dara al hacer el login
            user: {
                id: "",
                email: "",
                password: "",
              },
        }
    },
    persist: [
        {
          paths: ["isAuth", "user"],
          storage: sessionStorage,
        },
      ],
    actions: {
        login(id, email, password) {
            // TODO cambiar el estado  de autenticacion e id del usuario
            this.isAuth = true;
            this.user.id = id;
            this.user.email = email;
            this.user.password = password;
        },

        logout(){
            // TODO cambiar el estado de autenticacion e id del usuario
            this.isAuth = false;
            this.user = {};
        }
    }
})