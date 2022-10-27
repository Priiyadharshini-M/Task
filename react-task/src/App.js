import { Routes, Route } from "react-router-dom"
import  SchoolList  from './components/SchoolList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SchoolList />} />
      </Routes>
    </>
  );
}

export default App;
