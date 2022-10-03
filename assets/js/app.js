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
    cl(obj)
    const colDiv = document.createElement('div');
    colDiv.className = 'col-sm-6 col-md-4'
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card h-100'
    colDiv.prepend(cardDiv);
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList.add('card-body');
    cardDiv.prepend(cardBodyDiv)
    const movieTitle = document.createElement('h3');
    movieTitle.classList.add('h3');
    movieTitle.innerText = obj.movieTitle;
    cardBodyDiv.prepend(movieTitle);
    const figureSection = document.createElement('figure');
    movieTitle.after(figureSection)
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src' , obj.movieImg);
    imgElement.title = `${obj.mytitle}`;
    imgElement.alt =`${obj.mytitle}`
    imgElement.className = 'img-fluid';
    figureSection.prepend(imgElement);
    const figCap = document.createElement('figcaption');
    imgElement.after(figCap)
    const myratingpara = document.createElement('p');
    myratingpara.innerText = `${obj.movieRating}/5`;
    figCap.prepend(myratingpara);
    myrow.append(colDiv);
    e.target.reset();// form input field will reset
    modalHandler()
}







addMoviebtn.addEventListener('click' , modalHandler);
modalClose.forEach(close =>{
    close.addEventListener('click' ,modalHandler)
});
backDrop.addEventListener('click' , modalHandler);
myform.addEventListener('submit' , AddMovie)