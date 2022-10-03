cl=console.log;
const addMoviebtn = document.getElementById('addMovie');
const backDrop = document.getElementById('backDrop');
const myModal = document.getElementById('myModal');
const modalClose = [...document.querySelectorAll('.myClose')];
const myform = document.getElementById('myform');
const titleIpt = document.getElementById('title');
const imgurlIpt = document.getElementById('imgurl');
const ratingIpt = document.getElementById('rating')
const myrow = document.getElementById('myrow')

let myMovies =[];
const movieTemplating =(arr)=>{
    result = '';
    arr.forEach(obj =>{
        result += `
        <div class="col-sm-6 col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h3>${obj.movieTitle}</h3>
                        <figure>
                            <img src="${obj.movieImg}" alt="${obj.movieTitle}" title="${obj.movieTitle}">
                            <figcaption>
                                <p>${obj.movieRating}/5</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        `
    })
    myrow.innerHTML = result;
}
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
    movieTemplating(myMovies);
    e.target.reset();
    modalHandler()// form input field will reset
}







addMoviebtn.addEventListener('click' , modalHandler);
modalClose.forEach(close =>{
    close.addEventListener('click' ,modalHandler)
});
backDrop.addEventListener('click' , modalHandler);
myform.addEventListener('submit' , AddMovie)