let questions = [
    {question: "How long have you been tutoring?"},
    {question: "Have you tutored before?"},
    {question: "What has other students said about your tutoring?"},
    {question: "What else do you offer?"}
];

function searchQuery(){
    let searchString = new RegExp(document.querySelector("#search-input").value, 'i');

    console.log(searchString);

    let searched = questions.filter((faq, i) => {
        if (faq.question.search(searchString) >= 0){
            document.getElementsByClassName("accordion-item")[i].focus();
            console.log("hello", i)
            return faq.question.search(searchString) >= 0;
        };
    });

    console.log(searched);
}



