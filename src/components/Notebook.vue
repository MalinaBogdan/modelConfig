<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { mapGetters } from "vuex";

export default {
  components: {
    QuillEditor,
  },
  computed: {
    ...mapGetters(["isHorizOrientation"]),
  },
  data() {
    return {
      addForm: {},
      pages: [
        { content: [{ insert: "qweqwe\n" }], number: 1 },
        { content: [{ insert: "dasd\n" }], number: 2 },
        { content: [{ insert: "ghngh\n" }], number: 3 },
        { content: [{ insert: "cvbc\n" }], number: 4 },
      ],
      activePage: 0,
      activeSide: 0,
    };
  },
  mounted() {},
  watch: {
    isHorizOrientation(data) {
      console.log(data, "data");
    },
  },
  methods: {
    textChange(e) {
      console.log(e, "e");
    },
    changeActivePage(num) {
      this.activePage = num;
    },
    changeActiveSide(num) {
      this.activeSide = num;
      // setTimeout(() => {
      //   let a = document.getElementsByClassName("ql-toolbar")[0].clientHeight;
      //   console.log(a, "a");
      // }, 10);
    },
  },
};
</script>

<template>
  <div class="notebook" v-if="this.activePage != 0">
    <div
      v-for="page in pages"
      :key="page.number"
      v-show="
        page.number == this.activePage || page.number == this.activePage - 1
      "
      class="page"
      :class="[
        { left: page.number % 2 !== 0 },
        { right: page.number % 2 === 0 },
        { 'active-edit': page.number == this.activeSide },
      ]"
      @click="changeActiveSide(page.number)"
    >
      <QuillEditor
        theme="snow"
        :toolbar="'full'"
        @update:content="textChange"
        :content="[{ insert: 'dsadas\n' }]"
      />
    </div>
  </div>
  <div v-else class="notebook close" @click="changeActivePage(2)"></div>
</template>

<style scoped lang="scss">
.notebook {
  height: 80vh;
  width: 150vh;
  max-width: 100vw;
  margin: 100px auto;
  padding: 2px 15px;
  border-radius: 10px;
  display: flex;
  background: black;
  box-shadow: 0px 0px 31px -9px rgba(0, 0, 0, 0.75);

  .page-wrap {
    width: 50%;
  }

  .page {
    width: 100%;
    background: white;
    border-radius: 10px;
    position: relative;
  }

  .left {
    box-shadow: inset -200px 0px 46px -192px rgba(0, 0, 0, 0.75);
  }
  .right {
    box-shadow: inset 200px 0px 46px -192px rgba(0, 0, 0, 0.75);
  }
}
.notebook.close {
  border-radius: 0 10px 10px 0;
  width: 75vh;
}
</style>
