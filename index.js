const apiUrl = "http://localhost:1000"; // Replace with your actual API URL

document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Make API request for login
    const response = await fetch(`${apiUrl}/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.json();
    console.log(data); // You can handle the response data here (e.g., update UI, redirect, etc.)
});

document.getElementById("signup-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("signup-email").value;
    const referralId = document.getElementById("signup-referral-id").value;
    const mobile = document.getElementById("signup-mobile").value;
    const password = document.getElementById("signup-password").value;

    // Make API request for registration
    const response = await fetch(`${apiUrl}/user/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
            referralId,
            mobile,
        }),
    });

    const data = await response.json();
    console.log(data); // You can handle the response data here (e.g., update UI, redirect, etc.)
});
