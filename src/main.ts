import "./style.css";
import * as THREE from "three";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

const [width, height] = [canvas.width, canvas.height];

// scene
const scene = new THREE.Scene();

// object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// camera
const camera = new THREE.PerspectiveCamera(75, width / height);
camera.position.z = 5;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(width, height);

renderer.render(scene, camera);
