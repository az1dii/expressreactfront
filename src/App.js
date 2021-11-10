/////////////////////////////////////////////////////////////////////
// Our desired component Architecture
// -> App
//   -> Header
//   -> Main |state: people|
//     -> Switch
//       -> Route |path: "/"|
//         -> Index |Props: people, createPeople|
//       -> Route |path="/people/:id|
//         -> Show |Props: people, updatePeople, deletePeople|
/////////////////////////////////////////////////////////////////////

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
