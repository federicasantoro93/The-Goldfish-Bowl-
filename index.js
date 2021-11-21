document.addEventListener('DOMContentLoaded', () =>{
    const btns = [...document.querySelectorAll('button')];
    const goldfish = document.querySelector('.goldfish');



    btns.forEach((button) => {
        button.addEventListener('click', (event) => {
            
            const direction = event.target.classList[0];
            //console.log(event.target.classList[0]); // L'event.target mi indica quale pulsante è stato premuto
            switch(direction){
                case 'up':
                    
                    const interval1 = setInterval(() => {
                        goldfish.classList.toggle("swim__up");
                    }, 400);
                    
                    setTimeout(() => {
                        clearInterval(interval1);
                    }, 2500);

                    goldfish.classList.add("up");
                                  
                    goldfish.style.top = '100px';
                    const death = setTimeout(() => {goldfish.style.transform = 'rotate(90deg)'},3000);
                    break;
                case 'left':
                    goldfish.style.left = '40px';
                    break;
                case 'down':
                    goldfish.style.top = '250px';
                    break;
                case 'right':
                    const interval = setInterval(() => {
                        goldfish.classList.toggle("swim__right");
                    }, 400);
                    
                    setTimeout(() => {
                        clearInterval(interval);
                    }, 2500);
                    goldfish.style.left = '250px'; 
                    break;   
            }

        })
        
    });
});