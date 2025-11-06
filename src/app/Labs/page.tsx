'use client'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Image from 'next/image'

export default function Labs() {

  const [hello, helloState] = useState<string>("loading")
    const [tempereature, setTemperature] = useState<string>("loading")
  const [wind, setWind] = useState<string>("loading")
  const [hello1, hello1State] = useState<string>("loading")


  const fetching = async () => {
    const response = await axios.get("http://localhost:8080/api/hello", { responseType: 'text',
        
      auth: {
        username: "evdimid",
        password: "evdimid"
      }
    })
    const data = response.data
    helloState(data)
  }

    const fetching1 = async () => {
    const response = await axios.get("http://localhost:8080/api/hello1", { responseType: 'text',
        
      auth: {
        username: "evdimid",
        password: "evdimid"
      }
    })
    const data = response.data
    hello1State(data)
  }


  const openmeteo = async ()=> {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=-27.1167&longitude=-109.3667&current=temperature_2m,wind_speed_10m")
    const data1 = response.data.current.temperature_2m
        const data2 = response.data.current.wind_speed_10m
    setTemperature(data1)
    setWind(data2)
  }

  useEffect(()=> {
    fetching()
    fetching1()
    openmeteo()

    const interval =setInterval(()=>{
        openmeteo()
    },10000)

    return ()=> clearInterval(interval)
  }, []
)
  return (
    <div>
      <h1>Here is Labs page</h1>
      <p>{hello}</p>
            <p>{hello1}</p>

      <img src={`/images/${hello}.png`}></img>
      <h1>Easter Island</h1>
      <h2>The current temperature in Easter Island is {tempereature}</h2>
            <h2>The current wind speed in Easter Island is {wind}</h2>
              <img src={`/images/${hello1}.png`}></img>

    </div>
  )
}