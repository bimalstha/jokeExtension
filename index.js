const fetchData = () => {
    console.log("hello world from ext");
    fetch('https://icanhazdadjoke.com/slack')
        .then(data => data.json())
        .then(jokeData => {
            const jokeText = jokeData.attachments[0].text
            console.log(jokeText);
            const jokeid = document.querySelector("#jokeId")
            console.log("jokeid");
            jokeid.innerHTML = jokeText
        })
}
fetchData();