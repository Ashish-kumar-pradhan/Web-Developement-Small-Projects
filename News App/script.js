console.log("This is my script.js file");
// '20a57603c6b64dfb87f0672d67bf0a1e'

let source = 'bbc-news';
let apiKey = '1cb9220d74306ce75653cc51ed088ad6';
// grab the news container
let newsAccordion = document.getElementById('newsAccordion');
// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/top-headlines?&token=1cb9220d74306ce75653cc51ed088ad6`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index+1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank" >Read more here</a>  </div>
                            </div>
                        </div>`;
            newsHtml += news;
          
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()



    

   