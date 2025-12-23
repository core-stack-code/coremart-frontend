import Icon from "../../icons";

interface HamburgerProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}


const Hamburger: React.FC<HamburgerProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-expanded={isMenuOpen}
    >
      <span className="sr-only">Open main menu</span>
      <Icon name="Menu" width={24} height={24} />
    </button>
  )
}

export default Hamburger