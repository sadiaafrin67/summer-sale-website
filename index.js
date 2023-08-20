// total card price
let totalPrice = 0;

// total discount
let discount = 0;

// final total
let finalTotal = 0;

// promo code
let promo = 'SELL200';

const totalElement = document.getElementById('total-price')


const slectedItem = document.getElementById('selected-item') 

const discountElement = document.getElementById('discount-total')

const finalElement = document.getElementById('final-total')

const btnPurchase = document.getElementById('btn-purchase')

const btnApply = document.getElementById('btn-apply')

const form = document.getElementById('coupon-form')

const closeBtn = document.getElementById('close-btn')

function handleclick(target){

const itemName = target.children[1].children[1].innerText
const li = document.createElement('li')
li.innerText = itemName
slectedItem.appendChild(li);


// price taken
const newItemPrice = parseFloat(target.children[1].children[2].children[0].innerText)
// total cards price
totalPrice = newItemPrice + totalPrice

if(totalPrice > 0){
   btnPurchase.disabled = false
}
// showing total ui
totalElement.innerText = totalPrice.toFixed(2)


if(totalPrice >= 200){
    discount = 0.2;
    btnApply.disabled = false
}
   
}

// add event listener
form.addEventListener('submit',function(e){
e.preventDefault() 
const inputCoupon = e.target.couponInput.value
if(promo === inputCoupon){
    const priceAfterDis = totalPrice * discount 

discountElement.innerText = priceAfterDis.toFixed(2)

finalElement.innerText = (totalPrice - priceAfterDis).toFixed(2)
}

else{
    alert('Invalid Input')
}
})

closeBtn.addEventListener('click',function(){
    location.reload()
})
