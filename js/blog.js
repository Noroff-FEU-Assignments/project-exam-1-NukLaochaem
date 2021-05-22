const corsFix = "https://noroffcors.herokuapp.com/"
const wordPressBlogs = "http://nuklaochaem.one/SiamTravel/wp-json/wp/v2/posts?per_page=100";
const wordPress = corsFix + wordPressBlogs;

const post = document.querySelector(".posts")
const hiddenPost = document.querySelector(".hidden_post")
const postHeader = document.querySelector(".posts_header")
const loader = document.querySelector(".loader")

async function api(){
    try{
        const response = await fetch(wordPress);
        const blogPost = await response.json(response);
        console.log(blogPost);

        post.innerHTML = "";
        loader.style.display = "none";

        for(let i = 0; i < blogPost.length; i++){
            if(i > 7){
                hiddenPost.innerHTML +=`<div class="blog_post">
                                            <a href="singleBlog.html?id=${blogPost[i].id}">
                                            <img class="blog_featured_img" src="${blogPost[i].featured_media_src_url}"></img>
                                            <h2 class="blog_post_title">${blogPost[i].title.rendered}</h2>
                                            </a>
                                        </div>`;
            } else {
                post.innerHTML +=`  <div class="blog_post">  
                                        <a href="singleBlog.html?id=${blogPost[i].id}">
                                        <img class="blog_featured_img" src="${blogPost[i].featured_media_src_url}"></img>
                                        <h2 class="blog_post_title">${blogPost[i].title.rendered}</h2>
                                        </a
                                    </div>`
            }
            viewMore.style.display = "block"
            postHeader.style.display = "block"

        }
        
    } catch (error){
        console.log(error)
        post.innerHTML = "";
        loader.style.display = "none";
        postHeader.innerHTML += `<h4 class="loader_error">Error has occurred, Cannot load the page. Please try again later</h4>`;
    }
}

api()
const viewMore = document.querySelector(".view_more_Btn")
viewMore.addEventListener("click", morePost)

function morePost (event){
    if(hiddenPost.style.display = "grid"){
        viewMore.style.display = "none"
    }
    
}
console.log(morePost);


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


const logoNav = document.querySelector(".logo_nav")

logoNav.addEventListener("click", homeBtn);

function homeBtn(event){
    window.location = '/';
}