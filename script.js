// Theme Toggle
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '🌙';
themeToggle.style.position = 'fixed';
themeToggle.style.top = '20px';
themeToggle.style.right = '20px';
themeToggle.style.padding = '10px';
themeToggle.style.border = 'none';
themeToggle.style.borderRadius = '50%';
themeToggle.style.cursor = 'pointer';
themeToggle.style.zIndex = '1000';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

document.addEventListener("DOMContentLoaded", function () {
    const text = "I am particularly driven by the challenge of solving real-world problems through technology, and I’m eager to bring this passion into a dynamic team where I can continue to learn and grow. I’m looking forward to the opportunity to contribute my skills to a forward-thinking organization and make a tangible impact through my work.";
    
    const words = text.split(" ");
    const container = document.querySelector(".timeline");
    let index = 0;
    const duration = 10000; // 10 seconds
    const interval = duration / words.length;

    function displayNextWord() {
        if (index < words.length) {
            container.innerHTML += words[index] + " ";
            index++;
            setTimeout(displayNextWord, interval);
        }
    }

    displayNextWord(); // Start the animation
});


document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("your-public-key-here"); // Replace with your EmailJS public key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        emailjs.sendForm("your-service-id", "your-template-id", this)
            .then(() => {
                document.getElementById("form-status").textContent = "Message sent successfully!";
                document.getElementById("form-status").style.color = "green";
                this.reset();
            }, (error) => {
                document.getElementById("form-status").textContent = "Failed to send. Try again later.";
                document.getElementById("form-status").style.color = "red";
            });
    });
});
