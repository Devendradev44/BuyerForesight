import { useEffect, useState } from "react";
import { fetchUsers } from "../api/userApi";
import type { User } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers()
      .then(setUsers)
      .catch(() => setError("Failed to fetch users"))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading, error };
};