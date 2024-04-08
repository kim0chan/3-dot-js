import * as THREE from 'three';
import {
  OrbitControls
} from "https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(104, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#canvas'),
  // antialias: true,
});
const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.rotateSpeed = 0.8;
// controls.zoomSpeed = 1.2;
console.log(renderer.domElement);

renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
scene.background = new THREE.Color('white');

camera.position.set(0, 0, 2);

const animate = () => {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
};
animate();
