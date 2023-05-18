const btn = document.querySelector(".btn")
const hrRight = document.querySelectorAll(".hr-right")
const hrLeft = document.querySelectorAll(".hr-left")
const inActiveS1 = document.querySelectorAll(".inActiveS1")
const inActiveS1Alt = document.querySelectorAll(".inActiveS1Alt")
const inActiveS2 = document.querySelectorAll(".inActiveS2")
const inActiveS3 = document.querySelectorAll(".inActiveS3")
const inActive = document.querySelectorAll(".inActive")
const navBg = document.querySelector("#navBg")
const iconCntr = document.querySelector(".iconCntr")
const cross1 = document.querySelector("#cross1")
const cross2 = document.querySelector("#cross2")
const inActiveAlt = document.querySelectorAll(".inActiveAlt")
const showBar = document.querySelectorAll(".showBar")
const projects = document.querySelector("#Projects")

window.addEventListener("scroll", () => {
    firstSectionActive()
    SecondSectionActive()
    ThiredSectionActive()
})

let index = true
iconCntr.addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("Active")
    if (index) {
        cross1.style.animation = "cross1 .4s linear both"
        cross1.style.backgroundColor = "orange"
        cross2.style.animation = "cross2 .4s linear both"
        cross2.style.backgroundColor = "orange"
        index = false
    }
    else {
        cross1.style.animation = "cross1End .4s linear both"
        cross2.style.animation = "cross2End .4s linear both"
        cross2.style.backgroundColor = ""
        cross1.style.backgroundColor = ""
        index= true
    }
})

const firstSectionActive = () => {
    let offset = window.pageYOffset
    if (offset > 400){
        hrLeft.forEach((item, i) => {
            if (i==0){
                item.style.transform = "translateX(-40rem)"
            }
        })
        hrRight.forEach((item, i) => {
            if (i==0){
                item.style.transform = "translate(40rem)"
            }
        })
        inActiveS1.forEach(item => {
            item.classList.remove("Active")
        })
        inActiveS1Alt.forEach(item => {
            item.classList.remove("ActiveAlt")
        })
    }
    else{
        hrLeft.forEach((item, i) => {
            if (i<=0){
                item.style.transform = "translateX(-4rem)"
            }
        })
        hrRight.forEach(item => {
            item.style.transform = "translate(8rem)"
        })
        inActiveS1.forEach(item => {
            item.classList.add("Active")
        })
        inActiveS1Alt.forEach(item => {
            item.classList.add("ActiveAlt")
        })
    }
}

const ThiredSectionActive = () => {
    let offset = window.pageYOffset
    if (offset < projects.offsetHeight - 200){
        hrLeft.forEach((item, i) => {
            if (i==2){
                item.style.transform = "translateX(-40rem)"
            }
        })
        hrRight.forEach((item, i) => {
            if (i==2){
                item.style.transform = "translate(40rem)"
            }
        })
        inActiveS3.forEach(item => {
            item.classList.remove("Active")
        })
    }
    else{
        hrLeft.forEach((item, i) => {
            if (i==2){
                item.style.transform = "translateX(-4rem)"
            }
        })
        hrRight.forEach((item, i) => {
            if (i==2){
                item.style.transform = "translate(8rem)"
            }
        })
        inActiveS3.forEach(item => {
            item.classList.add("Active")
        })
    }
}

const SecondSectionActive = () => {
    let offset = window.pageYOffset
    if (offset > 1200 || offset< 400){
        hrLeft.forEach((item, i) => {
            if (i==1){
                item.style.transform = "translateX(-40rem)"
            }
        })
        hrRight.forEach((item, i) => {
            if (i==1){
                item.style.transform = "translate(40rem)"
            }
        })
        inActiveS2.forEach(item => {
            item.classList.remove("Active")
        })
        showBar.forEach(item => {
            item.classList.add("inActiveBar")
        })
    }
    else{
        hrLeft.forEach((item, i) => {
            if (i==1){
                item.style.transform = "translateX(-4rem)"
            }
        })
        hrRight.forEach((item, i) => {
            if (i==1){
                item.style.transform = "translate(8rem)"
            }
        })
        inActiveS2.forEach(item => {
            item.classList.add("Active")
        })
        showBar.forEach(item => {
            item.classList.remove("inActiveBar")
        })
    }
}

inActive.forEach(item => {
    item.classList.add("Active")
})

inActiveAlt.forEach(item => {
    item.classList.add("ActiveAlt")
})

hrRight.forEach((item, i) => {
    if (i==0) {
        item.style.transform = "translateX(8rem)"
    }})
hrLeft.forEach((item, i) => {
    if (i==0) {
        item.style.transform = "translateX(-3rem)"
    }
})

// Icon Changer

const icons = document.querySelectorAll(".Icons")


icons.forEach(icon => {
    let i = 0
    setInterval(() => {
        icon.classList.remove("Active")
        icons[i].classList.add("Active")
        if (i < icons.length - 1){
            i++
        }
        else {
            i = 0
        }
    }, 1000);

})

// GitHub Container Transform
const projectImgs = document.querySelectorAll(".imgWrapper")
const gitCntr = document.querySelectorAll(".gitCntr")
const langCntr = document.querySelectorAll(".langCntr")
const cardsHeader = document.querySelectorAll(".cardsHeader")

projectImgs.forEach((item, i) => {
    item.addEventListener("mouseover", ()=> {
        gitCntr[i].style.transform = "translateY(0)"
        langCntr[i].style.transform = "translateY(-1rem)"
        cardsHeader[i].style.transform = "translateY(0rem)"
    })
    item.addEventListener("mouseleave", ()=> {
        gitCntr[i].style.transform = ""
        langCntr[i].style.transform = "translateY(4rem)"
        cardsHeader[i].style.transform = ""
    })
})
