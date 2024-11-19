import PersistentDrawerLeft from "../sideBar/SideBar";

const MainLayout = ({ children }) => {
  return (
    <>
      {PersistentDrawerLeft()}
      {children}
    </>
  );
};

export default MainLayout;
