<template>
    <div id="login-page">
        <form @submit.prevent="submitForm()">
            <h5 class="text-center">Login</h5>
            <div class="form-group">
                <label for="emailAdress">Email address</label>
                <input v-model="objUser.email" type="email" class="form-control" id="emailAdress" placeholder="Name" required>
            </div>
            <div class="form-group">
                <label for="passwordInput">Password</label>
                <input v-model="objUser.password" type="password" class="form-control" id="passwordInput" placeholder="Password" required>
            </div>
            <p class="text-danger" v-if="isError">Something went wrong. Please try again!</p>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            objUser:{}
        }
    },
    computed:{
        isError(){
            return this.$store.state.isError;
        }
    },
    mounted(){
    },
    methods:{
        submitForm(){
            this.$store.dispatch("handleLogin", this.objUser)
        },

    },
}
</script>
<style lang="scss" scoped>
    #login-page{
        display: flex;
        justify-content: center;
        align-items: center;
        form{
            min-width: 500px;
        }
    }

</style>