const form = document.getElementById("form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const idea = document.getElementById("idea").value;
        const budget = document.getElementById("budget").value;

        const message = `Hello, I want to order resin art.%0A
Name: ${name}%0A
Idea: ${idea}%0A
Budget: ₹${budget}`;

        const url = `https://wa.me/91XXXXXXXXXX?text=${message}`;

        window.open(url, "_blank");
    });
}