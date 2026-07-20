// When the HTML has finished loading...
document.addEventListener('DOMContentLoaded', () => {
    // Handle click event on the refresh button
    document.querySelector('.button').addEventListener('click', e => handleRefreshClick(e))
    // Handle click event on the back button
    document.querySelector('.btn-back').addEventListener('click', e => handleBackClick(e))
})

const handleRefreshClick = (event) => {
    const className = 'blink'
    
    // Animate the clicked button (event.target)
    // by adding the blink class for 100 milliseconds
    animateButton(event.target, className, 100)
}

const handleBackClick = (event) => {
    const className = 'fillOut'
    
    // Animate the clicked button (event.target)
    // by adding the fillOut class for 500 milliseconds
    animateButton(event.target, className, 500)
}

const animateButton = (button, classNameAnimation, milliseconds) => {

    // Remove the class if it exists
    button.classList.remove(classNameAnimation)
    
    // Add the class
    button.classList.add(classNameAnimation)

    // When the animation finishes, remove the class
    setTimeout(() => {
        button.classList.remove(classNameAnimation)
    }, milliseconds)
}