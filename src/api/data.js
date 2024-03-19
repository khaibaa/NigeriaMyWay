import axios from "axios"

const url = "https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary"

async function getData() {
  try {
    const {
      data: { data },
    } = await axios.get(url, {
      params: {
        tr_longitude: '7.607441828272932',
        tr_latitude: '9.261942529803623',
        bl_longitude: '7.064271490467744',
        bl_latitude: '8.843155672925835',
        currency: "USD",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": "55986d78dfmsh1f964e8f282566dp111533jsnda4d36cb3f3a",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    })

    return data
  } catch (error) {
    console.log(error)
  }
}

export default getData
