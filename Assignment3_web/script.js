// ===== Task 5: Current date and time (index.html) =====
const dateTimeBox = document.getElementById("datetime");

function showDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    const time = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
    dateTimeBox.textContent = date + ", " + time;
}

if (dateTimeBox) {
    showDateTime();
    setInterval(showDateTime, 1000);
}


// ===== Task 4: Change background color (index.html) =====
const colorBtn = document.getElementById("color-btn");
const colors = ["#12131c", "#1f3a5f", "#3b1f4a", "#1f4a3a", "#5a2a2a"];
let colorIndex = 0;

if (colorBtn) {
    colorBtn.addEventListener("click", function () {
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];
    });
}


// ===== Task 3: Popup subscription form (index.html) =====
const popup = document.getElementById("popup");
const openPopupBtn = document.getElementById("open-popup");
const closePopupBtn = document.getElementById("close-popup");
const subscribeForm = document.getElementById("subscribe-form");

if (popup) {
    openPopupBtn.addEventListener("click", function () {
        popup.classList.add("show");
    });

    closePopupBtn.addEventListener("click", function () {
        popup.classList.remove("show");
    });

    // close when clicking outside the popup window
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            popup.classList.remove("show");
        }
    });

    subscribeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("sub-email").value.trim();
        const error = document.getElementById("sub-error");

        if (email === "" || !email.includes("@")) {
            error.textContent = "Please enter a valid email";
            return;
        }

        error.textContent = "";
        alert("Thanks for subscribing!");
        subscribeForm.reset();
        popup.classList.remove("show");
    });
}


// ===== Task 2: Accordion FAQ (about.html) =====
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(function (item) {
    const question = item.querySelector(".accordion-question");
    const answer = item.querySelector(".accordion-answer");

    question.addEventListener("click", function () {
        if (item.classList.contains("open")) {
            item.classList.remove("open");
            answer.style.maxHeight = null;
        } else {
            item.classList.add("open");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});


// ===== Task 1: Form validation (cart.html) =====
const checkoutForm = document.getElementById("checkout-form");

if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirm-password").value;

        let valid = true;

        // clear old errors
        document.querySelectorAll(".error-msg").forEach(function (e) {
            e.textContent = "";
        });

        if (name === "") {
            document.getElementById("name-error").textContent = "Name is required";
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            document.getElementById("email-error").textContent = "Email is required";
            valid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById("email-error").textContent = "Enter a valid email (example@mail.com)";
            valid = false;
        }

        if (password === "") {
            document.getElementById("password-error").textContent = "Password is required";
            valid = false;
        } else if (password.length < 8) {
            document.getElementById("password-error").textContent = "Password must be at least 8 characters";
            valid = false;
        }

        if (confirm === "") {
            document.getElementById("confirm-error").textContent = "Please confirm your password";
            valid = false;
        } else if (confirm !== password) {
            document.getElementById("confirm-error").textContent = "Passwords do not match";
            valid = false;
        }

        if (valid) {
            alert("Order placed successfully!");
            checkoutForm.reset();
        }
    });
}
