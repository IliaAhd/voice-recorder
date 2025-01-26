function Header({ children, relative = false }) {
  return (
    <header
      className={`w-full pb-12 text-center text-2xl font-bold ${relative && "relative"}`}
    >
      {children}
    </header>
  );
}

export default Header;
