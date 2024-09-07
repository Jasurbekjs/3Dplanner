import { Main } from "../../../shared/visualizer/model/main.ts";

export function render(domId: string) {
  const element = document.body.querySelector(`#${domId}`);
  const width = window.innerWidth - 100;
  const height = window.innerHeight - 100;
  let visualizer: Main | null = null;
  if (element instanceof HTMLElement) {
    visualizer = new Main(element, width, height);
  }
  return visualizer;
}
