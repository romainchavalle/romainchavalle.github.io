import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="scroller"
export default class extends Controller {

  static targets = ["navbarItem"]

  connect(){
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Logique à exécuter quand l'élément est visible

          navbarItems.forEach( navbarItem => {
            if (navbarItem.innerText.includes(entry.target.id)){
              navbarItem.classList.add("actual-view")
            } else {
              navbarItem.classList.remove("actual-view")
            }
          })
        }
      });
    };

    const options = {
      root: null, // Élement de référence (null pour le viewport)
      rootMargin: '0px', // Marges autour de la racine
      threshold: 0.7 // Pourcentage de visibilité requis pour déclencher le callback
    };

    const sections = document.querySelectorAll('.target');
    const navbarItems = this.navbarItemTargets

    const observer = new IntersectionObserver(callback, options);

    sections.forEach(section => observer.observe(section));

  }

  scroll(event) {

    const targetSection = event.currentTarget.innerText.trim()
    const section = document.getElementById(targetSection)

    section.scrollIntoView({
      behavior: "smooth"
    });
  }

  firstScroll(){

    console.log("bonuujjour")
    console.log(document)
    const section = document.getElementById("Projects")

    section.scrollIntoView({
      behavior: "smooth"
    });

  }
}
