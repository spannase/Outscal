export const Navbar = ({ handlePriceFilter, sort, handleOrder }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          justifyContent: "space-evenly",
          marginBottom: "90px",
          position: "fixed",
          width: "100%",
          background: "white",
        }}
      >
        <select
          onChange={handlePriceFilter}
          style={{ border: "none", height: "50px" }}
        >
          <option value="---">Price Filter</option>
          <option value="200">Below 200</option>
          <option value="400">200 to 400</option>
          <option value="600">400 to 600</option>
          <option value="800">600 to 800</option>
          <option value="1000">above 800</option>
        </select>

        <h2>Products page</h2>

        <button
          style={{
            height: "40px",
            margin: "15px",
            background: "white",
            border: "1px solid black",
          }}
          onClick={() => handleOrder()}
        >
          Sort by {sort}
        </button>
      </div>
    </div>
  );
};
