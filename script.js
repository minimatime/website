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
// document.addEventListener('DOMContentLoaded', function () {
//     const svg1 = document.querySelector('.svg1');
//     const svg2 = document.querySelector('.svg2');
  
//     function animateSVGs() {
//       let rotation = 0;
  
//       function rotateSVGs() {
//         svg1.style.transform = `rotate(${rotation}deg)`;
//         svg2.style.transform = `rotate(-${rotation}deg)`;
  
//         rotation++;
//         requestAnimationFrame(rotateSVGs);
//       }
  
//       rotateSVGs();
//     }
  
//     animateSVGs();
//   });
  