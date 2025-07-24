import React from "react";
import CoffeeCard from "../components/CoffeeCard";

const HomePage = async () => {

    const coffees = await fetch("http://localhost:3000/posts/1")
    .then()

    console.log(coffees)
return(
    <div>
        <CoffeeCard title={"1"}></CoffeeCard>
        Hello World
    </div>
)}

export default HomePage