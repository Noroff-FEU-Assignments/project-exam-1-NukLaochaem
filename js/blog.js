const corsFix = "https://noroffcors.herokuapp.com/"
const wordPressBlogs = "http://nuklaochaem.one/SiamTravel/wp-json/wp/v2/posts?per_page=100";
const wordPress = corsFix + wordPressBlogs;

const post = document.querySelector(".posts")

async function api(){
    try{
        const response = await fetch(wordPress);
        const blogPost = await response.json(response);

        console.log(blogPost);

        for(let i = 0; i < blogPost.length; i++){
            if(i===12){
            break;
            }
            post.innerHTML +=`  <a href="singleBlog.html" class="blog_post">
                                <h2 class="blog_post_title">${blogPost[i].title.rendered}</h2>
                                <img class="blog_featured_img" src="${blogPost[i].featured_media_src_url}"></img>
                                </a`
        }
    } catch (error){
        console.log(error)
        post.innerHTML = `<h4 class="error">Error! Something went wrong! Error has occurred.  </h4>`;
    }
}
api()