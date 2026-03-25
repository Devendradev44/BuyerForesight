import { useState, useEffect } from "react";
import { useUsers } from "../hooks/useUsers";
import { filterUsers, sortUsers } from "../utils/helpers";
import { UserTable } from "../components/UserTable";
import { Loader } from "../components/Loader";

export const Dashboard = () => {
  const { users, loading, error } = useUsers();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [sortKey, setSortKey] = useState<"name" | "company">("name");
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  if (loading) return <div className="p-6"><Loader /></div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  let processed = filterUsers(users, debouncedQuery);
  processed = sortUsers(processed, sortKey, order);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-6">

        <h1 className="text-2xl font-bold mb-4">
          User Directory Dashboard
        </h1>

        <div className="mb-4 flex items-center border rounded-lg px-3 py-2">
          <input
            className="w-full outline-none"
            placeholder="🔍 Search by name or email..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-3 mb-4">
          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => setSortKey("name")}
          >
            Sort Name
          </button>

          <button
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => setSortKey("company")}
          >
            Sort Company
          </button>

          <button
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
          >
            {order === "asc" ? "⬆ Asc" : "⬇ Desc"}
          </button>
        </div>

        <UserTable users={processed} query={debouncedQuery} />
      </div>
    </div>
  );
};