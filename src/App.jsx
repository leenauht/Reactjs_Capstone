import { BrowserRouter, Routes } from "react-router-dom";
import { renderRoutes } from "./routes";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<>loading....</>}>
        <Routes>{renderRoutes()}</Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
