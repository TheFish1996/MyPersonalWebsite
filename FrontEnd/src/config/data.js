const api_key = 'f148816720704422b3d852d243a0292b';
async function getAllNews() {
    try {
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`) //gets data from news website
        let responseJson = await response.json()
        return responseJson
    } catch (error) {
        console.log(error)
    }
}

export {
    getAllNews
}
