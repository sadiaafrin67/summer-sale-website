function handleclick(target){
const slectedItem = document.getElementById('selected-item')    
const itemName = target.children[1].children[1].innerText
const li = document.createElement('li')
li.innerText = itemName
slectedItem.appendChild(li);



console.log(target.children[1].children[2].children[0].innerText)




    
    

}

