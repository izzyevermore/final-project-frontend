fetch("https://murmuring-anchorage-60741.herokuapp.com/show-students/")
.then(res => res.json())
.then(data => {
    console.log(data);
    users = data;
});