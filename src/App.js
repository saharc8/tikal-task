import React, { useEffect, useState } from "react";
import FindData from "./components/part1/FindData";
import BarChart from "./components/part2/BarChart";
import "./App.css";

const App = () => {
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);

  const fetchData = async () => {
    try {
      const res1 = await fetch("https://swapi.py4e.com/api/vehicles/");
      const data1 = await res1.json();
      setVehicles(data1.results);
      const res2 = await fetch("https://swapi.py4e.com/api/planets/");
      const data2 = await res2.json();
      setPlanets(data2.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* filtr only vehicles that have pilots */}
      <FindData vehicles={vehicles.filter((obj) => obj.pilots.length > 0)} />
      {/* filter only valuable populations */}
      <BarChart data={planets.filter((obj) => !isNaN(obj.population))} />
    </div>
  );
};

export default App;
