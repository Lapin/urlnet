// Collect DOM Elements

// 1. Setup Enviroment
    // 1a hide results
    // 1b clear text input 

// 2. Click Events
    // 2b grab the entered text
    // 2c validate URL if true go to 2e
    // 2d if not say something
    // 2e deliver input to backend (in this case direct to 3)

// 3. Prepare results
    // 3a grab URL from backend (this case grab from 2e)
    // 3b place shortned url to urlNet
    // 3c place inputVal to redirectSource
    // 3d hide landing
    // 3e show results

// 4. Listeners and Other Functions


// Collect DOM Elements

const landingDOM = document.getElementById('inputStuff');
const textInputDOM = document.getElementById('textInput');
const triggerDOM = document.getElementById('triggerButton');
const resultsDOM = document.getElementById('results')
const shortResultDOM = document.getElementById('urlNet')
const originUrl = document.getElementById('redirectSource')
const copyThing = document.getElementById('copyThing')

//mock back end datas
let verifiedUrDB
let shortenedUrlDB = 'http://urlnet.xyz/444444'

// 1. Setup Enviroment

// 1a hide results
 resultsDOM.style.display = 'none'

// 1b clear text input
textInputDOM.value = ''



// 2. Click Events

// 2b grab the entered text
function getURLInput() {
    inputVal = textInputDOM.value;
    return validURL(inputVal)
}

// 2c validate URL if true go to 2e
function validURL(inputVal) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!action(pattern.test(inputVal));
}

function action(i) {
    if (i === true) {
        // 2e deliver input to backend (in this case direct to 3)
        verifiedUrDB = textInputDOM.value;
        mockDataGrab();
    } else {
        document.getElementById('notLink').style.display = 'block'
        textInputDOM.style.borderColor = '#fa7e76'
    }
}

// 3. Prepare results
    // 3a grab URL from backend (this case grab from 2e)
function mockDataGrab() {
    shortResultDOM.innerHTML = shortenedUrlDB;
    displayResults();
}

function displayResults() {
    resultsDOM.style.display = 'block'
    landingDOM.style.display = 'none'
    originUrl.innerHTML = textInputDOM.value
}


// Other Functions

// Click to Copy
function copyToClipboard(elementId) {

    // Create an auxiliary hidden input
    var aux = document.createElement("input");
  
    // Get the text from the element passed into the input
    aux.setAttribute("value", shortResultDOM.innerHTML);
  
    // Append the aux input to the body
    document.body.appendChild(aux);
  
    // Highlight the content
    aux.select();
  
    // Execute the copy command
    document.execCommand("copy");
  
    // Remove the input from the body
    document.body.removeChild(aux);

    copyThing.innerHTML = `Copied!`
    copyThing.style.backgroundColor = '#f1f1f1'
    copyThing.style.opacity = '100%'
  
  }
  
  function log(){
      console.log('---')
  }


// Text Input Enter Key Listener 

function pressEnter(ele) {
    if(event.key === 'Enter') {
        triggerDOM.click() 
    }
}

