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




// function Student(student){
//     return {
//         id: student[0],
//         name: student[1],
//         age: student[2],
//         username: student[3],
//         password: student[4],
//         email: student[5]
//     }
// }



