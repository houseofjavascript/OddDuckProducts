
'use strict';
// ** Globals******

console.log('hello world');

let duckArray = [];

let votinground = 25;

//*** Dom Windows *****

let imageOne = document.getElementById('img-one');
let imageTwo = document.getElementById('img-two');
let imageThree = document.getElementById('img-three');
let resultsBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-container');
let imgContainer = document.getElementById('img-container');


// *****Constuctors****

function Duck(name, imgExtension = 'jpg') {
  this.name = name;
  this.image = `img/${name}.${imgExtension}`;
  this.votes = 0;
  this.views = 0;
}


// ***** Helpers ****

function randomIndex() {
  return Math.floor(Math.random() * duckArray.length);
}


function renderImg() {
  let imageOneIndex = randomIndex();
  let imageTwoIndex = randomIndex();
  let imageThreeIndex = randomIndex();

  while (imageOneIndex === imageTwoIndex || imageTwoIndex === imageThreeIndex || imageOneIndex === imageThreeIndex) {
    imageTwoIndex = randomIndex();
  }

  imageOne.src = duckArray[imageOneIndex].img;
  imageTwo.src = duckArray[imageTwoIndex].img;
  imageThree.src = duckArray[imageThreeIndex].img;
  imageOne.title = duckArray[imageOneIndex].name;
  imageTwo.title = duckArray[imageTwoIndex].name;
  imageThree.title = duckArray[imageThreeIndex].name;
  imageOne.alt = `this is an image of ${duckArray[imageOneIndex].name}`;
  imageTwo.alt = `this is an image of ${duckArray[imageTwoIndex].name}`;
  imageThree.alt = `this is an image of ${duckArray[imageThreeIndex].name}`;

  duckArray[imageOneIndex].views++;
  duckArray[imageTwoIndex].views++;
  duckArray[imageThreeIndex].views++;
}


//*** event listener

function handleclick(event) {
  let imgClicked = event.target.title;
  for (let i = 0; i < duckArray.length; i++) {
    if (imgClicked === duckArray[i].name) {
      duckArray[i].votes++;
    }
  }
  votinground--;
  renderImg();
  if (votinground === 0) {
    imgContainer.removeEventlister('click', handleclick);
  }
}

function handleShowResults() {
  if (votinground === 0) {
    for (let i = 0; i < duckArray.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${duckArray[i].name} had ${duckArray[i].votes} and was seen ${duckArray[i].views} times`;
      resultsList.appendChild(liElem);
    }
    resultsBtn.removeEventlister('click', handleShowResults);
  }
}

// **** Executable Code *****

let bagPic = new Duck('bag');
let bananaPic = new Duck('banana');
let bathroomPic = new Duck('bathroom');
let bootsPic = new Duck('boots');
let breakfastPic = new Duck('breakfast');
let bubblegumPic = new Duck('bubblegum');
let chairPic = new Duck('chair');
let cthulhuPic = new Duck('cthulhu');
let dogduckPic = new Duck('dog-duck');
let dragonPic = new Duck('dragon');
let penPic = new Duck('pen');
let petsweepPic = new Duck('pet-sweep');
let scissorsPic = new Duck('scissors');
let sharkPic = new Duck('shark');
let sweepPic = new Duck('sweep', 'png');
let tauntaunPic = new Duck('tauntaun');
let unicornPic = new Duck('unicorn');
let watercanPic = new Duck('water-can');
let wineglassPic = new Duck('wineglass');


duckArray.push(bagPic, bananaPic, bathroomPic, bootsPic, breakfastPic, bubblegumPic, chairPic, cthulhuPic, dogduckPic, dragonPic, penPic, petsweepPic, scissorsPic, sharkPic, sweepPic, tauntaunPic, unicornPic, watercanPic, wineglassPic);


renderImg();

imgContainer.addEventLister('click', handleclick);
resultsBtn.addEventListener('click', handleShowResults);

console.log(bagPic);



