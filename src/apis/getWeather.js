import httpInstance from "../utils/http";
export function getweatherAPI(city){
    return httpInstance({
        url:"/simpleWeather/query",
        method: "GET",
        // headers:{
        //     "content-type": "application/json"
        // },
        params: {
            key:'100abbef205f73ae521ca0f38edf5c05',
            city
        }
    })
}