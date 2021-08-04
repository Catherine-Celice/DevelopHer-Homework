

// The Vending Machine Code

let vendingTotal = 0;


let vending = document.getElementById("vending");
console.log(vending);
const total1 = document.getElementById("total1");

const lime = document.getElementById("lime");
console.log(lime.childNodes);
const peanuts = document.getElementById("peanuts");
const chocolate = document.getElementById("chocolate");
const gummies = document.getElementById("gummies");

// lime.hoverColor = rgb(151, 212, 151);


// #32cd32
// rgb(151, 212, 151)
// rgb(4, 146, 4)




lime.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "rgb(151, 212, 151)";
});

lime.addEventListener("mouseout",  (event) => {
    event.target.style.backgroundColor = "#32cd32";
});

lime.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = "rgb(4, 146, 4)";
    vendingTotal = vendingTotal + 2;
    total1.innerText = "$" + vendingTotal + ".00"
});

lime.addEventListener("mouseup",  (event) => {
    event.target.style.backgroundColor = "#32cd32";
});





peanuts.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "rgb(207, 156, 105)";
});

peanuts.addEventListener("mouseout",  (event) => {
    event.target.style.backgroundColor = "peru";
});

peanuts.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = "rgb(168, 102, 35)";
    vendingTotal = vendingTotal + 3;
    total1.innerText = "$" + vendingTotal + ".00"
});

peanuts.addEventListener("mouseup",  (event) => {
    event.target.style.backgroundColor = "peru";
});

// chocolate    sienna;
// #a0255d
// rgb(165, 105, 77)
// rgb(114, 58, 32)
chocolate.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "rgb(165, 105, 77)";
});

chocolate.addEventListener("mouseout",  (event) => {
    event.target.style.backgroundColor = "sienna";
});

chocolate.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = "rgb(114, 58, 32)";
    vendingTotal = vendingTotal + 4;
    total1.innerText = "$" + vendingTotal + ".00"
});

chocolate.addEventListener("mouseup",  (event) => {
    event.target.style.backgroundColor = "sienna";
});

//gummies   slateblue;
// #6a5acd
// rgb(145, 136, 204)
// rgb(86, 68, 204)

gummies.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "rgb(145, 136, 204)";
});

gummies.addEventListener("mouseout",  (event) => {
    event.target.style.backgroundColor = "slateblue";
});

gummies.addEventListener("mousedown", (event) => {
    event.target.style.backgroundColor = "rgb(86, 68, 204)";
    vendingTotal = vendingTotal + 6;
    total1.innerText = "$" + vendingTotal + ".00"
});

gummies.addEventListener("mouseup",  (event) => {
    event.target.style.backgroundColor = "slateblue";
});


// The Money Maker Code

let moneyTotal = 0;
const money = document.getElementById("makeMoney");


let coins = document.getElementById("coins");       // holder for now.  I used this variable in my individual coin creation functions, but ended up having
                                                    // two different makeMoney functions, one for part 2 and one for the extended challenge
                                                    // When i realized tht I'd forgotten the deleteCoin function, it was a little awkward to change
                                                    // how I handle coins, so I'll use coins1 and coins2 for the deleting.

let coins1 = document.getElementById("coins");
coins1.addEventListener("click", deleteCoin);
money.addEventListener("click", makeMoney);


function createPenny(){

    const a = document.createElement('div');
    const b = document.createElement('div');

    a.classList.add('penny');
    b.classList.add('one');
    coins.appendChild(a);
    a.appendChild(b);
    b.innerHTML ='1&' + 'cent' + ';'
    if(coins.id === 'coins2') {
        moneyTotal = moneyTotal + 1;
    }
    
}

function createNickel() {
    const a = document.createElement('div');
    const b = document.createElement('div');

    a.classList.add('nickel');
    b.classList.add('five');
    coins.appendChild(a);
    a.appendChild(b);
    b.innerHTML ='5&' + 'cent' + ';'
    if(coins.id === 'coins2') {
        moneyTotal = moneyTotal + 5;
    }
    
}

