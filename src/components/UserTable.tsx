import type { User } from "../types/user";
import { useNavigate } from "react-router-dom";

interface Props {
  users: User[];
  query: string;
}

export const UserTable = ({ users, query }: Props) => {
  const navigate = useNavigate();

  const highlight = (text: string, query: string) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-yellow-200">{part}</span>
      ) : (
        part
      )
    );
  };

  if (users.length === 0) {
    return <p className="text-center p-4">No users found</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Company</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr
              key={u.id}
              onClick={() => navigate(`/users/${u.id}`)}
              className="cursor-pointer border-t hover:bg-blue-50 transition"
            >
              <td className="p-3 font-medium">
                {highlight(u.name, query)}
              </td>
              <td className="p-3 text-gray-600">
                {highlight(u.email, query)}
              </td>
              <td className="p-3">{u.phone}</td>
              <td className="p-3">{u.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};