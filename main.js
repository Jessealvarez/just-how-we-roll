/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}



const resetnums = function(){

}

/*******************
 * YOUR CODE BELOW *
 *******************/
let dsix= document.querySelector('#d6-button');
let doublesix= document.querySelector('#double-d6-buttons');
let dtwelve= document.querySelector("#d12-button");
let dtwenty= document.querySelector("#d20-button");
let resetbutton= document.querySelector("#reset-button");
let outcome= 0;
let outcome2= 0;

let dsixpic = document.querySelector('#d6-roll');
let d12pic = document.querySelector('#d12-roll');
let d20pic = document.querySelector('#d20-roll');
let dsix1 = document.querySelector('#double-d6-roll-1');
let dsix2 = document.querySelector('#double-d6-roll-2');

let dsixMean = document.querySelector('#d6-rolls-mean');
let dsixMedian = document.querySelector('#d6-rolls-median');
let dsixMode = document.querySelector('#d6-rolls-mode');

let doublesixMean = document.querySelector('#double-d6-rolls-mean');
let doublesixMedian = document.querySelector('#double-d6-rolls-median');
let doublesixMode = document.querySelector('#double-d6-rolls-mode');

let d12Mean = document.querySelector('#d12-rolls-mean');
let d12Median = document.querySelector('#d12-rolls-median');
let d12Mode = document.querySelector('#d12-rolls-mode');

let d20Mean = document.querySelector('#d20-rolls-mean');
let d20Median = document.querySelector('#d20-rolls-median');
let d20Mode = document.querySelector('#d20-rolls-mode');


//start the dice off with pictures at beginning
dsixpic.src = "./images/start/d6.png";
  dsix1.src = "./images/start/d6.png";
  dsix2.src = "./images/start/d6.png";
  d12pic.src = "./images/start/d12.jpeg";
  d20pic.src = "./images/start/d20.jpg";
/*******************
 * EVENT LISTENERS *
 *******************/
dsix.addEventListener("click", function(){
   outcome = getRandomNumber(6);
   sixes.push(outcome);
    if(outcome === 1){
        dsixpic.src = "./images/d6/1.png";
    }
    if(outcome === 2){
      dsixpic.src = "./images/d6/2.png";
    }
    if(outcome === 3){
      dsixpic.src = "./images/d6/3.png";
    }
    if(outcome === 4){
      dsixpic.src = "./images/d6/4.png";
    }
    if(outcome === 5){
      dsixpic.src = "./images/d6/5.png";
    }
    if(outcome === 6){
      dsixpic.src = "./images/d6/6.png";
    }
   
  dsixMean.innerText = getMean(sixes);
  dsixMedian.innerText = getMedian(sixes);
  dsixMode.innerText = getMode(sixes);
})
doublesix.addEventListener("click", function(){
  outcome = getRandomNumber(6);
  doubleSixes.push(outcome);
  if(outcome === 1){
    dsix1.src = "./images/d6/1.png";
}
  if(outcome === 2){
  dsix1.src = "./images/d6/2.png";
}
  if(outcome === 3){
  dsix1.src = "./images/d6/3.png";
}
  if(outcome === 4){
  dsix1.src = "./images/d6/4.png";
}
  if(outcome === 5){
  dsix1.src = "./images/d6/5.png";
}
  if(outcome === 6){
  dsix1.src = "./images/d6/6.png";
}
  outcome2 = getRandomNumber(6);
  doubleSixes.push(outcome2);
  if(outcome2 === 1){
    dsix2.src = "./images/d6/1.png";
}
  if(outcome2 === 2){
  dsix2.src = "./images/d6/2.png";
}
  if(outcome2 === 3){
  dsix2.src = "./images/d6/3.png";
}
  if(outcome2 === 4){
  dsix2.src = "./images/d6/4.png";
}
  if(outcome2 === 5){
  dsix2.src = "./images/d6/5.png";
}
  if(outcome2 === 6){
  dsix2.src = "./images/d6/6.png";
}
doublesixMean.innerText = getMean(doubleSixes);
doublesixMedian.innerText = getMedian(doubleSixes);
doublesixMode.innerText = getMode(doubleSixes);
})

