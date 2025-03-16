import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../../ErrorBoundary";
import Main from "../../pages/Main/Main";
import Contacts from "../Contacts/Contacts";
import NotFound from "../NotFound/NotFound";
import RenderQuest from "../../pages/Quest/RenderQuest";

function Content() {
  return (
    <div>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/detailed-quest/:id" element={<RenderQuest />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default Content;
