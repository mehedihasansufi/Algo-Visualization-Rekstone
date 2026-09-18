

// leetcode problem added

fetch('./leetcode_problem.html')
.then(response=>response.text())
.then(data=>{
    document.getElementsByClassName("grid-leetcode-problem-list")[0].innerHTML=data;
    fetchLeetCodeProblems();
})
