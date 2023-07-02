import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export const Homepage = ({ searchTerm }) => {
  console.log(searchTerm);
  const [data, setData] = useState([]);
  const filteredData = [];

  for (let i = 0; i < data.length; i++) {
    let x = data[i].title.toLowerCase();
    if (x.includes(searchTerm.toLowerCase())) {
      console.log(data[i]);
      filteredData.push(data[i]);
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://webscraping-mrhw.onrender.com/getmobiledata");
        const mobileData = response.data;
        setData(mobileData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="theouterdiv">
      <div className="outerdiv">
        {data.map((item) => (
          <div className="maindiv" key={item._id}>
            {item.image}
            {item.title && <p>{item.title}</p>}
            {item.image && <img src={item.image} alt={item.title} />}
            {item.rating && <p>Rating: {item.rating}</p>}
            {item.price && <p>Price: {item.price}</p>}
            {item.offerprice && <p>Offer Price: {item.offerprice}</p>}
          </div>
        ))}
      </div>
      <div className="filterData">
        {filteredData.length > 0 ? (
          <div style={{ overflow: "auto" }}>
            {filteredData.map((item) => (
              <div key={item._id}>
                <p>{item.title}</p>
                <img src={item.image} alt={item.title} />
                <p>Rating: {item.rating}</p>
                <p>Price: {item.price}</p>
                <p>Offer Price: {item.offerprice}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No matching data found.</p>
        )}
      </div>
    </div>
  );
};
