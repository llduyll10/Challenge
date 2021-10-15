<template>
  <div id="Home">

    <!-- Group header -->
    <div class="group-header">
        <p class="title">Available balance</p>
        <div class="cover">
            <div class="left">
                <div class="money-container">
                    <span class="money-icon">S$</span>
                    <div class="price">3,000</div>
                </div>
            </div>
            <div class="right">
                <div class="btn-new-card">
                    <div>
                        <img width="16" height="16" src="/img/icon-plus.svg" alt="IconPlus">
                        <span>New card</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End group header -->

    <!-- Group Menu -->
    <div class="group-menu mt-40px">
        <ul>
            <li class="active">My debit cards</li>
            <li >All company cards</li>
        </ul>
    </div>
    <!-- End Group Menu -->

    <!-- Group Content -->
    <!-- End Group Content -->

  </div>
</template>
<script>
export default {
  name: "LikeItem",
  computed: {
    listDataLike() {
      return this.$store.getters.listDataLike;
    },
  },
  methods: {
    unlikeData(item) {
      this.$store.dispatch("unlikeData", item);
    },
  },
};
</script>