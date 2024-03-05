const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const steps = document.querySelectorAll('.step')

let currentValue = 1

next.addEventListener('click', () => {
    currentValue++

    if(currentValue > steps.length) {
        currentValue = steps.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentValue--

    if(currentValue < 1) {
        currentValue = 1
    }

    update()
})

function update() {
    steps.forEach((step, idx) => {
        if(idx < currentValue) {
            step.classList.add('active')
        } else {
            step.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%'

    if(currentValue === 1) {
        prev.disabled = true
    } else if(currentValue === steps.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}