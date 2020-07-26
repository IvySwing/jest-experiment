function sum(a, b) {
    if (isNaN(a) || isNaN(b)){
        throw new Error ('sum arguments must be numbers')
    }

    if(a + b > 100){
        throw new Error('sum must be less than or equal to 100')
    }

    return a + b;
}
module.exports = sum;