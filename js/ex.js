export default class pageManager {
  constructor() {
    this.menu = document.querySelector("#menu");
    this.navigation = document.querySelector("#nav-js");
    this.last = 0;
    this.cards = document.querySelectorAll(".image");
    this.container = document.querySelector(".cards");
    this.boxes = document.querySelectorAll(".box");

    this.menu.addEventListener("click", this.scrolling);
    window.addEventListener("scroll", this.casing);
    window.addEventListener("resize", this.calculate);

    this.calculate();
    // calculate함수 참조
    // https://codepen.io/knyttneve/pens/public?cursor=ZD0xJm89MCZwPTEmdj0zOTYwMjEyMg==
  }

  casing = () => {
    const position = window.pageYOffset;
    const threshold = 200;
    const last = this.last;
    const up = position < last;
    if (up || last === 0) {
      this.navigation.style.transform = "translateY(0)";
    } else if (position > threshold) {
      this.navigation.style.transform = "translateY(-100%)";
    }
    this.last = position;
  };

  scrolling = (e) => {
    const { nodeName } = e.target;
    const { id } = e.target;
    if (nodeName !== "A") return;
    if (id === "about-link") {
      this.scrollTo(0, 1000);
    } else if (id === "work-link") {
      const posY = document.querySelector(`.project`).offsetTop;
      console.log(id, posY);
      this.scrollTo(posY - 100, 1000);
    } else {
      const posY = document.querySelector(`.personal`).offsetTop;
      console.log(id, posY);
      this.scrollTo(posY - 200, 1000);
    }
  };

  scrollTo = (position, time) => {
    //console.log(document.documentElement.scrollTop);
    document.documentElement.scrollTop =
      document.documentElement.scrollTop || 0;
    let perTick = time / 100;
    let destY = position;
    let direction = document.documentElement.scrollTop < destY ? 1 : -1;
    let timerId;

    const doTick = () => {
      let distLeft = Math.abs(document.documentElement.scrollTop - destY);
      let moveBy = Math.min(perTick, distLeft);
      document.documentElement.scrollTop += moveBy * direction;
      if (distLeft > 10) {
        timerId = setTimeout(doTick, 2);
      }
    };

    clearTimeout(timerId);
    doTick();
  };

  calculate = () => {
    this.iterate(this.boxes, 93.8, false);

    let variable = window.innerWidth;
    let factor = 4 / 3;
    let number = 2;
    let description = 148;
    let percentage = 0.355;
    let margin = 80;
    let additional = 140;

    if (variable > 1920) {
      variable = 1920;
    }

    const calculation = variable * percentage * factor - description;
    const containerHeight =
      (calculation + description + margin) * number + additional;
    for (let i = 0; i < this.cards.length; i++) {
      const card = this.cards[i];
      card.style.height = `${calculation}px`;
    }
    if (this.container) {
      this.container.style.height = `${containerHeight - 100}px`;
    }
  };

  iterate(properties, value, should = false, full = true) {
    for (var i = 0; i < properties.length; i++) {
      const proof = properties[i];

      if (window.innerWidth > 1920) {
        proof.style.marginLeft =
          "-" + ((window.innerWidth - 1920) / 2 + 19.2 * 12.4) + "px";
        proof.style.width =
          (window.innerWidth - 1920) / 2 + 19.2 * value + "px";

        if (value == 100) {
          proof.style.width = "100vw";
        }

        if (should == true) {
          proof.style.marginLeft = "0px";
          proof.style.width =
            (window.innerWidth - 1920) / 2 + 19.2 * 87.6 + "px";
        }
      } else if (window.innerWidth < 1300) {
        proof.style.marginLeft = "-12.4vw";
        proof.style.width = "100vw";
      } else if (window.innerWidth < 1920) {
        proof.style.marginLeft = "-12.4vw";
        proof.style.width = 93.9 + "vw";

        if (value == 100) {
          proof.style.width = "100vw";
        }

        if (should == true) {
          proof.style.marginLeft = "0px";
          proof.style.width = 87.6 + "vw";
        }
      }
    }
  }
}

new pageManager();
