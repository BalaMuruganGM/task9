import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './Component/Form';

const App = () => {
  return (
    <BrowserRouter basename="/BalaMuruganGM/task9">
      <Routes>
        <Route path="/" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
