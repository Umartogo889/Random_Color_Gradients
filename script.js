const body = document.querySelector("body")
const contener = document.getElementById("contener")
const color_informatin_text = document.getElementById('color-number')
const text = document.querySelector("#color-number")
let vowels = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
]

const bgColorEdit = () => {
    let color = '#'

    for (let i = 0; i < 6; i++) {
        if (color += vowels[Math.trunc(Math.random() * vowels.length)]) {

        }
    }
    return color
}
const BgColorNumber = () => {
    let bgColor1 = bgColorEdit()
    let bgColor2 = bgColorEdit()
    let deg = Math.floor(Math.random() * 360)
    let bgColor = `linear-gradient(${deg}deg, ${bgColor1}, ${bgColor2})`
    body.style.backgroundImage = bgColor
    text.textContent = bgColor

}
contener.addEventListener('click', BgColorNumber)