<template>
    <div id="loan-page">
        <form v-if="objLoan" @submit.prevent="submitForm()">
            <h5 class="text-center">Repay Form</h5>
            <div class="form-group">
                <label for="name">Name: </label><span class="ml-2">{{objLoan.name}}</span>
            </div>

            <div class="form-group">
                <label for="amountInput">Amount:</label><span class="ml-2">{{objLoan.amount}}</span>
            </div>
            <div class="form-group">
                <label for="termInput">Term:</label><span class="ml-2">{{objLoan.term}}</span>
            </div>
            <div class="form-group">
                <label for="termInput">Status:</label><span class="ml-2">{{objLoan.status == 0 ? "Not approved" : "Approved"}}</span>
            </div>
            <button v-if="objLoan.status == 1" type="submit" class="btn btn-primary mr-2">Repay</button>
            <button type="button" class="btn btn-success" @click="logout">Logout</button>
        </form>
        <div v-else>
            <p>No Have Loan</p>
            <button @click="goClient()" class="btn btn-primary">Go back</button>
            <button @click="logout()" class="btn btn-success ml-2">Logout</button>
        </div>
    </div>
</template>
<script>
import mixins from '../../utils/mixin'
export default {
    mixins:[mixins],
    data(){
        return{
            objLoan:{}
        }
    },
    created() {
        this.objLoan = JSON.parse(localStorage.getItem("loan"));
    },
    methods:{
        submitForm(){
            let deadline = new Date(this.objLoan.deadline);
            deadline.setDate(deadline.getDate() + 7);
            this.objLoan.deadline = deadline;

            localStorage.setItem("loan", JSON.stringify(this.objLoan));
            this.$router.push("/success");
        },
        logout(){
            this.$store.dispatch("logout");
        },
        goClient(){
            this.$router.push("/client");
        }
    }
}
</script>
<style lang="scss" scoped>
    #loan-page{
        display: flex;
        justify-content: center;
        align-items: center;
        form{
            min-width: 500px;
        }
    }

</style>