//part one
const selectOriginal = document.querySelectorAll('.original-container div')
const copyContainer = document.querySelector('.copy-container')

function copyOriginalsSection(cloneDiv) {
    copyContainer.insertAdjacentHTML('afterbegin', cloneDiv.currentTarget.outerHTML)
}

selectOriginal.forEach(element => element.addEventListener('click', copyOriginalsSection))

//part two
const clearBtn = document.querySelector('button')

function clearSection() {
    while (copyContainer.firstChild) {
        copyContainer.removeChild(copyContainer.firstChild)}
}

clearBtn.addEventListener('click', clearSection)