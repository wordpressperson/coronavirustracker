import axios from "axios";

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async(country) => {
    let changeableURL = url;

    if (country) {
        changeableURL=`${url}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate} } = await axios.get(changeableURL)
        
        return { confirmed, recovered, deaths, lastUpdate}
    }

    catch(e) {
        console.log(e)
    }

}

export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailydata) => ({
            confirmed: dailydata.confirmed.total,
            deaths: dailydata.deaths.total,
            date: dailydata.reportDate 
        }))

        return modifiedData
    }

    catch(e) {
        console.log(e)
    }
}

export const fetchCountries = async () => {
    try {
        const {data: {countries}} =await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    }

    catch (e) {
        console.log(e)
    }   
}
















