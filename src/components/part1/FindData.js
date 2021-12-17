import React, { useEffect, useState } from "react";
import ShowData from "./ShowData";

const FindData = ({ vehicles }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch planets
  const fetchHomeworld = async (homeworld, pilotName, vehicleName) => {
    try {
      const res = await fetch(homeworld);
      const data = await res.json();
      const planetName = data.name;
      const population = data.population;
      // update resultsArr
      const newResults = results.map((result) => {
        if (
          result.vehicleName === vehicleName &&
          !result.pilotName.includes(pilotName)
        ) {
          return {
            ...result,
            pilotName: (result.pilotName += ", " + pilotName),
            planetName: (result.planetName +=
              ", " + planetName + ": " + population),
            population: (result.population += parseInt(population)),
          };
        } else return result;
      });
      setResults(newResults);
    } catch (err) {
      console.log(err);
    }
  };

  // fetch pilots
  const fetchPilots = async (pilotUrl, vehicleName) => {
    try {
      const res = await fetch(pilotUrl);
      const pilots = await res.json();
      [pilots].forEach((element) => {
        fetchHomeworld(element.homeworld, element.name, vehicleName);
      });
    } catch (err) {
      console.log(err);
    }
  };

  // create pilotsArr urls from vehiclesArr
  useEffect(() => {
    vehicles.forEach((element) => {
      const vehicleName = element.name;
      const pilotsArr = element.pilots;
      // set resultsArr
      if (!results.includes(vehicleName)) {
        const obj = {
          vehicleName: vehicleName,
          pilotName: "",
          planetName: "",
          population: 0,
        };
        results.push(obj);
      }
      pilotsArr.forEach((element) => {
        fetchPilots(element, vehicleName);
        setLoading(false);
      });
    });
  }, [vehicles]); // eslint-disable-line react-hooks/exhaustive-deps

  return <div>{!loading && <ShowData results={results} />}</div>;
};

export default FindData;
