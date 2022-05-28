let valueInEnglish = document.querySelector('.english')
let valueInVN = document.querySelector('.vn')
let table = document.querySelector('.tablecontent')
let addBtn = document.querySelector('.add')
let clearBtn = document.querySelector('.clear')


valueEnglish = ""
valueInEnglish.addEventListener('keyup', function() {
    valueEnglish = valueInEnglish.value;
    console.log(valueEnglish)
})

valueVN = ""
valueInVN.addEventListener('keyup', function() {
    valueVN = valueInVN.value;
    console.log(valueVN)
})
addBtn.addEventListener('click', function() {
    if(valueEnglish && valueVN) {
        li = document.createElement('li')
        li.appendChild(document.createTextNode(`${valueEnglish} có nghĩa là ${valueVN}`))
        table.appendChild(li)
        valueEnglish = ""
        valueVN = ""
    }
})
clearBtn.addEventListener('click', function() {
    table.innerHTML = "";
})

