import URLmanager from './URLmanager.js'
import KEYS from './Keys.js'
import Messages from './Messages.js'


const BASE_FOOD_REQUEST_URL = 'https://api.edamam.com/api/food-database/parser?ingr='
const BASE_NUTRITION_REQUEST_URL = 'https://api.edamam.com/api/food-database/nutrients?'
const BASE_CREDENTIALS_SUFIX = `&app_id=${KEYS.APP_ID}&app_key=${KEYS.APP_KEY}`

const simpleFoodRequestUrl = foodLabel => {
    return BASE_FOOD_REQUEST_URL + URLmanager.formatFoodLabel(foodLabel) + BASE_CREDENTIALS_SUFIX
}

const nutritionRequestUrl = BASE_NUTRITION_REQUEST_URL + BASE_CREDENTIALS_SUFIX


async function handleSimpleRequest (foodLabel) {
    await fetch(URLmanager.simpleFoodRequestUrl(foodLabel))
        .then(function(response) {
                if (response.ok) {
                    response.json().then(function(data) {
                        if (data.parsed.length <= 0)
                            console.log(Messages.build([Messages.FOOD_INFO_SUFIX, Messages.NOT_FOUND]))
                        else {
                            console.log(data.parsed[0].food)
                            console.log(data.parsed[0].food.nutrients)
                            return data.parsed[0].food
                        }
                    })
                }
        }) 
}

async function handleSimpleRequest2(foodLabel){
    // GET request using fetch with async/await
    const response = await fetch(URLmanager.simpleFoodRequestUrl(foodLabel));
    const data = await response.json();
    return data.parsed[0].food
}

export default {
    simpleFoodRequestUrl,
    nutritionRequestUrl,
    handleSimpleRequest,
    handleSimpleRequest2
}

