function reversePhoneNum (phone) {
    const splitedNumber = phone.split('-');
    const reversedNumber = splitedNumber.reverse();
    const newNumber = reversedNumber.join('-');
    return newNumber;
}

export {reversePhoneNum};