import Clothes from "./components/clothes/Clothes";
import MainLayout from "./components/mainLayout/MainLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RemerasPage from "./components/productos/RemerasPage";
import PantalonesPage from "./components/productos/PantalonesPage";
import BuzosPage from "./components/productos/BuzosPage";
import ContactosPage from "./components/contactos/ContactosPage";
import AccesoriosPage from "./components/productos/AccesoriosPage";
import CamperasPage from "./components/productos/CamperasPage";

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
      path: "/Pantalones", 
      element: (
        <MainLayout>
          <PantalonesPage />
        </MainLayout>
      ),
    },
    {
      path: "Buzos", 
      element: (
        <MainLayout>
          <BuzosPage />
        </MainLayout>
      ),
    },

    {
      path: "remeras",
      element: (
        <MainLayout>
          <RemerasPage />
        </MainLayout>
      ),
    },
    {
      path: "Accesorios",
      element: (
        <MainLayout>
          <AccesoriosPage />
        </MainLayout>
      ),
    },
    {
      path: "camperas",
      element: (
        <MainLayout>
          <CamperasPage />
        </MainLayout>
      ),
    },
    {
      path: "/contactos",
      element: (
        <MainLayout>
          <ContactosPage />
        </MainLayout>
      ),
    },
  ]);

  return <div>{<RouterProvider router={router} />}</div>;
};

export default App;
