const SPACE = '%20'
// g stands for Globally, it will affect every space in given string
const REG_EXP_BASIC_SPACE = / /g

function formatFoodLabel(foodLabel) {
    return foodLabel.replace(REG_EXP_BASIC_SPACE, SPACE)
}

export default {
    formatFoodLabel
}
