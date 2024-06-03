let marks = {
    aryan : 90,
    meet : 50,
    smit : 30,
    akshy : 10,
}

for (let i=0;i<Object.keys(marks).length; i++){
    //console.log( "the marks of "+ Object.keys(marks)[i] +" are " + marks[Object.keys(marks)[i]] );
}

//Q2

for (let key in marks ){
//console.log("The marks of " + key+ " are " + marks[key] );
}


//Q3

//let cn = 97;
//let i 
//while ( i != cn) {
//     i = prompt('enter a number'); 
//     console.log("try again");
//}
//console.log('your have entered a correted number');
//


//Q4

const mean = ( a, b, c, d) => {
    return (a + b + c + d) / 4
}

 console.log(mean(5,6,7,8));