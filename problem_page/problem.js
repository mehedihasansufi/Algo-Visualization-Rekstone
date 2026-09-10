// header add
fetch('../common_style/header.html')
.then(response=>response.text())
.then(data=>{
    document.getElementById('header-placeholder').innerHTML=data;
})

// leetcode problem added

fetch('./leetcode_problem.html')
.then(response=>response.text())
.then(data=>{
    document.getElementsByClassName("grid-leetcode-problem-list")[0].innerHTML=data;
})
const grid =document.getElementById('grid');
const list=document.getElementById('list');

grid.addEventListener('click',()=>{
    grid.classList.add("grid-list-active")
    list.classList.remove('grid-list-active')
})

list.addEventListener('click',()=>{
    list.classList.add("grid-list-active");
    grid.classList.remove('grid-list-active')
})