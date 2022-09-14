<script>
import { RouterLink, RouterView } from "vue-router";
import Notebook from "./components/Notebook.vue";

export default {
  created() {
    window.addEventListener("resize", this.resize);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },
  methods: {
    resize(e) {
      this.$store.commit(
        "checkHorizOrientation",
        window.screen.height < window.screen.width
      );
    },
  },
  components: {
    Notebook,
  },
};
</script>

<template>
  <Notebook />
</template>

<style scoped lang="scss"></style>
