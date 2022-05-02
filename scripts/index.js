// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// import navbar
import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();


import { search_news,append } from "./fetch.js";
// console.log(search_news,append)


let search = (e) => {
    if(e.key === "Enter"){
        let value = document.getElementById("search_input").value;

        search_news(value).then((data) => {
            console.log(data);

            let container = document.getElementById("results");
            // container.innerHTML = null;
            append(data.articles,container);
        });
    }
}



// document.getElementById("search_input").addEventListener("keydown",search); 


















// document.getElementById("search_input").addEventListener("oninput",search_news);
// let search_news = async () =>{

//     // let search = document.getElementById("search_input").value;
    
//     try{
//         let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)

//         let data = await res.json();

//         console.log(data);
//         return data;
//     }
//      catch(err){
//         console.log(err);
//     }
// }



// .getElementById("search_input").addEventListener("oninput",search_news());

// function search_news(){
// //    let search = document.getElementById("search_input").value;
// document
//    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`;
// //    console.log(url);
//    fetch(url)
//    .then(function (res){
//        return res.json();
//    })
//     .then(function (res){
//         // console.log(res.articles);
//         // console.log(res.articles.description)
// //         append(res.articles)
// //     })
//      .catch(function(err){
//          console.log(err);
//      })
// }

// // document.getElementById("search_input").addEventListener("oninput",search_news());


// function append(data){

//     let results = document.getElementById("results");
//     let div = document.createElement("div");

//             let image = document.createElement("img");
//             image.src = data.name;
    
//             let des = document.createElement("h3");
//             des.innerText = data.description;
    
//             div.append(image,des);
    
//             results.append(div);
// }
