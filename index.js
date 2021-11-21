document.addEventListener('DOMContentLoaded', () =>{
    const btns = [...document.querySelectorAll('button')];
    const goldfish = document.querySelector('.goldfish');

    btns.forEach((button) => {
        button.addEventListener('click', (event) => {
            
            const direction = event.target.classList[0];
            //console.log(event.target.classList[0]); // L'event.target mi indica quale pulsante è stato premuto
            switch(direction){
                case 'up':
                    goldfish.style.top = '100px';
                    setTimeout(() => {goldfish.style.transform = 'rotate(180deg)'},1500);
                    break;
                case 'left':
                    goldfish.style.left = '40px';
                    break;
                case 'down':
                    goldfish.style.top = '250px';
                    break;
                case 'right':
                    goldfish.style.left = '250px'; 
                    break;   
            }

        })
        
    });
});