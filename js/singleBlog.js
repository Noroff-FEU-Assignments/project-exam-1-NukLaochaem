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
const title = document.querySelector("title")



async function api(){
    try{
        const response = await fetch(wordPress);
        const blogPost = await response.json(response);
        console.log(blogPost);

        post.innerHTML +=`  <div class="blog">
                                <h1 class="blog_post_title">${blogPost.title.rendered}</h1>
                                <figure class="open_modal">${blogPost.content.rendered}</figure>
                            </div`
        title.innerHTML = `${blogPost.title.rendered}`



    } catch (error){
        console.log(error)
        post.innerHTML += `<h4 class="">Error! Something went wrong! Error has occurred.</h4>`;
    }
}
api()

const open = document.querySelector(".open_modal");
const modalBackGround = document.querySelector(".modal_background")
const close = document.querySelector(".close_modal")



document.querySelectorAll(".open_modal").forEach(open => {
    open.addEventListener('click', event => {
        modalBackGround.classList.add("show");
    })
})


close.addEventListener("click", ()=>{
    modalBackGround.classList.remove("show");
})







