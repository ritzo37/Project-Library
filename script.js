const dialog = document.querySelector(".dialog-box");const click = document.querySelector('.click');
const close_button = document.querySelector('.close')

click.addEventListener('click',()=>{
    dialog.showModal() ;
})

close_button.addEventListener('click',()=>{
    dialog.close() ;
    form.reset() ;
})

const form = document.querySelector('.dialog-form')

const submit_button= document.querySelector('.submit') ; 
submit_button.addEventListener('click',(event)=>{
    
    const title = document.querySelector(`input[name="author"]`) ; 
    const author = document.querySelector(`input[name="Title"]`) ; 
    const pages = document.querySelector(`input[name="number"]`) ;

    form.reset() ;
}) ; 
 
const read_unread_btn =  document.querySelector('.read-unread-btn') ; 

read_unread_btn.addEventListener('click',(event)=> {
     if (read_unread_btn.textContent == "Read") {
          read_unread_btn.textContent = "Unread";
          read_unread_btn.style.backgroundColor = `#FF474C`
          
     }
     else {
        read_unread_btn.textContent= "Read" ;read_unread_btn.style.backgroundColor = `rgb(131, 244, 176)`;
     }
})
