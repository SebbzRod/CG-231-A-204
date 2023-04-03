import * as THREE from 'https://sebastiann16.github.io/CompG/three.module.js';
import { OrbitControls } from 'https://sebastiann16.github.io/CompG/OrbitControls.js';
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var size = 10;
var arrowSize = 5;
var divisions = 10;
var origin = new THREE.Vector3( 0, 0, 0 );
var x = new THREE.Vector3( 1, 0, 0 );
var y = new THREE.Vector3( 0, 1, 0 );
var z = new THREE.Vector3( 0, 0, 1 );
var color2 = new THREE.Color( 0x333333 );
var colorR = new THREE.Color( 0xAA0000 );
var colorG = new THREE.Color( 0x00AA00 );
var colorB = new THREE.Color( 0x0000AA );

//Creacion de la guia (guilla)
var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

//Creacion de los  ejes
var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );

//Creacion de la camara
var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 6;
camera.position.y = 6;
camera.position.x = 6;
const light = new THREE.AmbientLight(0x404040, 5);

var lado = 1;
/**
 * createCubes: Construye 3 cubos y los retorna
 * ENTRADAS: lado = Variable num, tamaño del lado de los cubos que se crearán en la escena.
 * SALIDAS: cubo = Array con los objetos Mesh de Three.js correspondientes a cada cubo.
 */
function crearCubos(lado) {

  const dimensiones = [ [lado, lado, lado], [lado/2, lado/2, lado/2], [lado/4, lado/4, lado/4] ];
  const color = [0xff0000, 0x00ff00, 0x0000ff];
  const material = [ new THREE.MeshMatcapMaterial({ color: color[0] }), new THREE.MeshMatcapMaterial({ color: color[1] }), new THREE.MeshMatcapMaterial({ color: color[2] }),];

  //Dimensiones para cada cubo
  const geometry = [];
  for (let i = 0; i < 3; i++) {
    geometry.push(new THREE.BoxGeometry(...dimensiones[i]));
  }

  //Crear los cubos
  const cubo = [];
  for (let i = 0; i < 3; i++) {
    cubo.push(new THREE.Mesh(geometry[i], material[i]));
  }

  //Reposicionar cubos
  for (let i = 0; i < 3; i++) {
    cubo[i].position.x = lado / 2;
    cubo[i].position.y = lado / 2;
    cubo[i].position.z = lado / 2;
  }
  
  //Trasladar los cubos 1 and 2
  cubo[1].position.y = (5 * lado) / 4;
  cubo[2].position.y = (13 * lado) / 8;

  //Grafricar y retornar los cubos
  for (let i = 0; i < 3; i++) {        
    scene.add (cubo[i]);
  }

  return cubo;

}
const cubo = crearCubos(lado);
/**
* Animate: Funcion creada para trabajar con una escena, una cámara y un objeto de control de cámara.
*/
function animate() {

  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);   

}

//Escena
scene.add(arrowX, arrowY, arrowZ, gridHelperXZ);
scene.add(camera);
scene.add(cubo);
scene.add(light);
const controls = new OrbitControls(camera, renderer.domElement);  
animate();
