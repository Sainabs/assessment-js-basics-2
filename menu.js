///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza= {
    name: "mac & cheeze",
    price: 4.99,
    category: "entree",
    popularity: 5,
    rating: 3,
    tags: ["glutenFree", "kidsMenu", "lactoseFree"]
};

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(pizza.popularity) 

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(pizza.tags[1]) 

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
pizza.price= 6.99,
console.log(pizza.price) 

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
pizza.category= "appetizer",
console.log(pizza.category) 

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE

const foodArr= [{"name": "mediterranean salad","price": 8.99,"category": "starter meal","popularity": 8,"rating": 5,"tags": ["healthy", "diet friendly", "gluten free", "nutfree"]},
{"name": "shrimp pasta","price": 12.00,"category": "whole meal","popularity": 7,"rating": 4,"tags": ["starchy", "not-dieter", "glutenfree","not for shrimp allergic"]},
{"name": "soup","price": 5.99,"category": "taster meal","popularity": 6,"rating": 3,"tags": ["vegetarian", "dietting-friendly", "fat-less"]},
{"name": "salmon rice","price": 20.00,"category": "full meal","popularity": 9,"rating": 2,"tags": ["semi-healthy", "for dieter","seafood", "less gluten"]},
{"name": "bread","price": 4.00,"category": "beginner","popularity": 2,"rating": 1,"tags": ["vegan", "high carbs", "gluten-included", "low fat"]}];

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/
//CODE HERE
const filteredFood = foodArr.filter(obj=>obj.tags.includes('healthy'))
console.log(filteredFood)

// const filteredFood = foodArr.filter(obj=>obj.popularity>=7)

// const filteredFood = foodArr.filter(function(obj){
//      return obj.popularity>=7
// });
// console.log(filteredFood)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

function filterByProperty(property, number,type){
    let filteredFood
    if(property==="rating"){
        if(type ===("above"))
            filteredFood = foodArr.filter(obj=>obj.rating > number )
        if(type ===("below"))
            filteredFood = foodArr.filter(obj=>obj.rating < number )
    }else if(property==="popularity"){
        if(type ===("above"))
            filteredFood = foodArr.filter(obj=>obj.popularity > number )
        if(type ===("below"))
            filteredFood = foodArr.filter(obj=>obj.popularity < number )
    }else{
        if(type ===("above"))
            filteredFood = foodArr.filter(obj=>obj.price > number )
        if(type ===("below"))
            filteredFood = foodArr.filter(obj=>obj.price < number )
    }

    // const filteredFood = foodArr.filter(obj=>obj.property >= number )
    
    return filteredFood
}

//console.log(filterByProperty("popularity", 3,"above"))


/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log(filterByProperty("popularity", 3,"above"))
console.log(filterByProperty("popularity", 3,"below"))
console.log(filterByProperty("rating", 3,"above"))
console.log(filterByProperty("rating", 3,"below"))
console.log(filterByProperty("price", 3,"above"))