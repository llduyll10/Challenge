<template>
  <div class="homepage">
    <div class="drawer">
      <div class="left-drawer">
        <Drawer />
      </div>
      <div class="right-drawer">
        <router-view />
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
export default {
  name: "Layout",
  components: { Drawer, Header,DrawerMobile },
  data() {
    return {};
  },
};
</script>