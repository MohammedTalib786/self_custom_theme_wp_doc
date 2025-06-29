
let createBtn = `<button title="Copy to Clipboard" class="copy_btn"><i class="fa-regular fa-copy"></i></button>`;
let tooltip = `<div class="tooltip tooltip_hide" >Text Copied to Clipboard!</div>`;

// <i class="fa-regular fa-copy"></i>
// <i class="fa-solid fa-copy"></i>

document.addEventListener('DOMContentLoaded', () => {
    // Scroll To Top Functionality
    const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
    let code_wrapper_cont = Array.from(document.querySelectorAll('.code_wrapper'));

    window.addEventListener('scroll', () => window.pageYOffset > 100 ? scrollToTopBtn.classList.add('active') : scrollToTopBtn.classList.remove('active'))
    scrollToTopBtn.addEventListener('click', () => window.scrollTo(0, 0))


    code_wrapper_cont.forEach((elem) => {
        if (elem) {
            elem.innerHTML += tooltip;

            elem.insertAdjacentHTML('afterbegin', createBtn);
            let copyBtn = elem.querySelector('.copy_btn');

            copyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                navigator.clipboard.writeText(elem.querySelector('pre code').innerText);
                if (copyBtn.querySelector('i').classList.contains('fa-regular')) {
                    copyBtn.querySelector('i').classList.toggle('fa-solid');
                    elem.querySelector('.tooltip').classList.toggle('tooltip_show');
                    setTimeout(() => {
                        copyBtn.querySelector('i').classList.toggle('fa-solid')
                        elem.querySelector('.tooltip').classList.toggle('tooltip_show');
                    }, 1200)
                }
            })
        }
    })
})




