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

const corsFix = "https://noroffcors.herokuapp.com/"
const wordPressBlogs = "http://nuklaochaem.one/SiamTravel/wp-json/wp/v2/posts";
const wordPress = corsFix + wordPressBlogs;
const latestPost = document.querySelector(".slider")

async function api(){
    try{
        const response = await fetch(wordPress);
        const blogPost = await response.json(response);

        console.log(blogPost);

    for(let i = 0; i < blogPost.length; i++){
        if(i===4){
            break;
        }
        latestPost.innerHTML +=`<div class="latest_post">
                                    <a href="singleBlog.html?id=${blogPost[i].id}">
                                    <img class="home_featured_img" src="${blogPost[i].featured_media_src_url}"></img>
                                    <h2 class="homepage_post_title">${blogPost[i].title.rendered}</h2>
                                    </a
                                </div>`
    }

    } catch (error){
        console.log(error)
        latestPost.innerHTML = `<h4 class="error">Error! Something went wrong! Error has occurred.  </h4>`;
    }
}
api()



var arrowLeft = document.querySelector(".left");
var arrowRight = document.querySelector(".right");
index = 0;


arrowLeft.addEventListener("click", function(){
    index = (index > 0) ? index -1 : 0;
    latestPost.style.transform = "translate("+(index)* -25 +"%)";
})

arrowRight.addEventListener("click", function(){
    index = (index < 4 - 1 ) ? index+1 : 3;
    latestPost.style.transform = "translate("+(index)* -25 +"%)";
})

