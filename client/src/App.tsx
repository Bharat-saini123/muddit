import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondStep from "./SecondStep";
import DataList from "./DataList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secondStep" element={<SecondStep />} />
        <Route path="/datList" element={<DataList />} />
      </Routes>
      <DataList />
    </BrowserRouter>
  );
};

export default App;
