// Q1 
let a = 'ary\"';

//console.log(a.length);


//Q2

const sentence =  'the quick brown fox jumps over the lazy  dog. ';

const word = "fox2";
console.log(sentence.includes(word));
console.log(`the word " ${word}" ${sentence.includes(word) ? 'is' : 'is  not' } in the sentence`);

//Q3


console.log(word.toUpperCase());
console.log(word.toLowerCase());


//Q4



const str2 = "Please give Rs 1000";
let amount =  Number.parseInt(str2.slice(15))  
//let amount = str2.slice(15);
console.log( amount);
 console.log(typeof amount);