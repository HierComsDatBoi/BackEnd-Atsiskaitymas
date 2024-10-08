import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllBooks from "./pages/AllBooks";
import Book from "./pages/Book";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="allBooks">
          <Route index element={<AllBooks />} />
          <Route path=':id' element={<Book/>} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;