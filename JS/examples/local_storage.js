"use strict";


function getStorage(key) {
    var data = window.localStorage.getItem(key);

    /*
        if data is null (not found in storage) we will return an empty array as default value []

        This is a shortand for the following couple "if/else" :
        if(data == null){ return []; }
        else { return JSON.parse(data) ;}
     */
    return JSON.parse(data) || [];
}


function setStorage(key, data) {
    // complex data conversions to JSON format (it's like a STRING, so easy to store)
    data = JSON.stringify(data);

    // saving stringified datas
    window.localStorage.setItem(key, data);
}


/**************************
 USING EXAMPLE
 *************************/

var my_car = {
    brand: "bmw",
    purchase_date: new Date(),
    passenger: ["fred", 'luc', "bruno"]
};

// saving a complex object in local storage after he've been created
setStorage('mycar', my_car);

// getting back the object after he've been stored and displaying in console
console.log(getStorage('mycar'));