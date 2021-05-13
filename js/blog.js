const corsFix = "https://noroffcors.herokuapp.com/"
const wordPressBlogs = "http://nuklaochaem.one/SiamTravel/wp-json/wp/v2/posts?per_page=100";
const wordPress = corsFix + wordPressBlogs;

const post = document.querySelector(".posts")
const hiddenPost = document.querySelector(".hidden_post")

async function api(){
    try{
        const response = await fetch(wordPress);
        const blogPost = await response.json(response);
        console.log(blogPost);
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
        }
    } catch (error){
        console.log(error)
        post.innerHTML = `<h4 class="error">Error! Something went wrong! Error has occurred.  </h4>`;
    }
}

api()
const viewMore = document.querySelector(".view_more_Btn")
viewMore.addEventListener("click", morePost)

function morePost (event){
    if(hiddenPost.style.display === "none"){
        hiddenPost.style.display = "grid"
        viewMore.innerHTML = "View less"
    } else {
        hiddenPost.style.display = "none";
        viewMore.innerHTML = "View more"
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