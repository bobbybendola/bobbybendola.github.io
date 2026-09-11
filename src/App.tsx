import { Route, Routes } from "react-router-dom";

import { ScrollToHash } from "@/components/layout/ScrollToHash";
import { GoatCounter } from "@/components/layout/GoatCounter";
import { HomePage } from "@/pages/HomePage";
import { ProjectsPage } from "@/pages/ProjectsPage";

export default function App() {
  return (
    <>
      <ScrollToHash />
      <GoatCounter />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}
