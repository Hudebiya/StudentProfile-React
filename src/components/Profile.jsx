import { useContext } from "react";
import { Avatar, Badge } from "flowbite-react";
import { UserContext } from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  const rows = [
    { label: "Name", value: user.name },
    { label: "Email", value: user.email },
    { label: "Role", value: user.role },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="h-24 bg-linear-to-r from-indigo-500 to-purple-500" />

      <div className="px-6 pb-6">
        <div className="-mt-10 w-fit rounded-full ring-4 ring-white dark:ring-gray-800">
          <Avatar placeholderInitials={user.name.charAt(0)} size="lg" rounded />
        </div>

        <h2 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">
          Student Profile
        </h2>
        <Badge color="info" className="mt-1 w-fit">
          {user.role}
        </Badge>

        <dl className="mt-4 divide-y divide-gray-100 dark:divide-gray-700">
          {rows.map((row) => (
            <div key={row.label} className="flex justify-between gap-4 py-2.5 text-sm">
              <dt className="text-gray-500 dark:text-gray-400">{row.label}:</dt>
              <dd className="font-medium text-gray-900 dark:text-white">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Profile;