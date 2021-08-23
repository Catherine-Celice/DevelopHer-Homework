

const space = document.querySelector("section");
const button = document.querySelector("button");
button.addEventListener("click", changeSubreddit);

let postNum = 0;

let APIurl = 'https://www.reddit.com/r/aww/.json';
let startUrl = 'https://www.reddit.com/r/';
let endUrl = '/.json';

function changeSubreddit() {
    const sub = document.querySelector("input");
    if (sub != ""){
        APIurl = startUrl + sub + endUrl;
    }
    return APIurl;

}


fetch(APIurl, {
    'Access-Control-Allow-Origin': '*',
})
.then(response => response.json())
.then(data => {
    let counter = 1;
    for(let value of data.data.children){
        postNum++;
        makePost(value, postNum);
        counter++;
        if(counter > 10){ break;}
    }
});



function makePost(value, postNum){

    const post = document.createElement('div');
    const top = document.createElement('span');
    const num_outside = document.createElement('div');
    const num = document.createElement('h3');
    const title_outside = document.createElement('div');
    const title = document.createElement('h3');
    const photo = document.createElement('img');
    const comment = document.createElement('a');
    const def = document.createElement('p');

    post.classList.add('post');
    top.classList.add('top');
    def.classList.add('def');
    num_outside.classList.add('spacer');
    title_outside.classList.add('spacer');
    space.appendChild(post);
    post.appendChild(top);
    
    if(value.data.thumbnail != "default"){
        post.appendChild(photo);
        
    
    }else {
        post.appendChild(def);
      
    }
    
    
    post.appendChild(comment);
    top.appendChild(num_outside);
    top.appendChild(title_outside);
    num_outside.appendChild(num);
    title_outside.appendChild(title);
    def.innerText = "Photo thumbnail unavailable";
  
    title.innerText = value.data.title;
    const photoURL = value.data.thumbnail;
    photo.src = photoURL;
    comment.setAttribute('href', value.data.url);
    comment.innerText = "View photo in larger format.";
    

    num.innerText = postNum.toString();



}



