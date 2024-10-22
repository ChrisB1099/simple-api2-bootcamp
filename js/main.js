// need a button so that when clicked, a random image with its title will pop up
// need to connnect the button to the DOM (event listener)
// need to get random image from API and the title asssciated with image 
// need to display the image to the DOM
// need to display the title to the DOM
  
document.querySelector('button').addEventListener('click', getRandomPic) 

function getRandomPic(){

fetch("https://geek-jokes.sameerkumar.website/api?format=json")
    .then(res => res.json())
    .then(data => {                         // data is pulled here, so anything you want to grab has to be after this line
        console.log(data)      //data is the parameter for the nested function, so if you want use data we have to use it inside of the function that has the data parameter 
        const randomIndex =data.joke;  // you needed .joke becuase you pulled this from the object

        document.querySelector('h2').innerText = randomIndex            // this allowed for you to display the jokes into the DOM
      
    })
    .catch(err =>{                      
        console.log(`error ${err}`) 
     })
     

    }


//   "https://api.disneyapi.dev/character"


// /Math.floor(Math.random() * data.imageUrl.length);