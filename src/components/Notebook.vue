<template>
  <div
    class="notebook"
    v-if="this.activePage != 0"
  >
    <div
      v-for="page in pages"
      :key="page.number"
      v-show="
        page.number == this.activePage ||
        page.number == this.activePage - 1
      "
      class="page"
      :class="[
        { left: page.number % 2 !== 0 },
        { right: page.number % 2 === 0 },
        {
          'active-edit':
            page.number == this.activeSide,
        },
      ]"
      @click="changeActiveSide(page.number)"
    >
      <div class="page-number">
        {{ page.number }}
      </div>
      <div
        class="next-page"
        @click="
          changeActivePage(
            page.number % 2 !== 0
              ? activePage - 2
              : activePage + 2
          )
        "
      >
        <img
          src="../assets/img/next-page.jpeg"
          alt=""
        />
      </div>
      <QuillEditor
        theme="snow"
        :toolbar="'full'"
        @update:content="textChange"
        :content="page.content"
      />
    </div>
  </div>
  <div
    v-else
    class="notebook close"
    @click="changeActivePage(2)"
  ></div>
</template>

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
          {
            content: [
              {
                insert: "qweqwe",
              },
              {
                attributes: {
                  "code-block": true,
                },
                insert: "\n",
              },
            ],
            number: 1,
          },
          {
            content: [
              {
                insert: "dfgfs\n",
              },
              {
                attributes: {
                  blockquote: true,
                },
                insert: "\n",
              },
            ],
            number: 2,
          },
          {
            content: [{ insert: "ghzzngh\n" }],
            number: 3,
          },
          {
            content: [{ insert: "qweqwe\n" }],
            number: 4,
          },
          {
            content: [{ insert: "Ukraine\n" }],
            number: 5,
          },
          {
            content: [{ insert: "Zodiac\n" }],
            number: 6,
          },
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
      },
    },
  };
</script>
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
      width: calc(100% - 40px);
      padding: 20px;
      background: white;
      border-radius: 10px;
      position: relative;

      .next-page {
        position: absolute;
        width: 500px;
        height: 500px;
        opacity: 0;
        transition: all 0.3s ease-in;
        cursor: pointer;
        z-index: 1000;

        img {
          width: 200px;
          height: 100px;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }

      .next-page:hover {
        opacity: 100;
      }
    }

    .left {
      box-shadow: inset -200px 0px 46px -192px
        rgba(0, 0, 0, 0.75);

      .page-number {
        position: absolute;
        top: 10px;
        left: 15px;
      }

      .next-page {
        bottom: 0;
        left: 0;

        img {
          transform: scalex(-1);
          left: 0;
        }
      }
    }
    .right {
      box-shadow: inset 200px 0px 46px -192px rgba(0, 0, 0, 0.75);

      .page-number {
        position: absolute;
        top: 10px;
        right: 15px;
      }

      .next-page {
        bottom: 0;
        right: 0;
      }
    }
  }
  .notebook.close {
    border-radius: 0 10px 10px 0;
    width: 75vh;
  }
</style>
