let users;

fetch('https://murmuring-anchorage-60741.herokuapp.com/show-students/')
.then(res => res.json())
.then(data => {
    console.log(data);
    users = data;
})

function login(){
    let inputs = document.getElementsByTagName('input');
    
    let username = inputs[0].value;
    let password = inputs[1].value;

console.log(users, username, password);

    let loggedIn = users.filter(user => {
        return user.username == username && user.password == password
    })

     if(loggedIn.length >= 1){
        alert('User Found');
        window.location.href = './landing.html'
     } else {
         alert('Credential Invalid')
     }
}

fetch('https://murmuring-anchorage-60741.herokuapp.com/show-admin/',)
.then(res => res.json())
.then(data => {
    console.log(data);
    admin = data;
})

function adminLogin(){
    let inputs = document.getElementsByTagName('input');

    let username  = inputs[0].value;
    let password = inputs[1].value;

console.log(admin, username, password);

    // let loggedIn = admin.filter(admin => {
    //     return admin.username == username && admin.password == password
    // })

    let loggedIn = admin.username == username && admin.password == password ? true : false;

    if(loggedIn){
        alert('Admin has logged in')
        window.location.href = './admin.html'
    }else{
        alert('Credentials Invalid')
    }
}




