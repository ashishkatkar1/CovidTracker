import React, { useEffect, useState } from 'react'
import "./Covid.css";
const Covid=()=>{
     
     const [data,setData]=useState([]);

    const getCovidData=async()=>{
          try{
             const res = await fetch('https://data.covid19india.org/data.json')
              const actualData = await res.json();
              console.log(actualData.statewise[0]);
              setData(actualData.statewise[0])
          }catch(err){

                console.log(err);
          }

    }
    useEffect(()=>{
       getCovidData();

    },[]);
   return(
       <div>
         <div className="header"><h1>LIVE COVID TRACKER INDIA</h1>
         </div>
            <div className="wrapper">
            <div className="cards_wrap">
              <div className="card_item">
                <div className="card_inner">
                    <h1>Total Recovered</h1>
                    <h3>{data.recovered}</h3>
                </div>
            </div>
            <div className="card_item">
                  <div className="card_inner">
                    <h1>Total Confirmed</h1>
                    <h3>{data.confirmed}</h3>
                  </div>
              </div>
              <div className="card_item">
                <div className="card_inner">
                    <h1>Deaths</h1>
                    <h3>{data.deaths}</h3>
                </div>
            </div>
            <div className="card_item">
                <div className="card_inner">
                    <h1>Active</h1>
                    <h3>{data.active}</h3>
                </div>
            </div>
            </div>
    </div>
       </div>
   )

}
export default Covid;