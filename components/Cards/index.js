// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
    // const articleData = response.data.articles.bootstrap
    console.log(response.data)

    // articleData.forEach(e => {
    //     document.querySelector('.cards-container').appendChild(Cards(e))
    // })
    response.data.articles.bootstrap.forEach(e => {
        document.querySelector('.cards-container').appendChild(Cards(e))
    })

    response.data.articles.javascript.forEach(e => {
        document.querySelector('.cards-container').appendChild(Cards(e))
    })

    response.data.articles.jquery.forEach(e => {
        document.querySelector('.cards-container').appendChild(Cards(e))
    })

    response.data.articles.node.forEach(e => {
        document.querySelector('.cards-container').appendChild(Cards(e))
    })

    response.data.articles.technology.forEach(e => {
        document.querySelector('.cards-container').appendChild(Cards(e))
    })
    
}).catch(error => error.response.data)

function Cards (article) {
    const card = document.createElement('div')
    card.classList.add('card')

    const headline = document.createElement('div')
    headline.classList.add('headline')
    headline.textContent = article.headline
    card.appendChild(headline)

    const authorContainer = document.createElement('div')
    authorContainer.classList.add('author')
    card.appendChild(authorContainer)

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    authorContainer.appendChild(imgContainer)
    
    const img = document.createElement('img')
    img.src = article.authorPhoto
    imgContainer.appendChild(img)

    const byLine = document.createElement('span')
    byLine.textContent = `By ${article.authorName}`
    authorContainer.appendChild(byLine)

    return card
}

