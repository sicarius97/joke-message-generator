// grab a reference for necessary HTML elements

// .joke-text
const jokeText = document.querySelector('.joke-text');
// .new-joke-btn 
const newJokeBtn = document.querySelector('.new-joke-btn');
// .tweet-btn (link)
const tweetBtn = document.querySelector('.tweet-btn');

// add 'click' eventListener to .new-joke-btn
newJokeBtn.addEventListener('click', getJoke);

// immediately call getJoke()
getJoke();

// getJoke() function definition
function getJoke(){
    //Make an Api request to https://icanhazdadjoke.com/
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(res){
        //returns stringified response to JS object
        return res.json();
    }).then(function(data){
        //replace inner text of .joke-text with data.joke
        //extract joke text
        const joke = data.joke;
        //replace the text
        jokeText.innerText = joke;
    }).catch(function(error){
        //if some error occurred
        jokeText.innerText = 'Oops! Some error happened :(';
        //log error to console
        console.log(error);
    });
}
    