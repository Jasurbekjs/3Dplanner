import { render as Planner } from "../../../widgets/planner/ui/planner.ts";
import { Main } from "../../../shared/visualizer/model/main.ts";

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
  let planner: Main | null = null;
  setTimeout(() => (planner = Planner(appId)), 0);
  planner;

  return template;
}
