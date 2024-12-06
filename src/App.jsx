import Clothes from "./components/clothes/Clothes";
import MainLayout from "./components/mainLayout/MainLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductoDetalle from "./components/productos/productodetalle";
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
      path: "/productos",
      element: (
        <MainLayout>
            <PantalonesPage/>
        </MainLayout>
  ),

children: [
        {
        path: ":id", // Ruta relativa para la página de pantalones
        element: (
          <MainLayout>
            <ProductoDetalle />
          </MainLayout>
        ),
      },
        
        {
          path: "Pantalones", // Ruta relativa para la página de pantalones
          element: (
            <MainLayout>
              <PantalonesPage />
            </MainLayout>
          ),
        },
        {
          path: "Buzos", // Ruta relativa para la página de buzos
          element: (
            <MainLayout>
              <BuzosPage />
            </MainLayout>
          ),
        },
   
      {
          path: "remeras", // Ruta relativa para la página de pantalones
          element: (
            <MainLayout>
              <RemerasPage />
            </MainLayout>
          ),
        },
        {
          path: "Accesorios", // Ruta relativa para la página de pantalones
          element: (
            <MainLayout>
              <AccesoriosPage/>
            </MainLayout>
          ),
        },
        {
          path: "camperas", // Ruta relativa para la página de pantalones
          element: (
            <MainLayout>
              <CamperasPage />
            </MainLayout>
          ),
        },
    
    
      ],

    },
    {
      path: "/contactos",
      element: (
        <MainLayout>
          <ContactosPage/>
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
