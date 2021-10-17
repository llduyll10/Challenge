<template>
  <nav id="sidebar">
      <div class="cover-logo">
        <img width="125" height="35" src="/img/Aspire-Logo-2.svg" alt="Logo" />
        <p class="des">Trusted way of banking for 3,000+ <br> SMEs and startups in Singapore</p>
      </div>
      <ul class="list-unstyled components mb-5">
        <li
          :class="{ active: item.isActive }"
          v-for="(item, index) in buttonList"
          :key="index"

        >
          <div class="d-flex">
            <img class="mr-16px" width="24" height="24" :src="item.urlImg" />
            <a href="#" @click="goToPage(item.url)">{{item.name}}</a>
          </div>
        </li>
      </ul>
  </nav>
</template>
<script>
export default {
  name: "Drawer",
  props: ["isMobile"],
  mounted() {
  },
  data() {
    return {
      buttonList: [
        {
          name: "Home",
          isActive: false,
          urlImg:'/img/Home.svg',
          url:'/'
        },
        {
          name: "Card",
          isActive: true,
          urlImg:'/img/Card.svg',
           url:''
        },
        {
          name: "Payments",
          isActive: false,
          urlImg:'/img/Payments.svg',
           url:''
        },
        {
          name: "Credit",
          isActive: false,
          urlImg:'/img/Credit.svg',
          url:''
        },
        {
          name: "Login",
          isActive: false,
          urlImg:'/img/Account.svg',
          url:'/login'
        },
      ],
    };
  },

  methods: {
    goToPage(url){
      this.$router.push(url).catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    }
  },
};
</script>