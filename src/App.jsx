import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../src/layouts/layout"; //현재 일반 레이아웃 적용(admin<->일반 구분 로직 추가 필요)
import Home from "./pages/hompage/Home";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home */}
        <Route index element={<Home />} />
        {/* HomeMid 프리뷰용 임시 라우터 */}
        <Route path="project-mid" element={<HomeMid />} />

        {/* Public pages */}
        <Route path="project" element={<div>PROJECT</div>} />
        <Route path="people" element={<div>PEOPLE</div>} />
        <Route path="recruit" element={<div>RECRUIT</div>} />

        {/* Sidebar (Admin) pages */}
        <Route path="applicant" element={<div>APPLICANT</div>} />
        <Route path="interview" element={<div>INTERVIEW</div>} />
        <Route path="application" element={<div>APPLICATION</div>} />
      </Route>
    </Routes>
  );
}

export default App;
