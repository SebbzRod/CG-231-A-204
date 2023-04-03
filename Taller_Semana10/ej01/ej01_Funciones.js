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

/**
* Animate: Funcion creada para trabajar con una escena, una cámara y un objeto de control de cámara.
*/
function animate() {

  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);   

}