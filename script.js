console.log
("Hello");


let is_clicked = false;
 
function myFunction() {
    let clickButtonElement = document.getElementById('click-button')
    let buttonsDivElement = document.getElementById('buttons')
 
    if (!is_clicked) {
        let newButtonElement = document.createElement('button')
        newButtonElement.classList.add('click-buttons')
        newButtonElement.textContent = 'Click Me'
 
        newButtonElement.addEventListener('click', () => {
            is_clicked = false;
            newButtonElement.remove()
        })
 
        buttonsDivElement.appendChild(newButtonElement)
        is_clicked = true;
    }
  }
;
 