let cart=[
    {id:23,productName:"Telefon",quantity:1,unitPrice:2000},
    {id:34,productName:"tablet",quantity:2,unitPrice:3000},
    {id:45,productName:"telsiz",quantity:3,unitPrice:4000},
    {id:56,productName:"şarj istasyonu",quantity:4,unitPrice:5000},
]


console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : "
    +product.unitPrice* product.quantity+"</li>")
})
console.log("</ul>")

let total=cart.reduce((acc,product)=>acc+product.unitPrice* product.quantity,0)
console.log(total)

let quantityOver2  =  cart.filter(product=>product.quantity>2)

console.log(quantityOver2)


function addToCart(sepet){
    sepet.push({id:7,productName:"Ruhsat",quantity:3,unitPrice:20})
}

addToCart(cart)

console.log(cart)

let sayi=10

function sayiTopla(number){
    number += 1
}
sayiTopla(sayi)
console.log(sayi)