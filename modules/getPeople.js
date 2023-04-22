const getPeople = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const people = data.results;
        const nextPage = data.next;
        const mainPropertiesPeople = people.map((person) => {
            return {
                name: person.name,
                height: person.height,
                hairColor: person['hair_color'],
                skinColor: person['skin_color'],
                eyeColor: person['eye_color'],
                birthYear: person['birth_year'],
                gender: person.gender
            }
        });
        return  [mainPropertiesPeople, nextPage];
    } catch (error) {
        console.error('Error while getting people from the API', error);
    }
}

export { getPeople }
