// Import our data getters from the "database"
import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

// Initialize cityWalkerMap to store city IDs as keys and arrays of walker names as values
// Example: { 1 => ["DeShawn", "Sarah"], 2 => ["Micah"] }
const cityWalkerMap = new Map();

// Map each cityId to the list of walkers who service that city
for (const walker of walkers) {
    const cityId = walker.cityId  // each walker belongs to exactly one city

    // If this city hasn't been added to the map yet, create a new entry
    // Map.prototype.set(key, value) → adds or overwrites an entry
    // Here: key = cityId, value = an empty array (we'll fill it with walker names)
    // Map.prototype.set(key, value) stores a value in the map under the given key.
    // If the key already exists, it overwrites the value. Here we initialize each cityId
    // with an empty array so we can later push walker names into it.
    if (!cityWalkerMap.has(cityId)) {
        cityWalkerMap.set(cityId, [])
    }

    // Push the current walker's name into the array for this cityId
    // cityWalkerMap.get(cityId) gives back the array, then .push() adds a name
    cityWalkerMap.get(cityId).push(walker.name)
}

// Add event listener for clicks anywhere on the page
document.addEventListener(
    "click",
    (clickEvent) => {
        const clickedTarget = clickEvent.target;

        // Only respond if the clicked element represents a city
        if (clickedTarget.dataset.type === "city") {
            // data attributes come in as strings ("1", "2", etc.)
            // parseInt converts them into numbers so they match the numeric cityId in the map
            // dataset values come from HTML attributes and are always strings.
            // Example: clickedTarget.dataset.cityId might be "1"
            // We convert it into a number (1) so it matches the numeric cityId keys in cityWalkerMap.
            const cityId = parseInt(clickedTarget.dataset.cityId);

            // Look up walker names for this cityId (or empty array if none)
            const walkerNames = cityWalkerMap.get(cityId) || [];

            // Join the array of names into a single string for display
            window.alert(
                `The walker(s) servicing this city is/are: ${walkerNames.join(", ")}`
            );
        }
    }
)

// Render the list of cities as clickable <li> items
export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        // Store both the "type" and "cityId" in dataset attributes
        citiesHTML += `<li data-type="city" data-city-id="${city.id}">${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}