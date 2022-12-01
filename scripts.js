function generateMeme() {
    fetch("https://meme-api.herokuapp.com/gimme/memes")
        .then(res => res.json())
        .then(data => {
            console.log(data);
        });
}