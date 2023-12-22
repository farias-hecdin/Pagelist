import css from "./app.module.css";
import { BackupPage } from "./backup/backupPage.jsx";
import { HeaderMain } from "../layout/index.jsx";
import { HomePage } from "./home/homePage.jsx";
import { useState } from "react";

export const App = () => {
  // Mostrar la pagina activa
  const [activePage, setActivePage] = useState("Home");

  // Cambiar tema
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    setTheme((prev) => (prev === "dark" ? "dark" : "light"));
  };

  return (
    <div className={css.Container} data-theme={theme}>
      <HeaderMain pageName={activePage} updatePage={setActivePage} changeTheme={changeTheme} />
      <main className={css.Container_box}>
        {activePage === "Home" && <HomePage />}
        {activePage === "Backup" && <BackupPage />}
      </main>
      <footer className={css.Footer}>
        <p className={css.Footer_author}>
          Made by
          <a href="https://github.com/farias-hecdin/" target="_blank" rel="noopener noreferrer">
            Hecdin Farias
          </a>
        </p>
        <a
          className={css.Footer_github}
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
