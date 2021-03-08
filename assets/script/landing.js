var counter = 1;

setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4){
        counter = 1;
    }
}, 5000);

let user = JSON.parse(localStorage.getItem('user'))
console.log(user);

function toggleNav(){
  const links = document.getElementById("nav").classList.toggle("active")
}

