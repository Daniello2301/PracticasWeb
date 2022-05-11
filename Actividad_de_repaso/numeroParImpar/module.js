module.exports = {
    compare
}
function compare(num1){

    if(num1%2 == 0)
    {
        return`El nímero ${num1} es par`
    }
    else
    {
        return`El nímero ${num1} es Impar`
    }
}