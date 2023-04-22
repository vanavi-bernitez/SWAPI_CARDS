import { getPeople } from './modules/getPeople.js'
import { getTemplate } from './modules/getDocument.js';
import { getNextPage } from './modules/getNextPage.js';


let url = 'https://swapi.dev/api/people/';

const createPeopleCards = async () => {
    
    const cardsContainer = document.querySelector('#cardsContainer');
    const cardTemplate = await getTemplate();
    const [peopleData, nextPageData] = await getPeople(url);

    url = nextPageData;

    const people = [...peopleData];
    people.forEach((person) => { 
        const card = document.createElement('div');
        card.innerHTML = cardTemplate;
        card.querySelector('#name').textContent = person.name; 
        card.querySelector('#height').textContent = person.height;
        card.querySelector('#hairColor').textContent = person.hairColor;
        card.querySelector('#skinColor').textContent = person.skinColor;
        card.querySelector('#eyeColor').textContent = person.eyeColor;
        card.querySelector('#birthYear').textContent = person.birthYear;
        const genderImg = card.querySelector('#gender');
        if (person.gender ===  'male') {
            genderImg.src = '../images/men.png'
        } else if (person.gender === 'n/a') {
            genderImg.src = '../images/na.png'
        }
        cardsContainer.appendChild(card);
    })

    const nextButton = document.querySelector('#nextBtn');
    // nextButton.addEventListener('click', getNextPage);
    nextButton.addEventListener('click', async() => {
        await createPeopleCards(url)
    })
}

createPeopleCards();
