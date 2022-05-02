// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import { navbar } from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();


let search_news = async () =>{

    let search = document.getElementById("search_input").value;
    
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)

        let data = await res.json();

        console.log(data);
        return data;
    }
     catch(err){
        console.log(err);
    }
}

// let search = document.getElementById("search_input").value;

// function async 
