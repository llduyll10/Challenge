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
          urlImg:'/img/icon-logo-mobile.svg'
        },
        {
          name: "Card",
          isActive: true,
          urlImg:'/img/icon-pay-mobile.svg'
        },
        {
          name: "Payments",
          isActive: false,
          urlImg:'/img/icon-payments-mobile.svg'
        },
        {
          name: "Credit",
          isActive: false,
          urlImg:'/img/icon-credit-mobile.svg'
        },
        {
          name: "Settings",
          isActive: false,
          urlImg:'/img/icon-account-mobile.svg'
        },
      ],
    };
  },

  methods: {

  },
};
</script>