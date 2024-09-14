<template>
  <div class="ar" @click="arAction">
    <img src="../assets/img/arcube.jpg" alt="" />
    <p>See In Real Life</p>
  </div>
  <div class="content">
    <div class="popup" v-if="isPopup">
      <svg
        @click="isPopup = false"
        class="close"
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
        />
      </svg>
      <div class="text">
        Scan the QR code with your phone. Within 1-3 seconds the AR function
        opens on your phone.
      </div>
      <div class="qr">
        <qrcode-vue
          :value="value"
          :level="level"
          :render-as="renderAs"
          :foreground="'#3f69e1'"
        />
      </div>
    </div>
    <div id="model" v-show="!isPopup"></div>
  </div>

  <div class="selectors">
    <div class="wrap body">
      <div class="title">BODY COLOR</div>
      <div class="item-wrap">
        <div
          v-for="(item, id) in bodyColors"
          :key="id"
          class="item"
          :class="{ selected: item.name == selectedMainColor }"
          @click="changeMainColor(item)"
        >
          <div class="circul-border">
            <div class="circul" :class="item.name.toLowerCase()"></div>
          </div>

          <div class="text">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <div class="wrap metall">
      <div class="title">METAL COLOR</div>
      <div class="item-wrap">
        <div
          v-for="(item, id) in metallColors"
          :key="id"
          class="item"
          :class="{ selected: item.name == selectedMetallColor }"
          @click="changeMetallColor(item)"
        >
          <div class="circul-border">
            <div class="circul" :class="item.name.toLowerCase()"></div>
          </div>

          <div class="text">{{ item.name }}</div>
        </div>
      </div>
    </div>

    <div class="wrap material">
      <div class="title">MATERIAL</div>
      <div class="item-wrap">
        <div
          v-for="(item, id) in materials"
          :key="id"
          class="item"
          :class="{ selected: item.name == selectedMaterial }"
          @click="changeTexture(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextureLoader } from "three";
import { ARButton } from "three/examples/jsm/webxr/ARButton.js";

import QrcodeVue from "qrcode.vue";

import modelPath from "@/assets/models/backpack.glb";
import leatherNormalPath from "@/assets/img/leather_normal.jpg";
import fabricNormalPath from "@/assets/img/fabric_normal.jpg";
import denimNormalPath from "@/assets/img/denim_normal.jpg";
import metallNormalPath from "@/assets/img/metall_normal.jpg";

import metallTexturePath from "@/assets/img/metall_baseColor.jpg";
import leatherTexturePath from "@/assets/img/leather_baseColor.jpg";
import fabricTexturePath from "@/assets/img/fabric_baseColor.jpg";
import denimTexturePath from "@/assets/img/denim_baseColor.jpg";

import leatherOcclusionPath from "@/assets/img/leather_occlusion.jpg";
import fabricOcclusionPath from "@/assets/img/fabric_occlusion.jpg";
import denimOcclusionPath from "@/assets/img/denim_occlusion.jpg";

let scene, camera, renderer, model, mainMaterial, metallMaterial;

let selectedMainColor = ref("Brown");
let selectedMetallColor = ref("Silver");
let selectedMaterial = ref("Leather");
let isPopup = ref(false);

const value = ref("https://www.linkedin.com/in/malina1337/");
const level = ref("M");
const renderAs = ref("svg");

const bodyColors = [
  {
    name: "Brown",
    color: "0xD38149",
  },
  {
    name: "Black",
    color: "0x373737",
  },
  {
    name: "Blue",
    color: "0x104D97",
  },
];

const metallColors = [
  {
    name: "Silver",
    color: "0xFFFFFF",
  },
  {
    name: "Gold",
    color: "0xE8CF62",
  },
  {
    name: "Black",
    color: "0x373737",
  },
];

const materials = [
  {
    name: "Leather",
    path: leatherTexturePath,
  },
  {
    name: "Fabric",
    path: fabricTexturePath,
  },
  {
    name: "Denim",
    path: denimTexturePath,
  },
];

let sceneSize = {
  width: window.screen.width > 500 ? 400 : 200,
  height: window.screen.width > 500 ? 600 : 300,
};

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(
  75,
  sceneSize.width / sceneSize.height,
  0.1,
  1000
);
camera.position.z = 5;

renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(sceneSize.width, sceneSize.height);

/////// LIGHT ////////
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);
//////////////////////

const loader = new GLTFLoader();
loader.load(modelPath, function (gltf) {
  model = gltf.scene;

  console.log(model, "model");
  scene.add(model);

  centerModel(model);

  const textureLoader = new TextureLoader();
  const initialTexture = textureLoader.load(leatherTexturePath);
  const initialNormal = textureLoader.load(leatherNormalPath);
  const initialOcclusion = textureLoader.load(leatherOcclusionPath);

  mainMaterial = new THREE.MeshStandardMaterial({
    map: initialTexture,
    // normalMap: initialNormal,
    roughness: 0.3,
    // aoMap: initialOcclusion,
  });

  mainMaterial.color.setHex("0xD38149");

  model.traverse((child) => {
    if (child.isMesh && child.name == "Mesh_1") {
      const metallTextureLoader = new TextureLoader();
      const initialMetallTexture = metallTextureLoader.load(metallTexturePath);

      metallMaterial = new THREE.MeshStandardMaterial({
        map: initialMetallTexture,
        metalness: 0.9,
        roughness: 0,
      });

      metallMaterial.color.setHex("0xFFFFFF");
      child.material = metallMaterial;
    } else {
      child.material = mainMaterial;
    }
  });
});

