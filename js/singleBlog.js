const hamburger = document.querySelector(".fa-bars")
const nav = document.querySelector("nav")


hamburger.addEventListener("click", openClose)

function openClose(event){
    if(nav.style.display === "block"){
        nav.style.display = "none"
    } else {
        nav.style.display = "block"
    }
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const blogId = params.get("id");



const corsFix = "https://noroffcors.herokuapp.com/"
const wordPressBlogs = "http://nuklaochaem.one/SiamTravel/wp-json/wp/v2/posts/" + `${blogId}`;
const wordPress = corsFix + wordPressBlogs;


const post = document.querySelector(".post")

async function api(){
    try{
        const response = await fetch(wordPress);
        const blogPost = await response.json(response);

        console.log(blogPost);

            
            post.innerHTML +=`  <div class="blog">
                                <h1 class="blog_post_title">${blogPost.title.rendered}</h1>
                                <p class="blog_post_content">${blogPost.content.rendered}</p>
                                <p class=""></p>
                                </div`;
    } catch (error){
        console.log(error)
        post.innerHTML = `<h4 class="error">Error! Something went wrong! Error has occurred.  </h4>`;
    }
}
api()