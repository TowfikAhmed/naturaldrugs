<template>
    <div id="bgcanvas"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as THREE from "three";


const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xA6CDFB, 1, 1000);

const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 550;
camera.position.x = 0;
camera.position.y = 0;
scene.add(camera);

const planet = new THREE.Object3D();
const skelet = new THREE.Object3D();
scene.add(planet);
scene.add(skelet);


planet.position.y = -180;
  skelet.position.y = -180;

  var geom = new THREE.IcosahedronGeometry(15, 2);
  var mat = new THREE.MeshPhongMaterial({
    color: 0xBD9779,
    shading: THREE.FlatShading
  });
  var bones = new THREE.MeshPhongMaterial({
    color: 0xfab9b9,
    wireframe: true,
    side: THREE.DoubleSide
  });

  var mesh = new THREE.Mesh(geom, mat);
  mesh.scale.x = mesh.scale.y = mesh.scale.z = 10;
  planet.add(mesh);

  var mesh = new THREE.Mesh(geom, bones);
  mesh.scale.x = mesh.scale.y = mesh.scale.z = 10.6;
  skelet.add(mesh);

  var ambientLight = new THREE.AmbientLight(0xBD9779, .9);
  scene.add(ambientLight);

  var directionalLight = new THREE.DirectionalLight(0xffffff, .9);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);


const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);

const animate = function () {
      requestAnimationFrame(animate);
      planet.rotation.z += .001;
      planet.rotation.y = 0;
      planet.rotation.x = 0;
      skelet.rotation.z -= .001;
      skelet.rotation.y = 0;
      skelet.rotation.x = 0;
      renderer.clear();
      renderer.render( scene, camera );
};




onMounted(() => {
    var bgcanvas = document.getElementById('bgcanvas');
    console.log(bgcanvas);
    bgcanvas.appendChild( renderer.domElement );
    animate();
})


</script>