function centerModel(model) {
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());

  model.position.sub(center);

  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180);
  let cameraZ = maxDim / (2 * Math.tan(fov / 2));

  camera.position.z = cameraZ * 1.8;
  camera.lookAt(0, 0, 0);
}

//////// CONFIGURATOR /////////
function changeMainColor(colorInfo) {
  mainMaterial.color.setHex(colorInfo.color);
  mainMaterial.needsUpdate = true;

  selectedMainColor.value = colorInfo.name;

  console.log(selectedMainColor.value, " selectedMainColor.value");
}

function changeMetallColor(colorInfo) {
  metallMaterial.color.setHex(colorInfo.color);
  metallMaterial.needsUpdate = true;

  selectedMetallColor.value = colorInfo.name;
}

function changeTexture(texture) {
  const textureLoader = new TextureLoader();
  const newTexture = textureLoader.load(texture.path);

  mainMaterial.map = newTexture;
  mainMaterial.needsUpdate = true;
  mainMaterial.roughness = texture.name === "Leather" ? 0.3 : 1;

  selectedMaterial.value = texture.name;
}
////////////////////////////

////// CONTROL ////////
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.enableZoom = false;
///////////////////////

function arAction() {
  if (window.screen.width <= 500) {
  } else {
    isPopup.value = true;
  }
}

function animate() {
  controls.update();

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

onMounted(() => {
  const modelWrap = document.querySelector("#model");

  if (modelWrap) {
    modelWrap.appendChild(renderer.domElement);

    modelWrap.appendChild(ARButton.createButton(renderer));
  }

  animate();
});
</script>

<style scoped lang="scss">
#model {
  position: relative;
  width: fit-content;
}

.content {
  height: 500px;
  width: 500px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 500px) {
  .content {
    height: 300px;
    width: 300px;
    margin: 20px auto;
  }
}

.popup {
  width: 300px;
  height: 400px;
  border-radius: 20px;
  border: 1px solid #3f69e1;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .close {
    width: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    path {
      fill: #3f69e1;
    }
  }

  .text {
    width: 199px;
    display: flex;
    margin: 0 auto;
    color: #3f69e1;
    text-align: center;
    padding-bottom: 6px;
    border-bottom: 1px solid #3f69e1;
  }

  .qr {
    width: 190px;
    height: 190px;
    border-radius: 20px;
    border: 1px solid #3f69e1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto 0;

    svg {
      width: 130px;
      height: 130px;

      path {
        fill: #3f69e1;
      }
    }
  }
}

.ar {
  position: relative;
  background: #3f69e1;
  margin: 50px auto;
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 156px;
  height: fit-content;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;

  img {
    display: block;
    position: relative;
    width: 20px;
    height: 20px;
  }

  p {
    color: white;
  }
}

.selectors {
  display: flex;
  justify-content: center;
  column-gap: 100px;
  row-gap: 20px;
  width: fit-content;
  margin: 50px auto 0;
  flex-wrap: wrap;
  padding: 0 20px;
}

.wrap {
  display: flex;
  flex-wrap: wrap;

  .text {
    margin-top: 5px;
    text-align: center;
  }

  &.body {
    width: 230px;
  }

  &.metall {
    width: 250px;
  }

  &.material {
    width: fit-content;
  }

  .title {
    font-weight: 600;
    width: 100%;
    height: fit-content;
    line-height: 30px;
    border-bottom: 1px solid black;
  }

  .item-wrap {
    display: flex;
    margin-top: 10px;
    gap: 10px;
    width: auto;
    height: auto;
  }

  .selected {
    .circul-border {
      border: 1px solid #3f69e1;
    }
    .text {
      color: #3f69e1;
    }
  }

  .circul-border {
    width: 48px;
    height: 48px;
    border-radius: 50px;
    padding: 3px;
    cursor: pointer;

    .circul {
      padding: 2px;
      width: 44px;
      height: 44px;
      border-radius: 50px;

      &.brown {
        background: rgb(90, 49, 21);
      }
      &.black {
        background: rgb(0, 0, 0);
      }
      &.blue {
        background: rgb(28, 41, 192);
      }
      &.gold {
        background: #e8cf62;
      }
      &.silver {
        background: #d4d4d4;
      }
    }
  }

  &.material {
    width: 230px;

    .item {
      width: fit-content;
      height: fit-content;
      padding: 7px 10px;
      border-radius: 20px;
      border: 1px solid black;
      cursor: pointer;

      &.selected {
        border: 1px solid #3f69e1;
        color: #3f69e1;
      }
    }
  }
}
</style>
