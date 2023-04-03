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
const cubo = crearCubos(lado);

//Escena
scene.add(arrowX, arrowY, arrowZ, gridHelperXZ);
scene.add(camera);
scene.add(cubo);
scene.add(light);
const controls = new THREE.OrbitControls(camera, renderer.domElement);  
animate();
