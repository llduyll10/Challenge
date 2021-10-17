import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/base-services'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading:false,
        isError:false,
        emailAdmin: 'duynnd01@gmail.com',
        updateLocalStorage:false,
    },
    mutations: {
        updateLocalStorageAction:(state, payload) => {
            state.updateLocalStorage = payload
        },
        updateLoading:(state, payload) =>{
            state.loading = payload
        },
        updateIsError:(state, payload) =>{
            state.isError = payload
        }
    },
    actions: {
        handleLogin({commit, dispatch}, user){
            let userLocal = {...user}
            commit("updateLoading", true);
            api.post('/users/login',user)
                .then(res => {
                    userLocal.token = res.data.token;
                    localStorage.setItem("user", JSON.stringify(userLocal));
                    commit("updateLocalStorageAction", true);
                    commit("updateLoading", false);
                    commit("updateIsError", false);
                    if(user.email == this.state.emailAdmin){
                        router.replace("/admin");
                    }
                    else{
                        router.replace("/client");
                    }
                })
                .catch(err => {
                    commit("updateLocalStorageAction", false);
                    commit("updateLoading", false);
                    commit("updateIsError", true);
                })
        },
        logout({commit, dispatch}){
            localStorage.removeItem("user")
            commit("updateLocalStorageAction", false);
            router.replace("/login");
        },
        createUser({commit, dispatch},user){
            api.post('/users', user)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })

        }

    },
    getters: {

    }
})
