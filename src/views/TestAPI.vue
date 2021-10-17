<template>
    <button class="btn btn-danger" @click="callAPI">
        Call api
    </button>
</template>
<script>
import  api from "../services/base-services";
export default {
    methods:{
        callAPI(){
            var obj = {
                "email": "duynnd01@gmail.com",
                "fullName":"Duy ADMIN",
                "password": "123456",
                "password2": "123456"
            }
             var obj2 = {
                "email": "duynnd02@gmail.com",
                "fullName":"Duy Client",
                "password": "123456",
                "password2": "123456"
            }
            this.$store.dispatch("createUser",obj2);
            // localStorage.setItem("user", JSON.stringify(obj))
            // api.post(`users/login`,obj)
            // .then(res => {console.log(res)})


        }
    }
}
</script>