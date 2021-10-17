<template>
  <div class="home">
    <h5 class="text-lg mb-30px">Thank you for your application.</h5>
    <div class="d-flex">
        <button @click="logout" class="btn btn-primary">Logout</button>
        <button @click="repay" class="btn btn-success ml-10px">Repay</button>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        logout(){
            this.$store.dispatch("logout");
        },
        repay(){
          this.$router.push('/repay')
        }
    }
};
</script>

<style></style>
