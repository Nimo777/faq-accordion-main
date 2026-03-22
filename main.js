function toggleAnswer(btn) {

    let parent = btn.parentElement;

    let answer = parent.querySelector(".answer");
    let icon = parent.querySelector(".star")

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.src="assets/images/icon-plus.svg";

        
    } else {
        answer.style.display = "block";
        icon.src="assets/images/icon-minus.svg";
        
    }

}
