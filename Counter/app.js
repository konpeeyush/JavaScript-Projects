//initial counter value
let count=0 ;
//select values and buttons
const value=document.querySelector('#value');
const btns=document.querySelectorAll('.btn');

//add event listeners
btns.forEach(btn=>{
    btn.addEventListener('click',btn=>{
        const styles=btn.currentTarget.classList ;
        if(styles.contains('decrease')){
            count-- ;
        }
        else if(styles.contains('increase')){
            count++ ;
        }
        else{
            count=0 ;
        }
        if(count>0){
            value.style.color="green" ;
        }
        else if(count<0)
        {
            value.style.color="red" ;
        }
        else if(count===0){
            value.style.color="#222" ;
        }
        value.textContent=count ;
    })
})

