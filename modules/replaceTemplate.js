const replaceTemplate = (templateHTML, personInformation) => {
    let output = templateHTML.replace('((Name))', personInformation.name);
    output = output.replace('((Height))', personInformation.height);
    output = output.replace('((Hair color))', personInformation.hairColor);
    output = output.replace('((Skin color))', personInformation.skinColor);
    output = output.replace('((Eye color))', personInformation.eyeColor);
    output = output.replace('((Birth year))', personInformation.birthYear);
    if (personInformation.gender === 'male') {
        output = output.replace('https://cdn.icon-icons.com/icons2/1388/PNG/512/princessleia_96049.png', 
        'https://cdn.icon-icons.com/icons2/1390/PNG/512/darthvader_96170.png');
    } else if (personInformation.gender === 'n/a') {
        output = output.replace('https://cdn.icon-icons.com/icons2/1388/PNG/512/princessleia_96049.png', 
        'https://cdn.icon-icons.com/icons2/2146/PNG/512/starwars_rd_icon_131816.png');
    }
    return output;
}

export { replaceTemplate }