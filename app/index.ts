let num:number = 0;

const btns = document.querySelectorAll(".btn");
const valor = document.querySelector("#valor")!;



btns.forEach((btn) => {
    btn.addEventListener("click",(bt) => {
        
        const style = btn.classList;

        if(style.contains("btn-secondary")){
           
            num++;
        }else if (style.contains("btn-primary")){
            num--;
        }else {
            num = 0;
        }

        valor.textContent = num.toString();
    })
})