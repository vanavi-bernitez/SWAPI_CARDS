const getTemplate = async () => {
    try {
        const response = await fetch('../template/cardTemplate.html', {
            headers: {
                'X-Content-Type-Options': "text/css"
            }
        });
        const data = await response.text();
        return data;   
    } catch (error) {
        console.error(error);
    }
}

export { getTemplate }