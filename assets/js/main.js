document.addEventListener('DOMContentLoaded', () => {

    // TAKING ELEMENTS FROM DOM
    const btnUse = document.querySelector('.btnUse');
    const imageItems = document.querySelectorAll('.image-item img')

    if( window.location.pathname == '/'){
        btnUse.style.display = 'none'
    }


    // FUNCTIONS

    const btnUseHander = () => {
        const expl = document.querySelector('.explosion-container')
        expl.style.display = 'none'

        let preview = document.querySelector('.preview').getAttribute('src')
        localStorage.setItem('currentImg', preview)


    }

    const imageItemHandler = e => {
        btnUse.style.display = 'block'
        const target = e.target
        const imgSrc = target.attributes[0].value
        let preview = document.querySelector('.preview')

        preview.setAttribute('src', imgSrc)

        return imgSrc
    }



    // FUNCTIONS CALLING
    if( window.location.pathname == '/'){
        btnUse.addEventListener('click', btnUseHander);
        imageItems.forEach( elem => {
            elem.addEventListener('click', imageItemHandler )
        })
    }else{
        return true
    }

})

