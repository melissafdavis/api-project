document.getElementById('picture-btn').addEventListener('click', getPicture);
document.getElementById('cat-btn').addEventListener('click', getCat);
document.getElementById('dog-btn').addEventListener('click', getDog);
document.getElementById('random-btn').addEventListener('click', getRandom);
let output;
let pod;
let cat;
let dog;
let random;


function getPicture(){
  console.log('getting pod')
  output = '';
  fetch('https://api.nasa.gov/planetary/apod?api_key=QkSnABWDbgQQX0i5NlLaaNpuxARzSeZY07O3JRDl')
    .then(res => res.json())
    .then(data => {
      pod = data;
      // console.log(pod);
      title = pod.title;
      url = pod.url;
      explanation = pod.explanation;
      output = `<p>${title}</p>
                <img src = ${url}>
                <p>${explanation}</p>`;
     
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}



// function getNumberFact(){
//   output = '';
// fetch("https://numbersapi.p.rapidapi.com/random/trivia?max=20&fragment=true&min=10&json=true", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
// 		"x-rapidapi-key": "7592441ce9msh00a3de0ddd24649p1a448ejsn1a301a4ddfc5"
// 	}
// })
// .then(response => response.json())
// .then(data => {
//   let fact = data; 
//   let number = fact.number; 
//   let text = fact.text;
//   output = `<p>${number}</p> <br> <p>${text}</p>`;
//   document.getElementById('output').innerHTML = output;
// })
// .catch(err => {
// 	console.log(err);
// });

// }

function getCat(){
  output = '';
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
      cats = data;
      cats.forEach(cat => {
        url = cat.url; 
        console.log(url)}
        )
      
      
      // url = pod.url;
     
      output = `
                 <img src = ${url}>
                `;
     
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getDog(){
  output = '';
  fetch('https://api.thedogapi.com/v1/images/search')
  .then(res => res.json())
  .then(data => {
    dogs = data;
    dogs.forEach(dog => {
      url = dog.url; 
      console.log(url)}
      )
    
    
    // url = pod.url;
   
    output = `
               <img src = ${url}>
              `;
   
    document.getElementById('output').innerHTML = output;
  })
  .catch(err => console.log(err));
}

function getRandom(){
  output = '';
  fetch('http://www.splashbase.co/api/v1/images/random')
    .then(res => res.json())
    .then(data => {
      random = data;
      console.log(random);
      
      url = random.url;
      
      output = `<img src = ${url}>`;
     
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


