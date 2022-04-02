//part one
const selectOriginal = document.querySelectorAll('.original-container div')

function copyOriginalsSection(cloneDiv) {
    const copyContainer = document.querySelector('.copy-container')
    copyContainer.insertAdjacentHTML('afterbegin', cloneDiv.currentTarget.outerHTML)
}

selectOriginal.forEach(element => element.addEventListener('click', copyOriginalsSection))




