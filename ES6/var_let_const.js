// let and const are block scoped.. means they can be  accessed only within block

// function jscript(as){
//     if(as){
//         let fname ="ashish";
//         const sname ="verma";
//         console.log("my name is:" + fname + " "  + sname);
//     }
    
// }
// jscript(1);


// var is function scoped .. means can be accessed within function..
function jscript(as){
    if(as){
        var fname ="ashish";
        var sname ="verma";
        
    }
    console.log("my name is:" + fname + " "  + sname);
    
}
jscript(1);

