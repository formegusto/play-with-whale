import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [lists, setLists] = React.useState([12, 232, 123]);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get("/api/values")
      .then((res) => {
        console.log("res", res);
        setLists(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/value", { value });

        if (res.data.success) {
          setLists((prevList) => [...prevList, { value: res.data.value }]);
          setValue("");
        } else {
          throw new Error("실패유");
        }
      } catch (err) {
        alert("실패유");
        console.error(err);
      }
    },
    [value]
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <form className="example" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="input the message"
              value={value}
              onChange={onChange}
            />
            <button type="submit">확인</button>
          </form>
          <ul className="list">
            {lists && lists.map(({ value }, i) => <li key={i}>{value}</li>)}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
