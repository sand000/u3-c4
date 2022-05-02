let search_news = async (value) =>{

    // let value = document.getElementById("search_input");
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`)

        let data = await res.json();

        console.log(data);
        return data;
    }catch(err){
        console.log(err);
    }
}


let append = (data, container) => {

    // data.forEach((el) => {

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = data.articles.url;

        let des = document.createElement("h3");
        des.innerText = data.articles.url;

        div.append(des,url);

        container.append(div);
    // });
}

export {search_news, append};

