import * as THREE from 'https://sebastiann16.github.io/CompG/three.module.js';
import { OrbitControls } from 'https://sebastiann16.github.io/CompG/OrbitControls.js';

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

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

//Create a guide (guilla)
var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

//Create axes
var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 6;
camera.position.y = 6;
camera.position.x = -6;
const light = new THREE.AmbientLight(0x404040, 5);

var base = 1;
var lado = 10;
/**
 * createCono: Construye un cono y los retorna
 * ENTRADAS: Base = Variable num, tamaño del lado de la base del cono que se creara en la escena. Ademas sera el valor de la altura
 *           Lados = Variable num, numero de lados del cono que se creara en la escena.
 * SALIDAS: cone = El objeto cone, que representa el cono creado a partir de los parámetros proporcionados.
 */
function crearCono( base, lado) {
  
  const geometry = new THREE.ConeGeometry( base, base, lado);
  const material = new THREE.MeshNormalMaterial();
  const cone = new THREE.Mesh(geometry, material);
  return cone;
  
}

const cono = crearCono(base, lado);
/**
* Animate: Funcion creada para trabajar con una escena, una cámara y un objeto de control de cámara.
*/
function animate(){

  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);

}

//Transformadas aplicadas al cono
cono.scale.y = 3;
cono.rotation.z = 3*Math.PI/2; 
cono.rotation.x = Math.PI/2;
cono.rotation.y = -Math.PI/9.7;
cono.position.set((1.75 * base), (base/2.1), 0);

scene.add(camera);

//Añadir elementos a la escena 
scene.add(cono);
scene.add(light);
scene.add(arrowX, arrowY, arrowZ, gridHelperXZ);
const controls = new OrbitControls(camera, renderer.domElement);  
animate();
