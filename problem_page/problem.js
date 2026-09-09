// header add
fetch('../common_style/header.html')
.then(response=>response.text())
.then(data=>{
    document.getElementById('header-placeholder').innerHTML=data;
})