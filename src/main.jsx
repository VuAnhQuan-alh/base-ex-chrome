import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import MainPage from "./pages/index.jsx";

function bootstrap() {
  if (document.querySelector("#rootX")) {
    renderExtension();
  }
}

function renderMain() {
  ReactDOM.createRoot(document.getElementById("mainX")).render(
    <React.StrictMode>
      <MainPage />
    </React.StrictMode>
  );
}
function renderExtension() {
  ReactDOM.createRoot(document.getElementById("rootX")).render(
    <React.StrictMode>
      <App mount={clickMount} />
    </React.StrictMode>
  );
}
async function clickMount() {
  const [tab] = await chrome.tabs.query({ active: true });

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      console.log("RootX append child!");
      if (!document.querySelector("#iconX")) {
        renderIcon();
      }
    },
  });
}
document.addEventListener("DOMContentLoaded", bootstrap());

function renderIcon() {
  document.body.style = "position: relative;";

  const sect = document.createElement("section");
  sect.setAttribute("id", "iconX");
  const iconX = `<img src="https://www.svgrepo.com/show/8815/coin.svg" class="logoX" alt="Coin logo" />`;
  sect.innerHTML = iconX;
  document.body.appendChild(sect);

  document.querySelector("#iconX").addEventListener("click", () => {
    if (
      document.querySelector('[href="/compose/tweet"]') &&
      !document.querySelector("#chestX")
    ) {
      const chestX = `<img src="https://www.svgrepo.com/show/8815/coin.svg" class="chestX" alt="Coin logo" />`;
      const node = document.createElement("section");
      node.setAttribute("id", "chestX");
      node.innerHTML = chestX;
      document
        .querySelector('[href="/compose/tweet"]')
        .parentElement.appendChild(node);
    }

    if (!document.querySelector("#mainX")) {
      document.querySelector("#iconX").classList.add("hiddenX");

      const node = document.createElement("section");
      node.setAttribute("id", "mainX");
      document.body.appendChild(node);
      renderMain();
    } else {
      document.querySelector("#mainX").classList.remove("hiddenX");
      document.querySelector("#iconX").classList.add("hiddenX");
    }
  });
}
