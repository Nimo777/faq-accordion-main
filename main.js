function toggleAnswer(btn) {

    let parent = btn.parentElement;

    let answer = parent.querySelector(".answer");
    let question = parent.querySelector(".paragraph")

    if (answer.style.display === "block") {
        answer.style.display = "none";
        question.style.display ="block"
        answer.style.background="white";
    } else {
        answer.style.display = "block";
        question.style.display ="none"
        answer.style.background="hsl(292, 16%, 49%)";
        answer.style.color="white";
        answer.style.borderRadius = "10px";
        answer.style.padding ="10px";
        
    }

}