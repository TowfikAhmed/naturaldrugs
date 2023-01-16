<template>
    <div id="bgcanvas"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as THREE from "three";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.z = 6;
camera.position.y = 1;
camera.position.x = 1;
scene.add( camera );

const light = new THREE.AmbientLight( 0xffffff, .8 );
light.position.set( 10000, 0, 0 );
const light2 = new THREE.DirectionalLight( 0xffffff, .2 );
light2.position.set( 0, 0, 100 );
scene.add( light, light2 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// renderer color offwhite
renderer.setClearColor( 0xf0f0f0, 1 );
document.body.appendChild( renderer.domElement );

// hexagone


// add 50 hexagone to scene
const group = new THREE.Group();
for ( let i = 0; i < 50; i ++ ) {
    const sides = Math.floor( Math.random() * 10 ) + 3;
    const geometry = new THREE.CylinderGeometry( 0.5, 0.5, .7, sides );
    const material = new THREE.MeshPhongMaterial( { color: 0xffffff } );
    const cube = new THREE.Mesh( geometry, material );
    cube.castShadow = true;
    cube.rotateX( Math.PI / 2 );
    cube.rotateY( Math.PI / 6 );
    cube.position.x = Math.random() * 10 - 5;
    cube.position.y = Math.random() * 10 - 5;
    cube.position.z = Math.random() * 10 - 5;
    group.add( cube );
}
scene.add(group)

// sphare that follow mouse 

const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
// light emmiting sphare
const geometry2 = new THREE.SphereGeometry( 0, 32, 32 );
const material2 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( geometry2, material2 );
const light3 = new THREE.DirectionalLight( 0xFF0000, 1, 10 );
sphere.add( light3 );
sphere.position.z = -2;
light3.castShadow = true;
scene.add( sphere );


const onMouseMove = ( event ) => {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    sphere.position.x = mouse.x;
    sphere.position.y = mouse.y;
};
window.addEventListener( 'mousemove', onMouseMove, false );

// on scroll rotate all inside group 
const onScroll = ( event ) => {
    group.rotation.y += 0.03;
    group.rotation.x += 0.03;
};
window.addEventListener( 'scroll', onScroll, false );

const animate = function () {
    requestAnimationFrame( animate );
    camera.lookAt( sphere.position );
    renderer.render( scene, camera );
};




onMounted(() => {
    var bgcanvas = document.getElementById('bgcanvas');
    console.log(bgcanvas);
    bgcanvas.appendChild( renderer.domElement );
    animate();
})


</script>