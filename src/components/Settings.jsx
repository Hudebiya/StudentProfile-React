import { useContext } from "react";
import { Button, ToggleSwitch } from "flowbite-react";
import { ThemeContext } from "../context/ThemeContext";

function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="mx-auto max-w-xl space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>

      <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
        <div>
          <p className="font-medium text-gray-900 dark:text-white">Appearance</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Current Theme: {theme}
          </p>
        </div>
        <ToggleSwitch
          checked={theme === "Dark"}
          onChange={toggleTheme}
          label={theme === "Dark" ? "Dark" : "Light"}
        />
      </div>

      <Button color="blue" className="w-full" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
}

export default Settings;