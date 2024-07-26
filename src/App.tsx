import { createBrowserRouter } from "react-router-dom";
import { BookStoreThemeProvider } from "./components/context/themeContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books",
    element: <div>도서 목록</div>,
  },
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
