
let body = document.querySelectorAll(`.accordion-body`);
let head = document.querySelectorAll(`.accordion-header`);

for (let i = 0;i<head.length;i++){
    head[i].addEventListener("click",function(){
        if (body[i].classList.contains("hidden")){
            body[i].classList.remove("hidden");
            head[i].classList.add("open");
        }else{
            body[i].classList.add("hidden");
            head[i].classList.remove("open");
        }
    })
}