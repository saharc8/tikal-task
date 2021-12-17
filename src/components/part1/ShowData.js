import React, { useEffect, useState } from "react";
import "./ShowData.css";

const ShowData = ({ results }) => {
  const [max, setMax] = useState(0);
  const [vehicleName, setVehicleName] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [pilotName, setPilotName] = useState("");

  // find the elem with max population
  useEffect(() => {
    results.forEach((element) => {
      if (element.population > max) {
        setMax(element.population);
        setVehicleName(element.vehicleName);
        setPlanetName(element.planetName.substring(1));
        setPilotName(element.pilotName.substring(1));
      }
    });
  }, [results]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1 style={{ margin: "30px" }}>Part 1:</h1>
      <table id="results">
        <tbody>
          <tr>
            <td>Vehicle name with the largest sum</td>
            <td>{vehicleName}</td>
          </tr>
          <tr>
            <td>Related home planets and their respective population</td>
            <td>{planetName}</td>
          </tr>
          <tr>
            <td>Related pilot names </td>
            <td>{pilotName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
