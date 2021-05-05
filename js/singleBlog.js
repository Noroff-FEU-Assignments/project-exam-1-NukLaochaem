const corsFix = "https://noroffcors.herokuapp.com/"
const wordPressBlogs = "http://nuklaochaem.one/SiamTravel/wp-json/wp/v2/posts?";
const wordPress = corsFix + wordPressBlogs;

const post = document.querySelector(".post")

async function api(){
    try{
        const response = await fetch(wordPress);
        const blogPost = await response.json(response);

        console.log(blogPost);

        for(let i = 0; i < blogPost.length; i++){
            if(i === 1){
            break;
            }
            post.innerHTML +=`  <div href="singleBlog.html" class="blog">
                                <h1 class="blog_post_title">${blogPost[i].title.rendered}</h1>
                                <p class="blog_post_content">${blogPost[i].content.rendered}</p>
                                <p class="blog_post_title"></p>
                                
                                </div`
        }
    } catch (error){
        console.log(error)
        post.innerHTML = `<h4 class="error">Error! Something went wrong! Error has occurred.  </h4>`;
    }
}
api()