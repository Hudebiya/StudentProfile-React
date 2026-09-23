import { useContext } from "react";
import { Avatar, Button } from "flowbite-react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { user } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200/70 bg-white/80 backdrop-blur dark:border-gray-700/70 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <Avatar placeholderInitials={user.name.charAt(0)} rounded />
          <div className="leading-tight">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Welcome, {user.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Role: {user.role}
            </p>
          </div>
        </div>

        <Button pill size="sm" color="blue" onClick={toggleTheme}>
          {theme === "Light" ? "🌙" : "☀️"}&nbsp;Toggle Theme
        </Button>
      </div>
    </header>
  );
}

export default Navbar;