var scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 1000;
scene.add(camera);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Creating snow
var flakeCount = 9000;
var flakeGeometry = new THREE.TetrahedronGeometry(0.035);
var flakeMaterial = new THREE.MeshPhongMaterial({color: 0xffffff});
var snow = new THREE.Group();

for (let i = 0; i < flakeCount; i++) {
  var flakeMesh = new THREE.Mesh(flakeGeometry, flakeMaterial);

  flakeMesh.position.set(
    (Math.random() - 0.5)
    (Math.random() - 0.5)
    (Math.random() - 0.5)
  );

  snow.add(flakeMesh);
}

scene.add(snow);

var flakeArray = snow.children;

//Pearl planet time, hopefully
var bpGeometry = new THREE.SphereGeometry(5, 50, 50);
var bpMaterial = new THREE.MeshPhongMaterial({
  map: new THREE.ImageUtils.loadTexture("../media/pearl-texture.jpg"),
  color: 0xaaaaaa,
  specular: 0x333333,
  shininess: 25
});

var bigPearl = new THREE.Mesh(bpGeometry, bpMaterial);

scene.add(bigPearl);

//Smaller orbiting pearl
var spGeometry = new THREE.SphereGeometry(3.5, 50, 50);
var spMaterial = new THREE.MeshPhongMaterial({
  map: new THREE.ImageUtils.loadTexture("../media/pearl-texture-2.jpg")
});

var smallPearl = new THREE.Mesh(spGeometry, spMaterial);
smallPearl.position.set(35, 0, 0);
scene.add(smallPearl);

var r = 35;
var theta = 0;
var dTheta = 2 * Math.PI / 1000;

//Creating light sources
var rightLight = new THREE.PointLight(0xffffff, 0.3, 0);
rightLight.position.set(10, 20, 7);

var leftLight = new THREE.PointLight(0xffffff, 0.3, 0);
leftLight.position.set(-10, 20, 7);

var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);

scene.add(rightLight);
scene.add(leftLight);
scene.add(ambientLight);

//Animation
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
    bigPearl.rotation.y -= .0005;

    theta += dTheta;
    smallPearl.position.x = r * Math.cos(theta);
    smallPearl.position.z = r * Math.sin(theta);
  }

  controls.update();

//Camera moving the way I want it to, hopefully
  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (mouseY - camera.position.y) * 0.05;
  camera.lookAt(scene.position);

  renderer.render(scene, camera);
}

animate();
