fetch('https://murmuring-anchorage-60741.herokuapp.com/show-students/')
.then(res => res.json())
.then(data => {
    data.forEach(student => {
        let entry = new Student(student)
        console.log(entry);
    })
})

function Student(student){
    return {
        id: student[0],
        name: student[1],
        age: student[2],
        username: student[3],
        password: student[4],
        email: student[5]
    }
}