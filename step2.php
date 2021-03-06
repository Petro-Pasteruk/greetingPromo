<!DOCTYPE html>
<html lang="RU-ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Solar PostCard</title>

    <!-- style -->
    <link rel="stylesheet" href="./assets/css/second-step.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="./assets/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="./assets/css/bootstrap.css">
    <link rel="stylesheet" href="./assets/css/bootstrap.rtl.min.css">

    <!-- script -->
    <script src="./assets/js/bootstrap.min.js"></script>
    <script src="./assets/js/bootstrap.bundle.min.js"></script>

    <!-- FACEFILTERAPI -->

</head>

<body>
    <header>
        <div class="header-img float-md-start"></div>
    </header>
    <section class="second-step d-flex justify-content-center">
        <div class="container background-second-step w-100">
            <div class="row">
                <div class="col-6 d-flex justify-content-center centered-mainPhoto">
                    <div class="back-arrow-container">
                        <a href="./">
                            <img src="./assets/img/back-arrow.png" class="clear-right img-fluid" id="toHome">
                        </a>
                        <canvas width="300" height="200" id='jeeFaceFilterCanvas'></canvas>
                    </div>
                </div>
                <div class="col-6 custom-styles-icons d-flex flex-column align-items-start justify-content-center justify-content-around">
                    <div class="camera-icon-container d-flex justify-content-center">
                        <span></span>
                    </div>
                    <div class="upload-icon-container d-flex justify-content-center">
                        <label for="uploadImg"></label>
                        <input type="file" class="img-fluid" id="uploadImg" accept="image/*">
                    </div>
                </div>
              </div>
        </div>
    </section>


    <div class="modalCamera">
        <button class="btn-exit">&#65794;</button>
        <canvas id="cameraImage" width="640" height="480"></canvas>
        <video id="photoVideo" class="active" autoplay></video>
        <button class="takePhoto">Take a Photo</button>
        <div class="wrapBtnPhoto">
            <button class="savePhoto">Save</button>
            <button class="resetPhoto">Reset</button>
        </div>
    </div>

    <script src="./assets/jeelizFaceFilter/dist/jeelizFaceFilter.js"></script>
    <script src="./assets/jeelizFaceFilter/libs/gify/jdataview.js"></script>
    <script src="./assets/jeelizFaceFilter/libs/gify/gify.min.js"></script>
    <script src="./assets/jeelizFaceFilter/libs/gif-frames/gif-frames.min.js"></script>

    <script src="./assets/js/secondStep.js"></script>
    <!-- <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@miakhalifa/video/6924348358999952645" data-video-id="6924348358999952645" style="max-width: 605px;min-width: 325px;" > <section></section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script> -->
</body>

</html>