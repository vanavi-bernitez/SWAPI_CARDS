const getTemplate = async () => {
    try {
        const response = await fetch('../template/cardTemplate.html');
        const data = await response.text();
        return data;   
    } catch (error) {
        console.error(error);
    }
}

export { getTemplate }