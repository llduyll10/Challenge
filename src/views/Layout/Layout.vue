<template>
  <div class="homepage" >
    <div class="drawer" >
      <div id="left-sidebar" class="left-drawer" >
        <Drawer />
      </div>
      <div id="right-drawer" class="right-drawer">
        <router-view />
        <Loading v-if="isLoading" />
      </div>

    </div>
    <div class="bottom-drawer">
        <DrawerMobile />
      </div>
  </div>
</template>
<script>
import Drawer from "../../components/Drawer";
import Header from "../../components/Header";
import DrawerMobile from '../../components/DrawerMobile.vue'
import Loading from '../../components/Loading.vue';

export default {
  name: "Layout",
  components: { Drawer, Header,DrawerMobile,Loading, Loading },
  computed:{
    updateLocalStorage(){
      return this.$store.state.updateLocalStorage;
    }
  },
  data() {
    return {
    };
  },
  computed:{
    isLoading(){
      return this.$store.state.loading;
    }
  },
  mounted(){
  }
};
</script>