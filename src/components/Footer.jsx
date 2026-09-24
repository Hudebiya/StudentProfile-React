import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

const quickLinks = ["Dashboard", "Profile", "Settings", "Courses"];

const contactInfo = [
  { icon: "📍", text: "Karachi, Pakistan" },
  { icon: "📞", text: "+92 300 0000000" },
  { icon: "🕘", text: "Mon - Sat, 9am - 5pm" },
];

const socials = [
  { icon: "🌐", label: "Website" },
  { icon: "💼", label: "LinkedIn" },
  { icon: "🐙", label: "GitHub" },
  { icon: "▶️", label: "YouTube" },
];

const headingClass = "mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white";
const linkClass = "text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400";
const socialClass = "flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-lg shadow-sm transition hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500";

function Footer() {
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="mt-10 border-t border-gray-200 bg-white/80 backdrop-blur dark:border-gray-700 dark:bg-gray-900/80">
      <div className="h-1 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500" />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 text-xl text-white shadow">🎓</span>
              <span className="text-lg font-bold text-gray-900 dark:text-white">Student Dashboard</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-black-400">
              A simple student dashboard built with React, Context API, Flowbite and Tailwind CSS.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={headingClass}>Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className={linkClass}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={headingClass}>Contact</h4>
            <ul className="space-y-2 text-sm text-black-500 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>{user.email}</span>
              </li>
              {contactInfo.map((item) => (
                <li key={item.text} className="flex items-center gap-2">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className={headingClass}>Follow Us</h4>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label} title={s.label} className={socialClass}>{s.icon}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-sm text-black-500 dark:border-gray-700 dark:text-gray-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Student Dashboard. Made by{" "}
            <span className="font-semibold text-gray-900 dark:text-white">{user.name}</span>.
          </p>

          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium dark:border-gray-700 dark:bg-gray-800">
            <span className={`h-2 w-2 rounded-full ${theme === "Dark" ? "bg-indigo-400" : "bg-amber-400"}`} />
            {theme} mode
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;