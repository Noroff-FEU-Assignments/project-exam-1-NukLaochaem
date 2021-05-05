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
            if(i > 9){
                hiddenPost.innerHTML +=`  <a href="singleBlog.html" class="hidden_post">
                                        <h2 class="blog_post_title">${blogPost[i].title.rendered}</h2>
                                        <img class="blog_featured_img" src="${blogPost[i].featured_media_src_url}"></img>
                                    </a`
            } else {
                post.innerHTML +=`  <a href="singleBlog.html" class="blog_post">
                                        <h2 class="blog_post_title">${blogPost[i].title.rendered}</h2>
                                        <img class="blog_featured_img" src="${blogPost[i].featured_media_src_url}"></img>
                                    </a`
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
    if(hiddenPost.style.display = "block"){
        viewMore.innerHTML = "View less"
    } else {
        hiddenPost.style.display = "none";
        viewMore.innerHTML = "View more"
    }
}
