let users;



fetch('http://127.0.0.1:5000/show-students/')
.then(res => res.json())
.then(data => {
    console.log(data);
    users = data;
})

function login(){
    
    let inputs = document.getElementsByTagName('input');

    let username  = inputs[0].value;
    let password = inputs[1].value;

    let loggedIn = users.filter(user => {
        return user.username == username && user.password == password ?true : false;
    })

     if(loggedIn.length > 1){
        alert('User Found');
        window.location.href = './landing.html'
     } else {
         alert('Credential Invalid')
     }
     inputs.reset();
}









