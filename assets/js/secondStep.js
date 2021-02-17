document.addEventListener('DOMContentLoaded', () => {
    const
        btnOpenCamera = document.querySelector(".camera-icon-container span"),
        btnCloseCamera = document.querySelector(".btn-exit");

    btnOpenCamera.addEventListener("click", function () {
        // Open Modal
        document.querySelector(".modalCamera").classList.add("active");

        const
            canvas = document.getElementById('cameraImage'),
            context = canvas.getContext('2d'),
            video = document.getElementById('photoVideo');

        // Get access to the camera!
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Not adding `{ audio: true }` since we only want video now
            navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
                //video.src = window.URL.createObjectURL(stream);
                video.srcObject = stream;
                video.play();
            });
        }

        // Trigger photo take
        document.querySelector(".takePhoto").addEventListener("click", function() {
            context.drawImage(video, 0, 0, 640, 480);
            document.querySelector("#photoVideo").classList.remove("active");
            document.querySelector("#cameraImage").classList.add("active");
            document.querySelector(".wrapBtnPhoto").classList.add("active");
        });


    });

    document.querySelector(".savePhoto").addEventListener("click", function () {

    });
    document.querySelector(".resetPhoto").addEventListener("click", function () {
        document.querySelector(".wrapBtnPhoto").classList.remove("active");
        document.querySelector("#photoVideo").classList.add("active");
        document.querySelector("#cameraImage").classList.remove("active");
    });


    btnCloseCamera.addEventListener("click", function () {
        document.querySelector(".modalCamera").classList.remove("active");
    });
});
