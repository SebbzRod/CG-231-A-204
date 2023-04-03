/**
 * createCono: Construye un cono y los retorna
 * ENTRADAS: Base = Variable num, tamaño del lado de la base del cono que se creara en la escena. Ademas sera el valor de la altura
 *           Lados = Variable num, numero de lados del cono que se creara en la escena.
 * SALIDAS: cubo = Array con los objetos Mesh de Three.js correspondientes a cada cubo.
 */
function crearCono( base, lado) {
    
    const geometry = new THREE.ConeGeometry( base, base, lado);
    const material = new THREE.MeshNormalMaterial();
    const cone = new THREE.Mesh(geometry, material);
    return cone;
    
}
  
/**
* Animate: Funcion creada para trabajar con una escena, una cámara y un objeto de control de cámara.
*/
function animate(){

requestAnimationFrame(animate);
controls.update();
renderer.render(scene, camera);

}
  