function createDime() {
    const a = document.createElement('div');
    const b = document.createElement('div');

    a.classList.add('dime');
    b.classList.add('ten');
    coins.appendChild(a);
    a.appendChild(b);
    // b.innerText = '1/[&#162]/';
    b.innerHTML ='10&' + 'cent' + ';'
    if(coins.id === 'coins2') {
        moneyTotal = moneyTotal + 10;
    }
    
}



function createQuarter() {
    const a = document.createElement('div');
    const b = document.createElement('div');

    a.classList.add('quarter');
    b.classList.add('twentyfive');
    coins.appendChild(a);
    a.appendChild(b);
    b.innerHTML ='25&' + 'cent' + ';'
    if(coins.id === 'coins2') {
        moneyTotal = moneyTotal + 25;
    }
    
}

function createHalf() {
    const a = document.createElement('div');
    const b = document.createElement('div');

    a.classList.add('halfdollar');
    b.classList.add('fifty');
    coins.appendChild(a);
    a.appendChild(b);
    b.innerHTML ='50&' + 'cent' + ';'
    if(coins.id === 'coins2') {
        moneyTotal = moneyTotal + 50;
    }
    
}

function createDollar() {
    const a = document.createElement('div');
    const b = document.createElement('div');

    a.classList.add('silverdollar');
    b.classList.add('dollar');
    coins.appendChild(a);
    a.appendChild(b);
    b.innerText = '$1';
    if(coins.id === 'coins2') {
        moneyTotal = moneyTotal + 100;
    }
    
}

function makeMoney() {
    coins = document.getElementById("coins");
    let numCoins = parseInt(document.getElementById("numCoins").value); 
    let coinType = document.getElementById("coinType").value; 
    console.log(numCoins);
    console.log(coinType);

    if(numCoins > 0) {
        

            switch(coinType) {

                case "Penny":
                    for(let i = 1; i <= numCoins; i++){
                        createPenny();
                    }
                    break;

                case "Nickel":
                    for(let i = 1; i <= numCoins; i++){
                        createNickel();
                    }
                    break;

                case "Dime":
                    for(let i = 1; i <= numCoins; i++){
                        createDime();
                    }
                    break;

                case "Quarter":
                    for(let i = 1; i <= numCoins; i++){
                        createQuarter();
                    }
                    break;

                case "Half-Dollar":
                    for(let i = 1; i <= numCoins; i++){
                        createHalf();
                    }
                    break;

                case "Silver Dollar":
                    for(let i = 1; i <= numCoins; i++){
                        createDollar();
                    }
                    break;

            }
        
    }
    

}

function deleteCoin(coinSpace) {

   
    // identify the coin clicked on
    let coinChosen = coinSpace.target;
    let coinDenomination;
    console.log(coinChosen.innerText[0]);
    if(coinChosen.innerText[0] === "$") {
        coinDenomination = 100;
    } else if(coinChosen.innerText.length === 2) {
        
        coinDenomination = parseInt(coinChosen.innerText[0]);
        
    } else if (coinChosen.innerText.length === 3) {
        coinDenomination = parseInt(coinChosen.innerText.substring(0,2));
    }


    if(coinSpace.target.parentNode.id == 'coins2') {
  
        moneyTotal = moneyTotal - coinDenomination;
        updateTotal();
    }

    coinChosen.parentElement.removeChild(coinChosen);

}



// The lightbulb code

const colorStatus = ["whitesmoke", "yellow"];
const lightbulb = document.querySelectorAll(".lightsUp");

console.log(lightbulb);
let lightOn = false;
console.log (lightOn);
const onButton = document.getElementById("on");
const offButton = document.getElementById("off");
const toggleSwitch = document.getElementById("toggle");
const endButton = document.getElementById("end");

// var elList = document.querySelectorAll(.fa.fa-car);
// elList.forEach(el => el.style.display = "none");

onButton.addEventListener("click", (event) => {
    lightOn = true;
    lightbulb.forEach(l => l.style.backgroundColor = colorStatus[1]);
    
});

