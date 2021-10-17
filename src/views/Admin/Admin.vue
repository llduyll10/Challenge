<template>
    <div>
        <div class="cover" v-if="loanList">
            <h5>Loan List:</h5>
            <p>Name: {{loanList.name}}</p>
            <p>Amount: {{loanList.amount}}</p>
            <p>Term: {{loanList.term}}</p>
            <p>Status: {{loanList.status == 0 ? "Not approved" : "Approved" }}</p>
            <div class="d-flex">
                <button @click="approveLoan()" class="btn btn-primary">Approved</button>
                <button @click="logout()" class="btn btn-success ml-2">Logout</button>
            </div>
        </div>
        <div v-else>
            <h5>Loan List</h5>
            <p>No Have Loan</p>
            <button @click="logout()" class="btn btn-success ml-2">Logout</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
      loanList: null,
    };
    },
    created() {
        this.loanList = JSON.parse(localStorage.getItem("loan"));
    },
    methods:{
        approveLoan(){
            this.loanList.status = 1
            localStorage.setItem("loan",JSON.stringify(this.loanList))
        },
        logout(){
            this.$store.dispatch("logout");
        }
    }
}
</script>