let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let imgBox = document.getElementById("imgBox"); // Ensure this is selected

function generateQR() {
    let textValue = qrText.value.trim(); // Get input value & trim spaces

    if (textValue.length > 0) {
        let qrData = encodeURIComponent(textValue); // Encode URL safely
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`;
        imgBox.classList.add("show-img"); // Show image
    } else {
        qrText.classList.add("error"); // Add shake effect

        setTimeout(() => {
            qrText.classList.remove("error"); // Remove shake effect after 1 sec
        }, 1000);
    }
}

