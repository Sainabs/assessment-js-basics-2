///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const totalPrice = cart.reduce((ac, cur) => ac + cur.price,0)
console.log(totalPrice)

////////on this//////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
// const calcFinalPrice=cart.map(function
//     'cartTotal','couponValue','tax')) {
//     return elem.cart + (elem.car * elem.tax)
// })
const calcFinalPrice=function(cartTotal,couponValue,tax){
    return (((cartTotal * (tax))+ cartTotal)-couponValue)
}

console.log(calcFinalPrice(26.97, 0, .06))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
1.name: "string", first will be a name to identify the customer from other customers, 
and it will be a string to represent sequence of charater since this string of characters will not change.

2.address:"string", second will be a address to locate the customer, and it will be a string to identify sequence of characters
 and/ or numbers at the same time so we have to use string to incapsulate it.

3.phone number:number,third will be a number to contact the customer, 
and it will be a number, a primitive data type that cannot be altered, this customer's phone number stays the same unless they change it and provide another phone number 

4.payment information:number, fourth will be a number as a method of payment for the customer to be able to pay, 
and it will be a number, a primitive data type that cannot be altered,this customer's payment information stays the same unless they change it and provide another payment information. 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerObject = [
    {
        name: 'Abdi', 
        address: '2345 American Blvd',
        phoneNumber: 6126126126,
        paymentInformation: 645263723234567,
    }, 
]

