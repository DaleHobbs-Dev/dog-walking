import { getWalker } from "./database.js"

const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li>${walker.fullName}</li>`
    }

    walkerHTML += "</ul>"

}

