import { useContext } from "react";
import { Progress } from "flowbite-react";
import { UserContext } from "../context/UserContext";
import Profile from "./Profile";

const stats = [
  { label: "Courses", value: "6", icon: "📚", bg: "bg-blue-100 dark:bg-blue-900/40" },
  { label: "Attendance", value: "92%", icon: "✅", bg: "bg-green-100 dark:bg-green-900/40" },
  { label: "CGPA", value: "3.6", icon: "🏆", bg: "bg-amber-100 dark:bg-amber-900/40" },
];

const courses = [
  { name: "Web Development", progress: 80, color: "blue" },
  { name: "Database Systems", progress: 65, color: "green" },
  { name: "Data Structures", progress: 45, color: "yellow" },
];

function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="mt-1 text-blue-100">
          Good to see you, {user.name} 👋 Here is your academic overview.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${item.bg}`}>
              {item.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Koi props nahi, Profile khud context se data leta hai */}
        <Profile />

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:col-span-2">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Course Progress
          </h3>
          <div className="space-y-5">
            {courses.map((c) => (
              <div key={c.name}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{c.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{c.progress}%</span>
                </div>
                <Progress progress={c.progress} color={c.color} size="md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;