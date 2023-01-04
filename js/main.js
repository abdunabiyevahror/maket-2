var elSelect =document.querySelector('.select')
var  elOption1 =document.querySelector('.option1')
var elBtn =document.querySelector('.btn1')
var elInp1 =document.querySelector('.inp1')
var elInp2 =document.querySelector('.inp2')
var elInp3 =document.querySelector('.inp3')
var elInp4 =document.querySelector('.inp4')
var elInp5 =document.querySelector('.inp5')
var elInp6 =document.querySelector('.inp6')
var elInp7 =document.querySelector('.inp7')
var elInp8 =document.querySelector('.inp8')
var elOp1 =document.querySelector('op-tit')
var elH4 =document.querySelector('#hamir')
var elH5 =document.querySelector('sec_h4')

var elBook =document.querySelector('#book')
elBook .addEventListener('change', function(){
    elH4.textContent =elBook.value
})
 
elBtn.addEventListener('click',function(){
    elH5.textContent=elBtn.value
})



let data = []

elInp1. addEventListener('click',function(){
     
    console.log( 'POMIDOR');
    elH5.textContent=elInp1.value
   
})

let data2 = []

elInp2. addEventListener('click',function(){
    let bosish2 ={
         btn1:elInp2.value
    }
    data2.push(bosish2)
    console.log( 'TUZLANGAN BODIRING');
})

let data3 = []

elInp3. addEventListener('click',function(){
    let bosish3 ={
         btn1:elInp3.value
    }
    data3.push(bosish3)
    console.log( 'KURKA GOSHTI');
})

let data4 = []

elInp4. addEventListener('click',function(){
    let bosish4 ={
         btn1:elInp4.value
    }
    data4.push(bosish4)
    console.log( 'QOZIQORIN');
})

let data5 = []

elInp5. addEventListener('click',function(){
    let bosish5 ={
         btn1:elInp5.value
    }
    data5.push(bosish5)
    console.log( 'ZAYTUN');
    
})

let data6 = []

elInp6. addEventListener('click',function(){
    let bosish6 ={
         btn1:elInp6.value
         
    }
    data6.push(bosish6)
    console.log( 'QAZI');
})
elInp7.addEventListener('click',function(){
    console.log(' ACHCHIQ');
    elH6.textContent.elInp7.value
})
elInp8.addEventListener(' keyup',function(){
    console.log('  PISHLOQ');
})


var elH6 =document.querySelector('.h6')










