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

const morePost = document.querySelector(".more_posts_container")
const latestPostHeader = document.querySelector(".latest_post_header")

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
    morePost.style.display = "block"
    latestPostHeader.style.display = "block"
    } catch (error){
        console.log(error)
        latestPost.innerHTML = `<h4 class="error">Error! Something went wrong! Error has occurred.  </h4>`;
    }
}
api()



var arrowLeft = document.querySelector(".left");
var arrowRight = document.querySelector(".right");
const indicatorContainer = document.querySelector(".controller ul");
sectionIndex = 0;


document.querySelectorAll(".controller li").forEach(function(indicator, ind){
    indicator.addEventListener("click", function(){
        sectionIndex = ind
        document.querySelector(".controller .selected").classList.remove("selected");
        indicator.classList.add("selected")
        latestPost.style.transform = "translate(" + (ind) * -25 +"%)";
    })
})

arrowLeft.addEventListener("click", function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex -1 : 0;
    document.querySelector(".controller .selected").classList.remove("selected");
    indicatorContainer.children[sectionIndex].classList.add("selected"); 
    latestPost.style.transform = "translate(" + (sectionIndex) * -25 +"%)";
})

arrowRight.addEventListener("click", function(){
    sectionIndex = (sectionIndex < 4 - 1 ) ? sectionIndex+1 : 3;
    document.querySelector(".controller .selected").classList.remove("selected");
    indicatorContainer.children[sectionIndex].classList.add("selected");
    latestPost.style.transform = "translate(" + (sectionIndex) * -25 +"%)";
})

// tied to shorten the code but run into bugs 