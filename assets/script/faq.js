let questions = [
    {question: "hello"},
    {question: "bye"}
];

let searchString = document.querySelector("#search").value

let searched = questions.filter(faq => {
    return faq.question.search(searchString) >= 0;
})