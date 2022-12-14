let memeData;
let subreddit;
let safe;
let memeImg = document.getElementById('meme-img');
let memeTitle = document.getElementById('memeTitle');
let memeAuthor = document.getElementById('memeAuthor');
let memeLink = document.getElementById('redditLink');


function search() {
    subreddit = document.getElementById('subreddit').value;
    if(safe){
        generateMeme(subreddit);
    }
    else{
        generatePost(subreddit);
    }

}

function suggest(val) {
    subreddit = val;
    generateMeme(val);
}

function safeMode(){
    if(safe){
        safe = false;
        document.getElementById('safeBtn').title = "Enable Safe Mode";
    }
    else{
        safe = true;
        document.getElementById('safeBtn').title = "Disable Safe Mode";
    }
}

function generateMeme(subreddit) {
    let subs = ['memes', 'dankmemes', 'funny', 'jokes', 'comedy', 'notfunny', 'comedyheaven', 'bonehurtingjuice', 'comedycemetery', 'comedynecrophilia', 'okbuddyretards', 'deepfriedmemes', 'nukedmemes', 'blackholedmemes', 'meme', 'memes_of_the_dank'];

    if(subs.includes(subreddit.toLowerCase())){
        fetch(`https://meme-api.com/gimme/${subreddit}`).then(res => res.json()).then(data => {
            console.log(data);
            memeData = data;
            document.getElementById('memeCont').classList.remove('d-none');
            memeImg.innerHTML = `<img src="${memeData.url}" alt="meme-image" width="100%">`;
            memeTitle.innerText = memeData.title;
            memeAuthor.innerText = memeData.author;
            memeLink.innerHTML = `<a href="${memeData.postLink}" target="_blank" class="memeLink">Vist this post on reddit <i class="fa-brands fa-reddit-alien"></i></a>`;
            if (memeData.nsfw) {
                document.getElementById('nsfwWarn').innerText = "NSFW WARNING!"
            } else {
                document.getElementById('nsfwWarn').innerText = "SFW"
            }
            if (memeData.spoiler) {
                document.getElementById('spoilerWarn').innerText = "SPOILER WARNING!"
            }
        });
    }
    else{
        alert('Please only type in comedy related subreddits');
    }
}

function generatePost(subreddit) {
    fetch(`https://meme-api.com/gimme/${subreddit}`).then(res => res.json()).then(data => {
        console.log(data);
        memeData = data;
        document.getElementById('memeCont').classList.remove('d-none');
        memeImg.innerHTML = `<img src="${memeData.url}" alt="meme-image" width="100%">`;
        memeTitle.innerText = memeData.title;
        memeAuthor.innerText = memeData.author;
        memeLink.innerHTML = `<a href="${memeData.postLink}" target="_blank" class="memeLink">Vist this post on reddit <i class="fa-brands fa-reddit-alien"></i></a>`;
        if (memeData.nsfw) {
            document.getElementById('nsfwWarn').innerText = "NSFW WARNING!"
        } else {
            document.getElementById('nsfwWarn').innerText = "SFW"
        }
        if (memeData.spoiler) {
            document.getElementById('spoilerWarn').innerText = "SPOILER WARNING!"
        }
    });
}