document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typed-text');
    const textToType = 'Hello, World! This is a typewriter effect.';
    let charIndex = 0;

    function typeText() {
        if (charIndex < textToType.length) {
            textElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Adjust the typing speed by changing the timeout value
        }
    }

    typeText();
});
