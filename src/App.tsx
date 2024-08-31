import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Assignment from "./pages/Assignment";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/services/new":
        title = "Service Configuration"; // Adjust the title as needed
        metaDescription = "Configure your new service"; // Adjust the description as needed
        break;
      default:
        title = "Home"; // Default title
        metaDescription = "Welcome to our Application"; // Default description
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<div>Home Page</div>} /> // Default home page route
      <Route path="/services/new" element={<Assignment />} /> // Your specified route for the assignment UI
    </Routes>
  );
}
export default App;
