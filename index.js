// header add
fetch('./common_style/header.html')
.then(response=>response.text())
.then(data=>{
    document.getElementById('header-placeholder').innerHTML=data;
})

fetch('./home_page/problem_card.html')
.then(response=>response.text())
.then(data=>{
    document.getElementById('problem-card-placeholder').innerHTML=data;
})