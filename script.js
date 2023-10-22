let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let exportBtn = document.getElementById('exportQrCode');
let generateQrCodeBtn = document.getElementById('generateQR');

//This will generate the QR Code
generateQrCodeBtn.addEventListener('click', function (e) {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=" + qrText.value;
    imgBox.classList.add("showImg");

    //False = button enabled | true = button disabled
    exportBtn.disabled = false; 
});

//This will download the qr code as an image
exportBtn.addEventListener('click', function (e) {
    
    const url = qrImage.src
        
    fetch(url)
        .then( response => {
        response.blob().then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = qrText.value + ".png";
            a.click();
        });
    }); 
});

//This will listen when the input field is empty
qrText.addEventListener('input', function(event) {
    if (qrText.value.length > 0) {
       
        //This "removes" the html tag disabled from generateQrCodeBtn
        generateQrCodeBtn.disabled = false;
    } else {
        exportBtn.disabled = true;
        generateQrCodeBtn.disabled = true;
    }    
});

/* if you want to add an animation from css using the class list add and remove 
//It will execute a shake animation (set on css)
     exportBtn.classList.add('shakeBtn');
     setTimeout(() => {
         exportBtn.classList.remove('shakeBtn')
     }, 300);
     
*/