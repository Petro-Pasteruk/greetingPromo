document.addEventListener('DOMContentLoaded', () => {

    // TAKING ELEMENTS FROM DOM
    const
        btnUse = document.querySelector('.btnUse'),
        imageItems = document.querySelectorAll('.image-item img');

    btnUse.style.display = 'none';

    // FUNCTIONS

    const btnUseHander = () => {
        const expl = document.querySelector('.explosion-container');
        expl.style.display = 'none';

        let preview = document.querySelector('.preview').getAttribute('src');
        localStorage.setItem('currentImg', preview);
    }

    const imageItemHandler = e => {
        btnUse.style.display = 'block';
        const target = e.target;
        let preview = document.querySelector('.preview');

        preview.setAttribute('src', target.src);

        return target.src;
    }

    // FUNCTIONS CALLING
    btnUse.addEventListener('click', btnUseHander);
    imageItems.forEach(elem => {
        elem.addEventListener('click', imageItemHandler);
    })

})