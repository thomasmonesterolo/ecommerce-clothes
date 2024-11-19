import Clothes from "./components/clothes/Clothes";
import MainLayout from "./components/mainLayout/MainLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <Clothes />
        </MainLayout>
      ),
    },
    {
      path: "/productos",
      element: (
        <MainLayout>
          <div>login</div>
        </MainLayout>
      ),
    },
    {
      path: "/productos",
      element: (
        <MainLayout>
          <div>login</div>
        </MainLayout>
      ),
    },
  ]);

  return (
    <div >
      {<RouterProvider router={router} />}
    </div>
  );
};

export default App;