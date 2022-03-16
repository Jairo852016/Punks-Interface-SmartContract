
import { Routes, Route } from 'react-router-dom';
import Home from "./views/home";
import MainLayout from "./layouts/main";
//yarn add @types/web3 -D
function App() {

  return (
    <>
    <MainLayout>
      <Routes>
        
        <Route path="/"element={<Home />} />
        
      </Routes>
      </MainLayout>
 
    </>
  );
}

export default App;


