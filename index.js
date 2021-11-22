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
                        //goldfish.classList.remove("up");
                    }, 2500);
                    
                    setTimeout(() => {
                        goldfish.style.transform = 'rotate(0deg)';
                        goldfish.classList.remove("up");

                    }, 6000);
                    



                    goldfish.classList.add("up");
                                  
                    goldfish.style.top = '100px';
                    const death = setTimeout(() => {goldfish.style.transform = 'rotate(90deg)'},3000);
                    break;
                case 'left':
                    const interval2 = setInterval(() => {
                        goldfish.classList.toggle("swim__left");
                    }, 400);
                    
                    setTimeout(() => {
                        clearInterval(interval2);
                        goldfish.classList.remove("left");
                    }, 2500);

                    

                    

                    goldfish.classList.add("left");

                    goldfish.style.left = '40px';
                    
                    break;
                case 'down':
                    const interval3 = setInterval(() => {
                        goldfish.classList.toggle("swim__down");
                    }, 400);
                    
                    setTimeout(() => {
                        clearInterval(interval3);
                        goldfish.classList.remove("down");

                    }, 2500);

                    goldfish.classList.add("down");

                    goldfish.style.top = '250px';
                    break;
                case 'right':
                    const interval4 = setInterval(() => {
                        goldfish.classList.toggle("swim__right");
                    }, 400);
                    
                    setTimeout(() => {
                        clearInterval(interval4);
                        goldfish.classList.remove("right");
                    }, 2500);

                    goldfish.classList.add("right");

                    goldfish.style.left = '250px'; 
                    break;   
            }

        })
        
    });
});