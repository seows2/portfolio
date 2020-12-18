export default class pageManager {
    constructor() {
        this.menu = document.querySelector("#menu")
        this.navigation = document.querySelector("#nav-js")
        this.last = 0

        this.menu.addEventListener("click", this.scrolling)
        window.addEventListener("scroll",this.casing)
    }

    casing = () => {   
        const position = window.pageYOffset
        const threshold = 200
        const last = this.last
        const up = position < last
        if(up || last === 0){
            this.navigation.style.transform = "translateY(0)"
        } else if (position > threshold){
            this.navigation.style.transform = "translateY(-100%)"
        }
        this.last = position
    }
}

new pageManager()
