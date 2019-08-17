// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
    const topicData = response.data.topics
    topicData.forEach(e => {
        document.querySelector('.topics').appendChild(Tabs(e))
    })
})
.catch(error => console.log(error.response.data))

function Tabs (txt) {
    const div = document.createElement('div')
    div.classList.add('tab');
    div.textContent = txt;

    return div
}

s)