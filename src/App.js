import { useState } from "react";

const FundCalculator = () => {
  const [tutionFee, setTutionfee] = useState("");
  const [paidFee, setPaidfee] = useState("");
  const [location, setLocation] = useState("");
  const [remaining, setRemainingfee] = useState(0);
  const [totalFee, setTotalfee] = useState(0);

  const locationFees = {
    "inside-london": 1334,
    "outside-london": 1023,
  };

  const handleClick = () => {
    const tuition = parseFloat(tutionFee) || 0;
    const paid = parseFloat(paidFee) || 0;
    const remainingFee = tuition - paid;

    setRemainingfee(remainingFee);

    if (location === "inside-london" || location === "outside-london") {
      setTotalfee(remainingFee + (12 * locationFees[location]));

    } else {
      setTotalfee(remainingFee);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        fontFamily: "Arial",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Student Fund Calculator</h2>

      <label style={{ fontWeight: "bold", color: "#555" }}>First Year Tuition Fee</label>
      <input
        type="number"
        value={tutionFee}
        onChange={(e) => setTutionfee(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <label style={{ fontWeight: "bold", color: "#555" }}>Amount Already Paid</label>
      <input
        type="number"
        value={paidFee}
        onChange={(e) => setPaidfee(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <label style={{ fontWeight: "bold", color: "#555" }}>Where is your UK university located?</label>
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          display: "block",
          marginBottom: "15px",
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
        }}
      >
        <option value="">--Select--</option>
        <option value="inside-london">Inside London</option>
        <option value="outside-london">Outside London</option>
        <option value="dont-know">I don't know</option>
      </select>

      {location === "dont-know" && (
        <p style={{ color: "blue", fontSize: "14px" }}>
          If you do not know whether the UK university you have chosen is considered as inner
          London university or outer London university, contact your university admission or
          your university local representative to find this information.
        </p>
      )}

      <button
        onClick={handleClick}
        style={{
          marginTop: "15px",
          padding: "12px 20px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "#fff",
          fontWeight: "bold",
          width: "100%",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
      >
        Calculate
      </button>

      <div
        className="result"
        style={{
          marginTop: "25px",
          padding: "15px",
          borderRadius: "5px",
          backgroundColor: "#e9ecef",
          textAlign: "center",
        }}
      >
        <p style={{ margin: "5px 0", fontWeight: "bold" }}>Remaining Tuition Fee: £{remaining}</p>
        {(location === "inside-london" || location === "outside-london") && (
          <p style={{ margin: "5px 0", fontWeight: "bold" }}>
            Total Fee (including location allowance): £{totalFee}
          </p>
        )}
      </div>
    </div>
  );
};

export default FundCalculator;
