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
    fetchLeetCodeProblems();
})
