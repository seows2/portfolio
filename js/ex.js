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

    scrolling = (e) => {
        const {nodeName} = e.target
        const {id} = e.target
        if(nodeName !== "A") return

        if(id === "about-link"){
            this.scrollTo(0, 1000)
        } else if(id === "work-link"){
            this.scrollTo(930, 1000)
        }
    }

    scrollTo = (position, time) => {
        //console.log(document.documentElement.scrollTop);
        document.documentElement.scrollTop = document.documentElement.scrollTop || 0
        let perTick = time / 100
        let destY = position
        let direction = document.documentElement.scrollTop < destY ? 1 : -1
        let timerId
        const doTick = () =>{
            let distLeft = Math.abs(document.documentElement.scrollTop - destY)
            let moveBy = Math.min(perTick, distLeft)
            document.documentElement.scrollTop += moveBy * direction
            if(distLeft > 0){
                timerId = setTimeout(doTick, 2)
            }
        }
        clearTimeout(timerId)
        doTick()
    }

}

new pageManager()
