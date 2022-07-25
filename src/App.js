import "./styles.css";

export default function App() {
  const data = {
    taxi:
      "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji:
          "an apple cultivar developed by growers at Tohoku Research Station"
      }
    }
  };

  //  taxi: a car licensed to transport...
  //  food:
  //      sushi: a traditional japanese....
  //      apple:
  //           Honeycrisp: an apple cultiva...
  //           Fuji: "......"
  const DisplayNested = ({ nestedObjected }) => {
    return Object.keys(nestedObjected).map((val) => {
      if (
        typeof nestedObjected[val] === "object" &&
        !Array.isArray(nestedObjected[val]) &&
        nestedObjected[val] !== null
      ) {
        return (
          <div style={{ marginLeft: "10px" }}>
            <div>{val}:</div>
            <DisplayNested nestedObjected={nestedObjected[val]} />
          </div>
        );
      } else {
        return (
          <div style={{ marginLeft: "10px" }}>
            {val + ":" + nestedObjected[val]}
          </div>
        );
      }
    });
  };

  return (
    <>
      <h1>My Data:</h1>
      <div>
        <DisplayNested nestedObjected={data} />
      </div>
    </>
  );
}
