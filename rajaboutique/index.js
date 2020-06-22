var jsinput = document.getElementsByClassName('js-input')

for(let i = 0; i< jsinput.length ; i++){
   console.log(jsinput[i])
   jsinput[i].addEventListener("keyup",() => {
      jsinput[i].value ? jsinput[i].classList.add('not-empty') : jsinput[i].classList.remove('not-empty')
   })
}
document.addEventListener("keyup", () => {
   
   
 });

my_label = document.getElementById('message');
function auto_grow(element) {
element.style.height = "5px";
   my_label.style.height = "5px";
   my_label.style.height = (element.scrollHeight)+"px";
element.style.height = (element.scrollHeight)+"px";

}