dtwelve.addEventListener("click", function(){
  outcome = getRandomNumber(12);
  twelves.push(outcome);
    if(outcome === 1){
      d12pic.src = "./images/numbers/1.png";
    }
    if(outcome === 2){
      d12pic.src = "./images/numbers/2.png";
    }
    if(outcome === 3){
      d12pic.src = "./images/numbers/3.png";
    }
    if(outcome === 4){
      d12pic.src = "./images/numbers/4.png";
    }
    if(outcome === 5){
      d12pic.src = "./images/numbers/5.png";
    }
    if(outcome === 6){
      d12pic.src = "./images/numbers/6.png";
    }
    if(outcome === 7){
      d12pic.src = "./images/numbers/7.png";
    }
    if(outcome === 8){
      d12pic.src = "./images/numbers/8.png";
    }
    if(outcome === 9){
      d12pic.src = "./images/numbers/9.png";
    }
    if(outcome === 10){
      d12pic.src = "./images/numbers/10.png";
    }
    if(outcome === 11){
      d12pic.src = "./images/numbers/11.png";
    }
    if(outcome === 12){
      d12pic.src = "./images/numbers/12.png";
    }
    d12Mean.innerText = getMean(twelves);
    d12Median.innerText = getMedian(twelves);
    d12Mode.innerText = getMode(twelves);
})
dtwenty.addEventListener("click", function(){
  outcome = getRandomNumber(20);
  twenties.push(outcome);
    if(outcome === 1){
      d20pic.src = "./images/numbers/1.png";
    }
    if(outcome === 2){
      d20pic.src = "./images/numbers/2.png";
    }
    if(outcome === 3){
      d20pic.src = "./images/numbers/3.png";
    }
    if(outcome === 4){
      d20pic.src = "./images/numbers/4.png";
    }
    if(outcome === 5){
      d20pic.src = "./images/numbers/5.png";
    }
    if(outcome === 6){
      d20pic.src = "./images/numbers/6.png";
    }
    if(outcome === 7){
      d20pic.src = "./images/numbers/7.png";
    }
    if(outcome === 8){
      d20pic.src = "./images/numbers/8.png";
    }
    if(outcome === 9){
      d20pic.src = "./images/numbers/9.png";
    }
    if(outcome === 10){
      d20pic.src = "./images/numbers/10.png";
    }
    if(outcome === 11){
      d20pic.src = "./images/numbers/11.png";
    }
    if(outcome === 12){
      d20pic.src = "./images/numbers/12.png";
    }
    if(outcome === 13){
      d20pic.src = "./images/numbers/13.png";
    }
    if(outcome === 14){
      d20pic.src = "./images/numbers/14.png";
    }
    if(outcome === 15){
      d20pic.src = "./images/numbers/15.png";
    }
    if(outcome === 16){
      d20pic.src = "./images/numbers/16.png";
    }
    if(outcome === 17){
      d20pic.src = "./images/numbers/17.png";
    }
    if(outcome === 18){
      d20pic.src = "./images/numbers/18.png";
    }
    if(outcome === 19){
      d20pic.src = "./images/numbers/19.png";
    }
    if(outcome === 20){
      d20pic.src = "./images/numbers/20.png";
    }
  
  d20Mean.innerText = getMean(twenties);
  d20Median.innerText = getMedian(twenties);
  d20Mode.innerText = getMode(twenties);
})
resetbutton.addEventListener("click", function(){
  resetit();
  console.log(sixes, doubleSixes, twelves, twenties);
})



/******************
 * RESET FUNCTION *
 ******************/
 const resetit = function(){
  sixes.length = 0;
  doubleSixes.length = 0;
  twelves.length = 0;
  twenties.length = 0;
  dsixpic.src = "./images/start/d6.png";
  dsix1.src = "./images/start/d6.png";
  dsix2.src = "./images/start/d6.png";
  d12pic.src = "./images/start/d12.jpeg";
  d20pic.src = "./images/start/d20.jpg";
  dsixMean.innerText = '';
  dsixMode.innerText = '';
  dsixMedian.innerText = '';
  doublesixMean.innerText = '';
  doublesixMedian.innerText = '';
  doublesixMode.innerText = '';
  d12Mean.innerText = '';
  d12Mode.innerText = '';
  d12Median.innerText = '';
  d20Mean.innerText = '';
  d20Mode.innerText = '';
  d20Median.innerText = '';
}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
function getMean(arrays){
  let sum = 0;

  for(const array of arrays){
    sum += array;
    
  }
  return (sum/arrays.length).toFixed(2);
  console.log("testing mean");
}

function getMedian(array){
  if(array.length ===0){
    return 0;
  }
  let sorted = sortByNumber(array)
  if(sorted.length % 2 === 0){
    let middleHigh = sorted.length/2;
    let middleLow = (sorted.length/2) - 1;
    let trueMiddle = (sorted[middleHigh] + sorted[middleLow]) /2;
  }else {
      let middleIndex = Math.floor(sorted.length/2);
      return sorted[middleIndex];
  }

}

function getMode(array){
  let countObject = {};

  for(let number of array){
    if(countObject[number] >=1){
      countObject[number]++;
    }else{
      countObject[number] = 1;
    }
  }
  let highestUniqueNumber = 0;
  let highestCount = 0;
  let keys = Object.keys(countObject);

  for(let number of keys){
    let value = countObject[number];
    if(value > highestCount){
      highestCount = value;
      highestUniqueNumber = number;
    }
  }
  return highestUniqueNumber;
}
//need to put the math part into each event listener