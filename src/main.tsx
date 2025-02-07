import { createRoot } from "react-dom/client";
import CsxlAboutPage from "./CsxlAboutPage";
import FirstPage from "./FirstPage";

const container = document.getElementById("container")!;
const root = createRoot(container);

root.render(<FirstPage />);
// root.render(<CsxlAboutPage />);