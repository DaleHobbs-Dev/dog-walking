import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (theClickEvent) => {
        const whatWasClickedOn = theClickEvent.target

        if (whatWasClickedOn.dataset.type === "walker") {
            window.alert(`This walker works in ${whatWasClickedOn.dataset.walkerCity}`)
        }
    }
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li 
        data-walker-id="${walker.id}" 
        data-walker-city="${walker.city}"
        data-type="walker"
        >${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}