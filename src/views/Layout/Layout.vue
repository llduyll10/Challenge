<template>
  <div>
    <Header />
    <div class="drawer">
      <div class="left-drawer">
        <Drawer />
      </div>
      <div class="right-drawer">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Drawer from "../../components/Drawer";
import Header from "../../components/Header";
export default {
  name: "Layout",
  components: { Drawer, Header },
  data() {
    return {};
  },
};
</script>