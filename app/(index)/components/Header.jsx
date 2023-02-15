import Menu from './Menu';
import ThemeHandler from './ThemeHandler';

const Header = (props) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex w-full items-center py-4 backdrop-blur-sm transition-all duration-200 max-w-7xl mx-auto">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 pr-5">
        <div className="pl-10" />
        <Menu />
        <div className="flex items-center gap-5">
          <ThemeHandler />
        </div>
      </div>
    </header>
  );
};

export default Header;
