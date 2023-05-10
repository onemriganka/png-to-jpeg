function convertToJPEG() {
    var fileInput = document.getElementById("image-upload");
    var file = fileInput.files[0];

    if (file && file.type === "image/png") {
        var reader = new FileReader();

        reader.onload = function(e) {
            var img = new Image();
            img.onload = function() {
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;

                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                canvas.toBlob(function(blob) {
                    var url = URL.createObjectURL(blob);
                    var downloadLink = document.getElementById("download-link");
                    downloadLink.href = url;
                    downloadLink.style.display = "block";
                }, "image/jpeg", 1);
            };
            img.src = e.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        alert("Please upload a PNG image file.");
    }
}
