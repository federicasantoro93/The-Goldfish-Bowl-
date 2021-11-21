document.addEventListener('DOMContentLoaded', () =>{
    const btns = [...document.querySelectorAll('button')];
    const goldfish = document.querySelector('.goldfish');

    btns.forEach((button) => {
        button.addEventListener('click', (event) => {
            
            const direction = event.target.classList[0];
            //console.log(event.target.classList[0]); // L'event.target mi indica quale pulsante è stato premuto
            switch(direction){
                case 'up':
                    goldfish.style.top = '50px';
                    break;
                case 'left':
                    goldfish.style.left = '50px';
                    break;
                case 'down':
                    goldfish.style.top = '100px';
                    break;
                case 'right':
                    goldfish.style.left = '100px'; 
                    break;   
            }

        })
        
    });
});