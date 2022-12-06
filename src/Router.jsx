import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuspenseLoader from "./components/SuspenseLoader";
const Demo = lazy(() => import("./screens/Demo"));
const DemoRoute = lazy(() => import("./screens/DemoRoute"));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SuspenseLoader />}>
        <Routes>
          <Route path="/" element={<Demo />} />
          <Route path="/demo-route" element={<DemoRoute />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
