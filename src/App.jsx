import { useEffect, useState } from "react";

import "./App.css";
import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

function App() {
  const [curentRate, setCurrentRate] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (curentRate != "") {
      setSubmit(true);
    }
  }, [curentRate]);

  return (
    <div className="main-container">
      {submit != "" ? (
        <ThankYouCard rate={curentRate} />
      ) : (
        <RatingCard setCurrentRate={setCurrentRate} />
      )}
    </div>
  );
}

export default App;
