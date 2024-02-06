import Header from "./Header.jsx";
import Main from "./Main.jsx";

import data from '../mockData/data';

const App = () => {
  return (
    <div>
      <Header />
      <Main products={data}/>
    </div>
  );
};

export default App;
