const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Frontend Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true,
});


const form = document.getElementById('contact-form');

form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Stop the default form submission

    const formData = new FormData(form);
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
        const response = await fetch("https://formspree.io/f/xanjwgvk", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: json
        });

        if (response.ok) {
            window.location.href = "https://tlalitha03.github.io/Portfolio/"; // Redirect to portfolio
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        alert("Network error. Please try later.");
    }
});

