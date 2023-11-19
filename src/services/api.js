import axios from "axios"

const apiURL="https://visual-master-backend.vercel.app"

const DateFormat=(num)=>{
    let dateParts = num.split('/');
    dateParts[0] = dateParts[0].padStart(2, '0');
    let formattedDate = dateParts.join('/');
    return formattedDate
}

export const getInitialGraphData=async()=>{
    const data = await axios.get(`${apiURL}/api/data`)
    return data
}

export const getGraphData=async(dateRangeSelected,age,gender)=>{

    const data = await axios.get(`${apiURL}/api/data`,{
        params: {
          gender: gender,
          age: age,
          startDate: dateRangeSelected.length>0? DateFormat(dateRangeSelected[0]) : "",
          endDate:dateRangeSelected.length>0? DateFormat(dateRangeSelected[1]) : "",
        }
    }
    )
    return data
}