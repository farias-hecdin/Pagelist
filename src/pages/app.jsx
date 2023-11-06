import css from "./app.module.css";
import { HeaderMain } from "../layout/index.jsx";
import { HomePage } from "./homePage/homePage.jsx";
import { SavePage } from "./savePage/savePage.jsx";
import { useState } from "react";

export const App = () => {
  // Mostrar la pagina activa
  const [activePage, setActivePage] = useState("home");
  return (
    <div className={css.Container}>
      <HeaderMain pPageName={activePage} pChangePage={setActivePage} />
      <main className={css.Container_box}>
        {activePage === "home" && <HomePage />}
        {activePage === "manage" && <SavePage />}
      </main>
      <footer className={css.Container_footer}>
        <a
          className={css.Container_icon}
          href="https://github.com/farias-hecdin/Pagelist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <iconify-icon icon="mdi:github"></iconify-icon>
        </a>
      </footer>
    </div>
  );
};
