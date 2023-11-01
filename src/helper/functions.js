function reversePhoneNum (phone) {
    const splitedNumber = phone.split('-');
    const reversedNumber = splitedNumber.reverse();
    const newNumber = reversedNumber.join('-');
    return newNumber;
};

function shortenIngredient(ingredient) {
    const toStr = ingredient.toString();
    if(toStr.length > 20) {
        return toStr.substring(0,40) + '...';
    }
    return toStr
};

export {reversePhoneNum, shortenIngredient};