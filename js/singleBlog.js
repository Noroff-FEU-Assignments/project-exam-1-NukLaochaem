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
const wordPressBlogs = "https://nuklaochaem.one/SiamTravel/wp-json/wp/v2/posts/" + `${blogId}`;
const wordPress = corsFix + wordPressBlogs;


const post = document.querySelector(".post")
const title = document.querySelector("title")



async function api(){
    try{
        const response = await fetch(wordPress);
        const blogPost = await response.json(response);
        console.log(blogPost);
        post.innerHTML="";

        post.innerHTML +=`  <div class="blog">
                                <h1 class="blog_title">${blogPost.title.rendered}</h1>
                                <figure class="open_modal">${blogPost.content.rendered}</figure>
                            </div`
        title.innerHTML += `${blogPost.title.rendered}`

        const imgClass = document.querySelectorAll(".wp-block-media-text__media");
        const modal = document.querySelector(".my_modal");
        console.log(imgClass);
        
        document.addEventListener("click", function (event) {
            if (!event.target.matches("figure img")) return;
            console.log(event.target);

            let imageClone =  event.target.cloneNode(true);
            modal.style.display = "block";

            imageClone.classList.add("modal_content");
            modal.appendChild(imageClone);

        }, false);

        closeModal.addEventListener("click",()=>{
            modal.style.display = ("none");
            document.querySelectorAll(".modal_content").forEach(img =>img.remove());
        })

    } catch (error){
        console.log(error)
        post.innerHTML = "";
        post.innerHTML += `<h4 class="single_blog_error">Error has occurred, Cannot load the page. Please try again later</h4>`;
    }
}
api()


const img = document.querySelector(".myImg")
const modal = document.querySelector(".my_modal");
const modalImg = document.querySelector(".modal_content")

const closeModal = document.querySelector(".close_modal")

/*
        document.querySelectorAll("").forEach(open => {
            open.addEventListener('click', event => {
                modalBackGround.style.display("block");

            })
        })

        close.addEventListener("click", ()=>{
            modal.style.display("none");
        })
*/

const logoNav = document.querySelector(".logo_nav")

logoNav.addEventListener("click", homeBtn);

function homeBtn(event){
    window.location = '/';
}







