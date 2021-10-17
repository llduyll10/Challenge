<template>
    <div id="loan-page">

        <form @submit.prevent="submitForm()" >
            <h5 class="text-center">Loan Form</h5>
            <div class="form-group">
                <label for="name">Name</label>
                <input v-model="objLoan.name" type="text" class="form-control" id="name" placeholder="Name" required>
            </div>
            <div class="form-group">
                <label for="emailAdress">Email address</label>
                <input v-model="objLoan.email" type="email" class="form-control" id="emailAdress" placeholder="Enter email" required>
            </div>
            <div class="form-group">
                <label for="amountInput">Amount</label>
                <input v-model="objLoan.amount" @keydown="isNumber($event)" type="text" class="form-control" id="amountInput" placeholder="Amount" required>
            </div>
            <div class="form-group">
                <label for="termInput">Term</label>
                <input v-model="objLoan.term" type="text" class="form-control" id="termInput" placeholder="Term" required>
            </div>
            <div class="d-flex">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button @click="repay" type="button" class="btn btn-success ml-2">Repay</button>
            </div>

        </form>
    </div>
</template>
<script>
import mixins from '../../utils/mixin'
export default {
    mixins:[mixins],
    data(){
        return{
            objLoan:{
                status:0,
                deadline: new Date()
            }
        }
    },
    methods:{
        submitForm(){
            console.log('objLoan',this.objLoan)
            localStorage.setItem('loan',JSON.stringify(this.objLoan))
            this.$router.push("/success");
        },
        repay(){
            this.$router.push('/repay')
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