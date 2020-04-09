import URLmanager from './URLmanager.js'
import KEYS from './Keys.js'

const BASE_FOOD_REQUEST_URL = 'https://api.edamam.com/api/food-database/parser?ingr='
const BASE_NUTRITION_REQUEST_URL = 'https://api.edamam.com/api/food-database/nutrients?'
const BASE_CREDENTIALS_SUFIX = `&app_id=${KEYS.APP_ID}&app_key=${KEYS.APP_KEY}`

const simpleFoodRequestUrl = foodLabel => {
    return BASE_FOOD_REQUEST_URL + URLmanager.formatFoodLabel(foodLabel) + BASE_CREDENTIALS_SUFIX
}

const nutritionRequestUrl = BASE_NUTRITION_REQUEST_URL + BASE_CREDENTIALS_SUFIX
export default {
    simpleFoodRequestUrl,
    nutritionRequestUrl
}
