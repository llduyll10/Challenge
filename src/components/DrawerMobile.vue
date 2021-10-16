<template>
  <nav id="sidebar-mobile">
    <ul class="list-unstyled components d-flex">
        <li
          :class="{ active: item.isActive }"
          v-for="(item, index) in buttonList"
          :key="index"
        >
            <img class="mb-5px" width="24" height="24" :src="item.urlImg" />
            <p href="#">{{item.name}}</p>
        </li>
      </ul>
  </nav>
</template>
<script>
import api from "../services/base-services";
export default {
  name: "Drawer",
  props: ["isMobile"],
  mounted() {
    this.$store.dispatch("getListData");
  },
  data() {
    return {
      buttonList: [
        {
          name: "Home",
          isActive: false,
          urlImg:'/img/Home.svg'
        },
        {
          name: "Card",
          isActive: true,
          urlImg:'/img/Card.svg'
        },
        {
          name: "Payments",
          isActive: false,
          urlImg:'/img/Payments.svg'
        },
        {
          name: "Credit",
          isActive: false,
          urlImg:'/img/Credit.svg'
        },
        {
          name: "Settings",
          isActive: false,
          urlImg:'/img/Account.svg'
        },
      ],
    };
  },

  methods: {

  },
};
</script>