export default function pageManager() {
    const about = document.querySelector(".about")
    const work = document.querySelector(".work")
    const git = document.querySelector(".git")
    

    let last = 0
    const threshold = 200
    const navigation = document.getElementById("nav-js")

    const casing = () => {
        const position = window.pageYOffset
        const up = position < last
        if(up || last === 0){
            navigation.style.transform = "translateY(0)"
        } else if (position > threshold){
            navigation.style.transform = "translateY(-100%)"
        }
        last = position
    }

    const init = () => {
        window.addEventListener("scroll", casing)
        about.addEventListener("click")
        work.addEventListener("click")
    }
    
    init()

}
window.onload = () =>{
    new pageManager()
}
console.log();