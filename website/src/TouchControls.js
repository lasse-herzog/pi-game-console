import { Euler, EventDispatcher, Vector3 } from 'three';

const _euler = new Euler(0, 0, 0, 'YXZ');
const _vector = new Vector3();

const _changeEvent = { type: 'change' };
const _lockEvent = { type: 'lock' };
const _unlockEvent = { type: 'unlock' };

const _PI_2 = Math.PI / 2;

var startPoint, endPoint;

class TouchControls extends EventDispatcher {
  constructor(camera, domElement) {
    super();

    if (domElement === undefined) {
      console.warn(
        'THREE.PointerLockControls: The second parameter "domElement" is now mandatory.'
      );
      domElement = document.body;
    }

    this.domElement = domElement;
    this.isLocked = false;

    // Set to constrain the pitch of the camera
    // Range is 0 to Math.PI radians
    this.minPolarAngle = 0; // radians
    this.maxPolarAngle = Math.PI; // radians

    this.pointerSpeed = 1.0;

    const scope = this;

    function onTouchStart(event) {
      startPoint = {
        x: event.touches[0].pageX,
        y: event.touches[0].pageY,
      };
    }

    function onTouchMove(event) {
      if (scope.isLocked === false) return;

      endPoint = {
        x: event.touches[0].pageX,
        y: event.touches[0].pageY,
      };

      const movementX = endPoint.x - startPoint.x;
      const movementY = endPoint.y - startPoint.y;

      startPoint = endPoint;

      _euler.setFromQuaternion(camera.quaternion);

      _euler.y -= movementX * 0.002 * scope.pointerSpeed;
      _euler.x -= movementY * 0.002 * scope.pointerSpeed;

      _euler.x = Math.max(
        _PI_2 - scope.maxPolarAngle,
        Math.min(_PI_2 - scope.minPolarAngle, _euler.x)
      );

      camera.quaternion.setFromEuler(_euler);

      scope.dispatchEvent(_changeEvent);
    }

    this.connect = function () {
      scope.domElement.ownerDocument.addEventListener('touchmove', onTouchMove);
    };

    this.disconnect = function () {
      scope.domElement.ownerDocument.removeEventListener(
        'touchstart',
        onTouchStart
      );
      scope.domElement.ownerDocument.removeEventListener(
        'touchmove',
        onTouchMove
      );
    };

    this.dispose = function () {
      this.disconnect();
    };

    this.getObject = function () {
      // retaining this method for backward compatibility

      return camera;
    };

    this.getDirection = (function () {
      const direction = new Vector3(0, 0, -1);

      return function (v) {
        return v.copy(direction).applyQuaternion(camera.quaternion);
      };
    })();

    this.moveForward = function (distance) {
      // move forward parallel to the xz-plane
      // assumes camera.up is y-up

      _vector.setFromMatrixColumn(camera.matrix, 0);

      _vector.crossVectors(camera.up, _vector);

      camera.position.addScaledVector(_vector, distance);
    };

    this.moveRight = function (distance) {
      _vector.setFromMatrixColumn(camera.matrix, 0);

      camera.position.addScaledVector(_vector, distance);
    };

    this.lock = function () {
      this.isLocked = true;
      scope.dispatchEvent(_lockEvent);
    };

    this.unlock = function () {
      this.isLocked = false;
      scope.dispatchEvent(_unlockEvent);
    };

    this.connect();
  }
}

export { TouchControls };
