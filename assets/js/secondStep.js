document.addEventListener('DOMContentLoaded', () => {


    const nextStepImg = document.querySelector('.next-step-img')
    const toHome = document.querySelector('#toHome')

    if( window.location.pathname == '/second-step.html'){
        toHome.addEventListener('click', () => {
            window.location.pathname = '/';
        })

        const curImg = localStorage.getItem('currentImg');

        nextStepImg.setAttribute('src', curImg)

        VIDEOELEMENT = document.getElementById('myVideo');
    }

    document.querySelector('#uploadImg').addEventListener('change', function(){
        if (this.files && this.files[0]) {

            let img = document.querySelector('#output');

            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }
  
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });

    document.querySelector('#cameraImg').addEventListener('click', function(){
          let CVD = null

          JEEFACEFILTERAPI.init({
              canvasId: 'jeeFaceFilterCanvas',
              videoSettings: {
                // videoElement: VIDEOELEMENT,
                'facingMode': 'user', // to use the rear camera, set to 'environment'

                'idealWidth': 800,  // ideal video width in pixels
                'idealHeight': 600, // ideal video height in pixels
                'minWidth': 480,    // min video width in pixels
                'maxWidth': 1920,   // max video width in pixels
                'minHeight': 480,   // min video height in pixels
                'maxHeight': 1920,  // max video height in pixels,
                'rotate': 0,        // rotation in degrees possible values: 0,90,-90,180
                'flipX': false 
              },
              NNCPath: './../assets/jeelizFaceFilter/neuralNets/NN_LIGHT_0.json', // path to JSON neural network model (NN_DEFAULT.json by default)
              callbackReady: function(errCode, spec){
                if (errCode){
                  console.log('AN ERROR HAPPENS. ERROR CODE =', errCode);
                  return;
                }
                // [init scene with spec...]
                console.log('INFO: JEEFACEFILTERAPI IS READY');
                CVD = JeelizCanvas2DHelper(spec);
                CVD.ctx.strokeStyle = 'yellow';
              }, //end callbackReady()
            
              // called at each render iteration (drawing loop)
              callbackTrack: function(detectState){
                  // console.log(detectState);
                // Render your scene here
                // [... do something with detectState]
              } //end callbackTrack()
            }); 
      });



    // const cameraBtn = document.querySelector('.useCamera')

    // cameraBtn.addEventListener('click', getMedia)


    // async function getMedia(){
    //     let stream = null;
    //     let constraints = {
    //         video: { 
    //             width: 1280, 
    //             height: 720,
    //             facingMode: "user" 
    //         }
    //     };
    //     navigator.mediaDevices.getUserMedia(constraints)
    //     .then( stream => {
    //         let video = document.querySelector('#video');
    //         if ("srcObject" in video) {
    //             video.srcObject = stream;
    //           } else {
    //             // Не используем в новых браузерах
    //             video.src = window.URL.createObjectURL(stream);
    //           }
    //           video.onloadedmetadata = function(e) {
    //             video.play();
    //           };
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }

})
