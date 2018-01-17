
var Promise = require ('bluebird');
var fs = require("fs");

var usingPromise = function () {
    console.log ("Start Test Case");

    Promise.resolve ()

    .then (function(){
        console.log ("Test Case 1");
        return null;
    })
    
    .then (function(){
        console.log ("Test Case 2");
        return null;
    })
    .then (function (){
        console.log ("Test Case 3");
        throw new Error ("Failed TC 3");

    })
    .then (function(){
        console.log ("Test Case 4");
        return null;
    })

    .catch (function(error) {
        console.log ("Handle Error: ", error.toString());

    })

}

usingPromise ();

//bản chất của catch() trong Promise, là luồng Promise -> then -> then ->then ->then ->then ->... then ->then ->catch() chỉ hoàn thành thành công nếu không có BẤT CỨ lỗi nào trong quá trình chạy.
//được ăn cả, ngã về không.
//có thể hiểu nó giống việc thực thi một transaction vậy.