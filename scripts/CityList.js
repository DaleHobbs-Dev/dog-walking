import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedTarget = clickEvent.target;

        if (clickedTarget.dataset.type === "city") {
            window.alert(`The walker servicing this city is ${clickedTarget.dataset.walkername}`)
        }
    }
)

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const walker of walkers) {
        citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}