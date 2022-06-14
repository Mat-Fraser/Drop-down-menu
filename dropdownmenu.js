function show(anystring){
    document.querySelector('.textBtn').value = anystring;
}
let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}