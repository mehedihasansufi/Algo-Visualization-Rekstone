// header add


fetch('./home_page/problem_card.html')
.then(response=>response.text())
.then(data=>{
    document.getElementById('problem-card-placeholder').innerHTML=data;
})