import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="project"
export default class extends Controller {

  static targets = [ "project" ]


  select(event) {
    const selected = event.currentTarget
    const projectSelector = selected.innerText
    const projects = this.projectTargets
    const selectors = document.querySelectorAll(".selector")

    selectors.forEach(selector => {
      selector.classList.remove("selected");
      selector.classList.add("unselected");
    });

    selected.classList.remove("unselected");
    selected.classList.add("selected");


    projects.forEach(project => {
      if (project.getAttribute("data-target-value") === projectSelector) {
        setTimeout(() => {project.classList.remove("opacity-off");
        project.classList.add("opacity-on");},350);
        setTimeout(() => {project.classList.remove("cacher")},300);
      } else {
        project.classList.add("opacity-off");
        project.classList.remove("opacity-on");
        setTimeout(() => {project.classList.add("cacher")},300);
      }
    });

  }
}
