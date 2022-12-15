
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
//let resultsList = document.getElementById('results-container');
let imgContainer = document.getElementById('img-container');
let ctx = document.getElementById('chart');


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

let indexArray = [];
function renderImg() {
  while (indexArray.length < 6) {
    let randomNum = randomIndex();
    if (!indexArray.includes(randomNum)) {
      indexArray.push(randomNum);
    }
  }


  let imageOneIndex = indexArray.shift();
  let imageTwoIndex = indexArray.shift();
  let imageThreeIndex = indexArray.shift();

  console.log(imageOneIndex, imageThreeIndex, imageTwoIndex);

  // while (imageOneIndex === imageTwoIndex || imageTwoIndex === imageThreeIndex || imageOneIndex === imageThreeIndex) {
  //   imageTwoIndex = randomIndex();
  //   imageThreeIndex = randomIndex();

  imageOne.src = duckArray[imageOneIndex].image;
  imageTwo.src = duckArray[imageTwoIndex].image;
  imageThree.src = duckArray[imageThreeIndex].image;
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


//helper function ********

function renderChart() {
  let duckNames = [];
  let duckVotes = [];
  let duckViews = [];

  for (let i = 0; i < duckArray.length; i++) {
    duckNames.push(duckArray[i].name);
    duckVotes.push(duckArray[i].votes);
    duckViews.push(duckArray[i].views);
  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: duckNames,
      datasets: [{
        label: 'Votes',
        data: duckVotes,
        borderWidth: 3
      },
      {
        label: 'Views',
        data: duckViews,
        borderWidth: 3
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  new Chart(ctx, chartObj);
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
    imgContainer.removeEventListener('click', handleclick);
    let stringifiedDucks = JSON.stringify(duckArray);

    localStorage.setItem('myDucks',stringifiedDucks);
  }
}

function handleShowResults() {
  if (votinground === 0) {
    renderChart();


    // for (let i = 0; i < duckArray.length; i++) {
    //   let liElem = document.createElement('li');
    //   liElem.textContent = `${duckArray[i].name} had ${duckArray[i].votes} and was seen ${duckArray[i].views} times`;
    //   resultsList.appendChild(liElem);
    // }
    // resultsBtn.removeEventlistener('click', handleShowResults);
  }
}

// **** Executable Code *****

let recievedDucks = localStorage.getItem('myDucks');

let parsedDucks = JSON.parse(recievedDucks);


if(recievedDucks){
  duckArray = parsedDucks;
}else{
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
  let wineglassPic = new Duck('wine-glass');


  duckArray.push(bagPic, bananaPic, bathroomPic, bootsPic, breakfastPic, bubblegumPic, chairPic, cthulhuPic, dogduckPic, dragonPic, penPic, petsweepPic, scissorsPic, sharkPic, sweepPic, tauntaunPic, unicornPic, watercanPic, wineglassPic);

}


renderImg();

imgContainer.addEventListener('click', handleclick);
resultsBtn.addEventListener('click', handleShowResults);





