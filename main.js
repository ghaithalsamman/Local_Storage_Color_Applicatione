let lis = document.querySelectorAll("ul li");
let myDiv = document.querySelector("div");
if(window.localStorage.color){
    myDiv.style.backgroundColor = window.localStorage.color;
    lis.forEach(function(li){
            li.classList.remove("active");
        })
    document.querySelector(`[data-color="${window.localStorage.color}"]`).classList.add("active");
}
lis.forEach(function(li){
    li.addEventListener("click", function(e){
        lis.forEach(function(li){
            li.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
        window.localStorage.color= e.currentTarget.dataset.color;
        myDiv.style.backgroundColor = e.currentTarget.dataset.color;
    });
})

