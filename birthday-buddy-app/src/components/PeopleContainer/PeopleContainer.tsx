import { useState } from "react";
import "./PeopleContainer.css";
import peopleData from "../../data/people.json";
import Person from "../Person/Person";

export default function PeopleContainer() {
  const [people, setPeople] = useState(peopleData);

  return (
    <div className="container">
      <h2 className="count">{people.length} Birthdays Today</h2>
      {people.map((personData) => {
        return (
          <Person
            key={personData.id}
            imageUrl={personData.imageUrl}
            name={personData.name}
            age={personData.age}
          />
        );
      })}
      <button
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
}
