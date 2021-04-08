var scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 1000;
scene.add(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//var geometry = new THREE.BoxGeometry();
//var material = new THREE.MeshBasicMaterial({
//    color: 0x00ff00
//});
//var cube = new THREE.Mesh(geometry, material);
//scene.add(cube);

//camera.position.z = 5;

//function animate() {
//    requestAnimationFrame( animate );
//    cube.rotation.x += 0.01;
//cube.rotation.y += 0.01;
//    renderer.render( scene, camera );
//}
//animate();

var flakeCount = 9000;
var flakeGeometry = new THREE.TetrahedronGeometry(0.035);
var flakeMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
var snow = new THREE.Group();

for (let i = 0; i < flakeCount; i++) {
  var flakeMesh = new THREE.mesh(flakeGeometry, flakeMaterial);

  flakeMesh.position.set(
    (Math.random() - 0.5)
    (Math.random() - 0.5)
    (Math.random() - 0.5)
  );

  snow.add(flakeMesh);
}

scene.add(snow);

var flakeArray = snow.children;

var rightLight = new THREE.PointLight(0xffffff, 0.3, 0);
rightLight.position.set(10, 20, 7);

var leftLight = new THREE.PointLight(0xffffff, 0.3, 0);
leftLight.position.set(-10, 20, 7);

var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);

scene.add(rightLight);
scene.add(leftLight);
scene.add(ambientLight);

var animate = function() {
  requestAnimationFrame(animate);

  for (i = 0; i < flakeArray.length / 2; i++) {
    flakeArray[i].rotation.y += 0.01;
    flakeArray[i].rotation.x += 0.02;
    flakeArray[i].rotation.z += 0.03;
    flakeArray[i].position.y -= 0.018;
    if (flakeArray[i].position.y < -4) {
      flakeArray[i].position.y += 10;
  }
}
  for (i = flakeArray.length / 2; i < flakeArray.length; i++) {
    flakeArray[i].rotation.y -= 0.03;
    flakeArray[i].rotation.x -= 0.03;
    flakeArray[i].rotation.z -= 0.02;
    flakeArray[i].position.y -= 0.016;
    if (flakeArray[i].position.y < -4) {
      flakeArray[i].position.y += 9.5;
    }

    snow.rotation.y -= 0.0000002;
  }

  controls.update();

  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (mouseY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}

animate();
