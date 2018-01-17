var Promise = require ("bluebird");

var usingTimeout = function () {
    console.log ("Test Case timeout");

    Promise.resolve ()

    .then (function (){
        return new Promise (function (onResolve){
            setTimeout(function (){
                console.log ("Test Case 1");
                onResolve ();
            }, 2000);
        })
    })
    .then (function (){
        return new Promise (function (onResolve){
            setTimeout(function (){
                console.log ("Test Case 2");
                onResolve ();
            }, 2000);
        })
    })
    .then (function (){
        return new Promise (function (onResolve){
            throw new Error ("Error TC 3");
            setTimeout(function (){
                console.log ("Test Case 3");
                onResolve ();
            }, 2000);
            
        })
        
    })
    .then (function (){
        return new Promise (function (onResolve){
            setTimeout(function (){
                console.log ("Test Case 4");
                onResolve ();
            }, 2000);
        })
    })

    .catch (function (error){
        console.log ("Error :", error.toString ());

    })
}

usingTimeout ();