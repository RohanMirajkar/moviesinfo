cl=console.log;
const addMoviebtn = document.getElementById('addMovie');
const backDrop = document.getElementById('backDrop');
const myModal = document.getElementById('myModal');
const modalClose = [...document.querySelectorAll('.myClose')];
const myform = document.getElementById('myform');
const titleIpt = document.getElementById('title');
const imgurlIpt = document.getElementById('imgurl');
const ratingIpt = document.getElementById('rating')


let myMovies =[];
const modalHandler =(e)=>{
    backDrop.classList.toggle('d-none');
    myModal.classList.toggle('d-none')
}
const AddMovie =(e)=>{
    e.preventDefault();// preventDefault prevents behavouir of refreshing 
    let obj={
        movieTitle : titleIpt.value,
        movieImg : imgurlIpt.value,
        movieRating : ratingIpt.value
    };
    myMovies.push(obj);
    cl(myMovies);
    



    e.target.reset();
    modalHandler()// form input field will reset
}







addMoviebtn.addEventListener('click' , modalHandler);
modalClose.forEach(close =>{
    close.addEventListener('click' ,modalHandler)
});
backDrop.addEventListener('click' , modalHandler);
myform.addEventListener('submit' , AddMovie)