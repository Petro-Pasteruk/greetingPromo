document.addEventListener('DOMContentLoaded', () => {


    const nextStepImg = document.querySelector('.next-step-img')
    const toHome = document.querySelector('#toHome')

    if( window.location.pathname == '/second-step.html'){
        toHome.addEventListener('click', () => {
            window.location.pathname = '/';
        })

        const curImg = localStorage.getItem('currentImg');

        nextStepImg.setAttribute('src', curImg)


    }





    // const cameraBtn = document.querySelector('.useCamera')

    // cameraBtn.addEventListener('click', getMedia)


    async function getMedia(){
        let stream = null;
        let constraints = {
            video: { 
                width: 1280, 
                height: 720,
                facingMode: "user" 
            }
        };
        navigator.mediaDevices.getUserMedia(constraints)
        .then( stream => {
            let video = document.querySelector('#video');
            if ("srcObject" in video) {
                video.srcObject = stream;
              } else {
                // Не используем в новых браузерах
                video.src = window.URL.createObjectURL(stream);
              }
              video.onloadedmetadata = function(e) {
                video.play();
              };
        })
        .catch((err) => {
            console.log(err);
        });
    }

})
