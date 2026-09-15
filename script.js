// =====================================
// GOOGLE APPS SCRIPT WEB APP URL
// =====================================

const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzS-VRMTkvFAKxQkhMoerWQn6i0QMe75bwMsdHEcjLYBbFJLPwzFPqECh1LHPz_lQSJGg/exec";


// =====================================
// SEND MESSAGE
// =====================================

function sendMessage() {

    const guestName =
        document.getElementById("guestName").value.trim();

    const message =
        document.getElementById("message").value.trim();

    const status =
        document.getElementById("status");


    // Check guest name

    if (guestName === "") {

        status.innerText =
            "Please enter your name.";

        return;
    }


    // Check message

    if (message === "") {

        status.innerText =
            "Please write your message.";

        return;
    }


    // Check Google URL

    if (
        SCRIPT_URL ===
        ""
    ) {

        status.innerText =
            "Google Sheet connection is missing.";

        return;
    }


    status.innerText = "Sending...";


    // Data to Google Sheet

    const data = {

        guestName: guestName,

        message: message

    };


    // Send data

    fetch(SCRIPT_URL, {

        method: "POST",

        mode: "no-cors",

        headers: {

            "Content-Type":
                "text/plain;charset=utf-8"

        },

        body: JSON.stringify(data)

    })

    .then(function () {

        // Hide form

        document
            .getElementById("messageForm")
            .classList.add("hidden");


        // Show thank you

        document
            .getElementById("thankYou")
            .classList.remove("hidden");

    })

    .catch(function (error) {

        console.log(error);

        status.innerText =
            "❌ Message could not be sent.";

    });

}