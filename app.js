const key = "AIzaSyBITx5CCcY24h5p9xuZtyKKKTEEwMFqLsU";

const dataContainer = document.querySelector('#dataContainer');
const numberContainer = document.querySelector('#numberOfReviews');
const addStarsToo = document.querySelector('.nav_rating__top');
const form = document.querySelector('#form');

var request = {
    placeId: 'ChIJ_8ZbJhFuxokRqvSite8h_Vo',
    fields: ['name', 'rating', 'user_ratings_total']
};
  
var service = new google.maps.places.PlacesService(dataContainer);
service.getDetails(request, callback);
  
function callback(place, status) {
    console.log(place);
    renderStars(place.rating);
    renderNumberOfReviews(place.user_ratings_total);
}

function renderNumberOfReviews(numberOfReviews){
    numberContainer.textContent = `${numberOfReviews} Google reviews`;   
}

function renderStars(rating){
    const numberOfStars = Math.floor(rating);
    const fractionStar = rating % 1;
    let stars = `<p>${rating}</p>`

    for (let i = 0; i < numberOfStars; i++){
        stars += `<img src="images/star.svg" alt="star" />`
    }

    if (numberOfStars < 5){
        if (fractionStar == 0){
            stars += `<img src="images/star-gray.svg" alt="star" />`
        } else if (fractionStar > 0 && fractionStar <= .3){
            stars += `<img src="images/star-25.svg" alt="star" />`
        } else if (fractionStar > .3 && fractionStar <= .6){
            stars += `<img src="images/star-50.svg" alt="star" />`
        } else if (fractionStar > .6 && fractionStar <= .85){
            stars += `<img src="images/star-75.svg" alt="star" />`
        } else {
            stars += `<img src="images/star.svg" alt="star" />`
        }
    }

    const grayStars = 4 - numberOfStars;
    if (grayStars > 0){
        for (let i = 0; i < grayStars; i++){
            stars += `<img src="images/star-gray.svg" alt="star" />`
        }
    }
    
    addStarsToo.innerHTML = stars;
    form.newRating.value = rating;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    newRating = form.newRating.value;
    renderStars(newRating);
})