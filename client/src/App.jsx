import { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [page, setPage] = useState("register");

  return (
    <>
      {page === "register" && <Register setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} />}
    </>
  );
}

export default App;