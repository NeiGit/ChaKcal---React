import URLmanager from './URLmanager.js'
import ResponseManager from './ResponseManager.js'
import Calculator from './Calculator.js'


async function fetchId(foodLabel){
    // GET request using fetch with async/await
    const response = await fetch(URLmanager.simpleFoodRequestUrl(foodLabel))
    const data = await response.json()
    console.log('3) fetchId fetched ', data.parsed[0])
    return data.parsed[0] !== undefined ? data.parsed[0].food.foodId : undefined
}

async function handleRequest(foodLabel, quantity) {
    // First we fetch the food to get the foodId parameter
    console.log('2) handleRequest calls fetchId with ', foodLabel)
    const promise = fetchId(foodLabel)
    promise.then(foodId => {
    console.log("4) handleRequest received: ", foodId)

            if (foodId === undefined)
                return undefined

            console.log("5) handleRequest calls handleDualEntryRequest with: ", foodId, ' ', quantity)
    
            const nutritionChart = handleDualEntryRequest(foodId, quantity)

            // Validation for NOT_FOUND results. Also add foodId attribute to nutritionChart (data)
            nutritionChart.then(nc => {
                console.log('7) handleRequest fetched', nc)
                if (ResponseManager.validateNutritionResponse(nc)) {
                    nc.food = {
                        label : foodLabel,
                        id : foodId
                    }
                    console.log('8.a) Handle request is returning ', nc)
                    return nc
                } else {
                    console.log("8.b) Handle request is returning undefined")
                    return undefined
                }
            })
    })
}

async function handleDualEntryRequest(foodId, quantity) {
    const promise = await fetch(URLmanager.nutritionRequestUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "ingredients": [
              {
                "quantity": Calculator.gramsToKilograms(quantity),
                "measureURI": URLmanager.kilogramsURL,
                "foodId": foodId
              }
            ]
          })
        })
    const data = await promise.json()
    console.log("6) Handle dual entry fetched ", data)    
    return data
}


export default {
    handleDualEntryRequest,
    fetchId,
    handleRequest
}

