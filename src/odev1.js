

function primeNum(number){
for (let i = 2; i < number; i++) {
if (number % i == 0) {
return false
}
}

return true
}


function findPrime(...numbers)
{
for (let i = 0; i < numbers.length; i++) {
if (primeNum(numbers[i]))
{
console.log(numbers[i]+" sayıları asaldır.")
}
else
{
console.log(numbers[i]+" sayıları asal değildir.")
}

}
}
findPrime(15,2,55,63,58)


//Parametre olarak girilen iki sayının arkadaş sayı olup olmadığını gösteren kod
 function amicableNumber(A, B) {
     let pDivisorA = 0
     let pDivisorB = 0
    for (let i = 1; i < A; i++) {
        if (A % i === 0) {
            pDivisorA += i
         }
     }
   for (let j = 1; j < B; j++){       if (B % j === 0) {
            pDivisorB += j
}
    }

    if (pDivisorA === B && pDivisorB === A) {
               console.log(`${A} ve ${B} arkadaş sayılar`)
                   }
     else{
        console.log(`${A} and ${B} arkadaş sayı değillerdir`)
   }
 }
 amicableNumber(220,284)
  amicableNumber(12,23)


// 1000'e kadarki tüm mükemmel sayıları listeleyen kod


function primeNums()
{
let primeNumberList= []
for (let i = 2; i < 1000; i++) {
 let k=0
  for (let j = 2; j < i; j++) {
    if (i%j==0) {
      k++;
      break
    }
  }
if (k==0) {
  primeNumberList.push(i)
}

}
console.log("asal sayılar => "+ primeNumberList)


}
primeNums()


