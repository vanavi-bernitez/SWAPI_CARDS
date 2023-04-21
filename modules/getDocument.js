const fetchDocument = async () => {
    try {
        const responseDoc = await fetch('../template/cardTemplate.html')
        const data = await responseDoc.text()
        console.log(data)
        
    } catch (error) {
        console.error(error)
    }
}