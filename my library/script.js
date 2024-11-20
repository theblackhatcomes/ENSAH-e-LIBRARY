function openBook(bookFile) {
    window.open(bookFile, '_blank');
}
document.addEventListener("DOMContentLoaded", () => {
    const text = "Explore Our Literary Universe";
    const dynamicTextElement = document.getElementById("dynamic-text");

    let index = 0;
    function typeText() {
        if (index < text.length) {
            dynamicTextElement.textContent += text[index];
            index++;
            setTimeout(typeText, 100);  
        }
    }

    typeText();
});
document.addEventListener("DOMContentLoaded", () => {
    const text = "The most read books";
    const dynamicTextElement = document.getElementById("dynamic-text1");

    let index = 0;
    function typeText() {
        if (index < text.length) {
            dynamicTextElement.textContent += text[index];
            index++;
            setTimeout(typeText, 100);  
        }
    }

    typeText();
});
