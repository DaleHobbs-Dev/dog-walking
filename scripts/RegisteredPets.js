import { getPets, getWalkers } from "./database.js"

// Bring in all the pet objects from the database module
const pets = getPets()

// Import all the walker objects from the database module
const allWalkers = getWalkers()

// Attach a click event listener to the entire document
// (any click inside the page will trigger this listener)
document.addEventListener(
    "click",
    //callback function to run whenever a click event occurs
    (clickEvent) => {
        // Get the specific DOM element that triggered the event
        const clickedTarget = clickEvent.target;

        // Get the value of the custom data attribute "data-walker-fk-id"
        // from the clicked element (if it has one)
        const walkerId = clickedTarget.dataset.walkerFkId;

        // Loop through all walker objects
        for (const walker of allWalkers) {
            // If the walker's id matches the "data-walker-fk-id" value
            // from the clicked element, show a message
            if (walker.id === parseInt(walkerId)) {
                window.alert(`This pet is being walked by ${walker.name}.`)
            }
        }
    }
)

//Another Solution from GPT
// document.addEventListener("click", (e) => {
//     const target = e.target;

//     // only proceed if the clicked element has the data attribute
//     const walkerId = target.dataset?.walkerFkId;
//     if (!walkerId) return;

//     // find the matching walker (Number is safer than parseInt here)
//     const walker = walkers.find(w => w.id === Number(walkerId));
//     if (!walker) return;

//     window.alert(`This pet is being walked by ${walker.name}.`);
// });

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    // Create an <li> for each pet, storing its walker's id in a data attribute
    for (const pet of pets) {
        petHTML += `<li data-walker-fk-id="${pet.walkerId}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

