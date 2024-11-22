// script.js
document.getElementById("generate-btn").addEventListener("click", function () {
    const qrContainer = document.getElementById("qrcode");
    const textInput = document.getElementById("text-input").value;

    // Clear any existing QR codes
    qrContainer.innerHTML = "";

    if (textInput.trim() === "") {
        alert("Please enter some text or a URL to generate the QR code.");
        return;
    }

    // Generate QR Code
    new QRCode(qrContainer, {
        text: textInput,
        width: 200,
        height: 200,
    });
});
