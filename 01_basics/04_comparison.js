console.log(2 > 1);
console.log(2 >= 1);
console.log(2<1);
// datatypes are same there's no problem in comparison

console.log("2" < 1);// 1st type is string but it shows false JS converts "2" into number
console.log("2" > 1);// 1st type is string but it shows true JS converts "2" into number

console.log(null > 0);//false
console.log(null < 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
console.log(undefined > 0);//false
console.log(undefined < 0);//false
console.log(undefined == 0);//false
console.log(undefined >= 0);//false
temp1 = undefined
console.log(temp1); //undefined
console.log("32ab" > 0);//false
console.log("32ab" >= 0);//false
console.log("32ab" < 0);// false

console.log("2" === 2);//=== checks equality with respect to data type also