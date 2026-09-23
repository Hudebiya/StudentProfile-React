import { Tabs, TabItem } from "flowbite-react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-900 transition-colors duration-300 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 dark:text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <Tabs aria-label="Student app tabs" variant="pills">
          <TabItem active title="Dashboard">
            <div className="pt-4">
              <Dashboard />
            </div>
          </TabItem>
          <TabItem title="Settings">
            <div className="pt-4">
              <Settings />
            </div>
          </TabItem>
        </Tabs>
      </main>
    </div>
  );
}

export default App;