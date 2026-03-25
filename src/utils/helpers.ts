import type { User } from "../types/user";

export const filterUsers = (users: User[], query: string) => {
  return users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.email.toLowerCase().includes(query.toLowerCase())
  );
};

export const sortUsers = (
  users: User[],
  key: "name" | "company",
  order: "asc" | "desc"
) => {
  return [...users].sort((a, b) => {
    const valA = key === "company" ? a.company.name : a.name;
    const valB = key === "company" ? b.company.name : b.name;

    return order === "asc"
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA);
  });
};