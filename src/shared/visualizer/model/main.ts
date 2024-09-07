import { Color, PerspectiveCamera, Scene, WebGLRenderer } from "three";
// @ts-ignore
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class Main {
  /** The scene */
  public scene: typeof Scene;

  /** The camera */
  public camera: typeof PerspectiveCamera;

  /** The renderer */
  public renderer: typeof WebGLRenderer;

  /** The orbit controls */
  public controls: OrbitControls;

  constructor(domElement: HTMLElement, width: number, height: number) {
    this.initViewport(domElement, width, height);
  }

  /** Initialize the viewport */
  public initViewport(domElement: HTMLElement, width: number, height: number) {
    // Init scene.
    this.scene = new Scene();
    this.scene.background = new Color("#c2e5fc");

    // Init camera.
    const aspect = width / height;
    this.camera = new PerspectiveCamera(50, aspect, 1, 10000);
    this.camera.position.z = 700;

    // Init renderer.
    this.renderer = new WebGLRenderer({
      powerPreference: "high-performance",
      antialias: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);
    this.renderer.render(this.scene, this.camera);

    domElement.appendChild(this.renderer.domElement);
    window.addEventListener("resize", () => this.onResize());

    // Init orbit controls.
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();
    this.controls.addEventListener("change", () => this.render());

    this.render();
  }

  /** Renders the scene */
  public render() {
    this.renderer.render(this.scene, this.camera);
  }

  /** On resize event */
  public onResize() {
    if (this.camera instanceof PerspectiveCamera) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    }
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.render();
  }
}
