import PublicNavBar from "./PublicNavBar";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center w-full px-2 h-18 bg-black text-white">
      <div className="flex-1 text-lg font-bold px-5">LOGO</div>
      <div className="flex-2 sm:flex-1">
        <PublicNavBar/>
      </div>
    </header>
  );
};

export default Header;
