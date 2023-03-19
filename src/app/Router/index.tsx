import { FC } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import { Playground } from "../../screens/Playground";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
};
