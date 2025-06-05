import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <BrowserRouter basename="/ru"> {/* Добавляем basename для русского пути */}
        <Routes>
          <Route path="/" element={<Home/>}/> {/* Изменяем index на path="/" */}
          {/* Можно добавить другие роуты здесь */}
          {/* <Route path="/about" element={<About/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
