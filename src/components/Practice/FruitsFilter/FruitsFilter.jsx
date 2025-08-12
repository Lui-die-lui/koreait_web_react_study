import { useEffect, useState } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Cherry",
  "Grape",
  "Orange",
  "Strawberry",
  "watermelon",
];

function FruitsFilter() {
  const [filterFruits, setFilterFruits] = useState(fruits);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const newFilterFruits = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilterFruits(newFilterFruits);
    console.log("마운트 됨");

    return () => {
      console.log("언마운트 됨");
    };
  }, [inputValue]);

  return (
    <div>
      <input onChange={(e) => setInputValue(e.target.value)} type="text" />
      <ul>
        {filterFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsFilter;
