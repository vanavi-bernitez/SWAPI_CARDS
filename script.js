import { getPeople } from './modules/getPeople.js'
import { getTemplate } from './modules/getDocument.js';


const createPeopleCards = async () => {
    const cardTemplate = await getTemplate();
    console.log(cardTemplate)

    const cardsContainer = document.querySelector('#cardsContainer');
    const card = document.querySelector('#card');
    card.innerHTML = cardTemplate;

    const peopleData = await getPeople();
    const people = [...peopleData];
    
    people.forEach((person) => { 
        card.querySelector('#name').textContent = person.name;
        card.querySelector('#height').textContent = person.height;
        card.querySelector('#hairColor').textContent = person.hairColor;
        card.querySelector('#skinColor').textContent = person.skinColor;
        card.querySelector('#eyeColor').textContent = person.eyeColor;
        card.querySelector('#birthYear').textContent = person.birthYear;
        const genderImg = card.querySelector('gender');
        if (person.gender ===  'male') {
            genderImg.src = '../images/men.png'
        } else if (person.gender === 'n/a') {
            genderImg.src = '../images/na.png'
        }
        cardsContainer.appendChild(card);
    })

}

createPeopleCards();















