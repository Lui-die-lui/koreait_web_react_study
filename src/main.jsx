import { StrictMode } from "react"; // 이거 사용하면 콘솔에 2번씩 찍힘
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
