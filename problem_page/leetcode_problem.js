const fetchLeetCodeProblems =function(){
    fetch("https://mehedihasansufi.github.io/api-for-all/rekstone-leetcode-problem.json")
    .then(response => response.json())
    .then(data => {
        leetCodeProblemList(data)

    })

};

const leetCodeProblemList = function (data) {
    const gridContainer = document.getElementById('grid-container');
   data.forEach(singleValue=>{
        const card=document.createElement('div')
        card.classList.add('card')
        card.innerHTML=
       ` 
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