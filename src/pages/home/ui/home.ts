import { render as Planner } from "../../../widgets/planner/ui/planner.ts";
import { Main } from "../../../shared/visualizer/model/main.ts";
import { BoxGeometry, MeshNormalMaterial, Mesh } from "three";

const appId = "app";

export function render() {
  const template = `
        <div class="home">
            <div class="header">
                <h2>3D Visualizer</h2>
            </div>
            <hr>
            <div class="planner">
              <div id="${appId}">
              </div>
            </div>
        </div>
  `;
  setTimeout(() => planner(), 0);
  return template;
}

function planner() {
  const planner = Planner(appId) as Main;
  const geometry = new BoxGeometry(200, 200, 200);
  const material = new MeshNormalMaterial();
  const mesh = new Mesh(geometry, material);

  planner.scene.add(mesh);
  planner.render();
}
