// There is currently no JavaScript code here.// There is currently no JavaScript code here.

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".qa-item").forEach(item => {
        const question = item.querySelector(".qa-question");

        question.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
});
