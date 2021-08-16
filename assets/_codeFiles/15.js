this.player = new THREE.PointerLockControls(camera, document.body);
scene.add(this.player.getObject());
//add event listener to your document.body
document.body.addEventListener("click", () => this.lock(), false);
this.moveForward = false;
this.moveBackward = false;
this.moveRight = false;
this.moveLeft = false;
this.moveSpeed = 0.8;
