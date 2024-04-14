const my_library = []
let indx = 0;
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

const dialog = document.querySelector(".dialog-box"); const click = document.querySelector('.click');
const close_button = document.querySelector('.close')

click.addEventListener('click', () => {
    dialog.showModal();
})

close_button.addEventListener('click', () => {
    dialog.close();
    form.reset();
})

const form = document.querySelector('.dialog-form');

const submit_button = document.querySelector('.submit');
submit_button.addEventListener('click', (event) => {

    const title = document.querySelector(`input[name="author"]`).value;
    const author = document.querySelector(`input[name="Title"]`).value;
    const pages = document.querySelector(`input[name="number"]`).value;
    addBook(title,author,pages);
   
});

function addBook (title,author,pages) {
    const newBook = new Book(title,author,pages,false) ;
    my_library.push(newBook) ;
    createCurrentState() ;
    form.reset();
    indx++ ;
}

function createCurrentState() {

         const currrent_Indx = indx;         
         const Book = my_library[indx];
         const titleOfBook = Book.title ; 
         const authorOfBook = Book.author ; 
         const pagesOfBook = Book.pages ; 

         
         const container = document.querySelector('.container');
         const div = document.createElement('div');
         div.classList.add('book-card');
         div.setAttribute('data-indx', currrent_Indx);
     
         const author_name = document.createElement('p');
         const title_name = document.createElement('p');
         const pages_read = document.createElement('p');
         const rule = document.createElement('hr');
     
         author_name.textContent = `Author : ` + authorOfBook;
         title_name.textContent = 'Title : ' + titleOfBook;
         pages_read.textContent = 'Pages : ' + pagesOfBook;
     
         container.appendChild(div);
         div.appendChild(author_name);
         div.appendChild(rule.cloneNode());
         div.appendChild(title_name);
         div.appendChild(rule.cloneNode()); 
         div.appendChild(pages_read);
         div.appendChild(rule);
     
         const btn_container = document.createElement('div');
         const remove_btn = document.createElement('button');
         remove_btn.textContent = "Remove";
         const read_unread = document.createElement('button');
         read_unread.textContent = "Unread";
     
         btn_container.classList.add('btn-container');
         remove_btn.classList.add("remove-btn") ;
         remove_btn.setAttribute("data-indx",currrent_Indx);
         read_unread.classList.add('read-unread-btn') ;


         div.appendChild(btn_container);
         btn_container.appendChild(read_unread);
         btn_container.appendChild(remove_btn);
   
         read_unread.addEventListener('click', () => {
             if (read_unread.textContent == "Read") {
                 read_unread.textContent = "Unread";
                 read_unread.style.backgroundColor = "#ff474c";
             } else {
                 read_unread.textContent = "Read";
                 read_unread.style.backgroundColor = "#90EE90";
             }
        }) ;

        remove_btn.addEventListener('click',()=>{
            const parent = document.querySelector('.container');
            const remove = document.querySelector(`div[data-indx='${currrent_Indx}']`) ;
            delete my_library[currrent_Indx];
            parent.removeChild(remove);
       })
   
}


addBook("The Mystery" , "Jane Dane" , 320);
addBook("Into the Unknown" , "Johhn Smith" , 69);
addBook("One Piece" , "Eiichiro Oda" , 100);

