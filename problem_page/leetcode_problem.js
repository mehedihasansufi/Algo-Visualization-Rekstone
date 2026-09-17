let apiData = []
const fetchLeetCodeProblems = function () {
    fetch("https://mehedihasansufi.github.io/api-for-all/rekstone-leetcode-problem.json")
        .then(response => response.json())
        .then(data => {
            // leetCodeProblemList(data)
            apiData = data
            renderGrid(data)

        })

};

const grid = document.getElementById('grid');
const list = document.getElementById('list');


grid.addEventListener('click', () => {
    grid.classList.add("grid-list-active")
    list.classList.remove('grid-list-active')

    const gridContainer = document.getElementById('grid-container');
    const listContainer = document.getElementById('list-container');

    renderGrid(apiData)
    listContainer.classList.add('list-active-taggle')
    gridContainer.classList.remove('list-active-taggle')
})

list.addEventListener('click', () => {

    list.classList.add("grid-list-active");
    grid.classList.remove('grid-list-active')


    const gridContainer = document.getElementById('grid-container');
    const listContainer = document.getElementById('list-container');

    renderList(apiData)
    gridContainer.classList.add('list-active-taggle')
    listContainer.classList.remove('list-active-taggle')
    console.log('hi');
    
})


const renderGrid = (data) => {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = ''

    data.forEach(singleValue => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
     <div class="problem-name-container ">
            <div class="problem-name">
                <p id="problem-number">${singleValue.id}</p>
                <p id="problem-name">${singleValue['shortName']}</p>
            </div>
            <div class="${singleValue['difficulty'].toLowerCase()}  btn">${singleValue['difficulty']}</div>
        </div>
        <div class="problem-details">${singleValue['fullName']}</div>
        <div class="btn-group">
          <div class="btn-visual">Visualize</div>
          <div class="btn-leetcode">Leetcode</div>
        </div>
    `

        gridContainer.appendChild(card)
    })

}

const renderList = (data) => {
    console.log('me');
    
    const listContainer = document.getElementById('list-container')
    listContainer.innerHTML=''
    data.forEach(singleValue => {
        const listCard = document.createElement('div')
        listCard.classList.add('list-card')
        listCard.innerHTML=`
         
            <div class="list-problem-name">
                <p id="list-problem-number">${singleValue.id}</p>
                <p id="list-problem-name">${singleValue['shortName']}</p>
            </div>
            <div class="list-problem-details">
                <div class="btn ${singleValue['difficulty'].toLowerCase()}">${singleValue['difficulty']}</div>
                <div id="problem-details">${singleValue['fullName']}</div>
            </div>
            <div class="list-button">
                <button id="list-visual">Visualize</button>
                <button id="list-leetcode">leetCode</button>
            </div>
      
        
        `

        listContainer.appendChild(listCard)
      })
}