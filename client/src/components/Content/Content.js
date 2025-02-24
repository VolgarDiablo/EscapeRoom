import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../../ErrorBoundary";
import Main from "../../pages/Main/Main";
import Quest from "../../pages/Quest/Quest";
import Contacts from "../../pages/Contacts/Contacts";
import NotFound from "../../pages/NotFound/NotFound";

function Content() {
  return (
    <div>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="quest" element={<Quest />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default Content;