offButton.addEventListener("click", (event) => {
    lightOn = false;
    lightbulb.forEach(l => l.style.backgroundColor = colorStatus[0]);
});

// If I click this multiple times in a row, it doesn't work the first time, but it works all the other times.
toggleSwitch.addEventListener("click", (event) => {

    if(lightOn) {
        lightbulb.forEach(l => l.style.backgroundColor = colorStatus[0]);
    } else {
        lightbulb.forEach(l => l.style.backgroundColor = colorStatus[1]);
    }
    lightOn = !lightOn;
    
});

endButton.addEventListener("click", (event) => {
    const removeThis = document.getElementById("lightbulb");
    removeThis.parentElement.removeChild(removeThis);
});



// The Extended Challenge code (that wasn't already included in part 2 code)

const money2 = document.getElementById("makeMoney2");


const total2 = document.getElementById("total2");
let coins2 = document.getElementById("coins2");
coins2.addEventListener("click", deleteCoin);


const pennyRadio = document.getElementById("pennyRadio");
const nickelRadio = document.getElementById("nickelRadio");
const dimeRadio = document.getElementById("dimeRadio");
const quarterRadio = document.getElementById("quarterRadio");
const halfRadio = document.getElementById("halfRadio");
const dollarRadio = document.getElementById("dollarRadio");


function whoChecked(fieldName) {
   for(let x=0; x<fieldName.length; x++) {
     if(fieldName[x].checked) {
        return fieldname[x].value
     }
    }
}

function makeMoney2() {
    coins = document.getElementById("coins2");
    let coinType;
    let numCoins2 = parseInt(document.getElementById("numCoins2").value); 
    const coinArray = document.querySelectorAll(".pickCoin");
    for(let x = 0; x < coinArray.length; x++) {
        if(coinArray[x].checked){
            coinType = coinArray[x].value;
        }
    }
    console.log("coinArray");
    console.log(coinArray[3].value);
    console.log("checked?")
    console.log(coinArray[3].checked)

    

    console.log(coinType);

    if(numCoins2 > 0) {
        

            switch(coinType) {

                case "Penny":
                    for(let i = 1; i <= numCoins2; i++){
                        createPenny();
                    }
                    break;

                case "Nickel":
                    for(let i = 1; i <= numCoins2; i++){
                        createNickel();
                    }
                    break;

                case "Dime":
                    for(let i = 1; i <= numCoins2; i++){
                        createDime();
                    }
                    break;

                case "Quarter":
                    for(let i = 1; i <= numCoins2; i++){
                        createQuarter();
                    }

                    break;

                case "Half-Dollar":
                    for(let i = 1; i <= numCoins2; i++){
                        createHalf();
                    }
                    break;

                case "Silver Dollar":
                    for(let i = 1; i <= numCoins2; i++){
                        createDollar();
                    }
                    break;

            }
        
    }
    updateTotal();
    

}
// b.innerHTML ='25&' + 'cent' + ';'
// const formatter = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//     minimumFractionDigits: 2
//   })
  
//   https://flaviocopes.com/how-to-format-number-as-currency-javascript/

const formatDollars = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})

function updateTotal() {
    if(moneyTotal < 100) {
        total2.innerHTML = moneyTotal + '&' + 'cent' + ';';
    }
    if(moneyTotal >= 100) {
        total2.innerHTML = formatDollars.format(moneyTotal/100);
    }
     
}


pennyRadio.addEventListener("click", (event) => {coinType ="Penny";});
nickelRadio.addEventListener("click", (event) => {coinType ="Nickel";});
dimeRadio.addEventListener("click", (event) => {coinType ="Dime";});
quarterRadio.addEventListener("checked", (event) => {coinType ="Quarter";});
halfRadio.addEventListener("click", (event) => {coinType ="Half-Dollar";});
dollarRadio.addEventListener("click", (event) => {coinType ="Dollar";});


money2.addEventListener("click", makeMoney2);


