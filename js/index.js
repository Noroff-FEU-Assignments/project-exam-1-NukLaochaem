const hamburger = document.querySelector(".fa-bars")
const nav = document.querySelector("nav")


hamburger.addEventListener("click", openClose)

function openClose(event){
    if(nav.style.display === "none"){
        nav.style.display = "block"
    } else {
        nav.style.display = "none"
    }
}

const wordPress = "http://nuklaochaem.one/SiamTravel/wp-json/wp/v2/posts";
const latestPost = document.querySelector(".latest_post")

async function api(){
    try{
        const response = await fetch(wordPress);
        const blogPost = await response.json(response);

        console.log(blogPost);

    for(let i = 0; i < blogPost.length; i++){
        if(i===4){
            break;
        }
    }

    } catch (error){
        console.log(error)
    }
}
api()