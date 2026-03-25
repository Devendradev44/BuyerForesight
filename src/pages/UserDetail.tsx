import { useParams, useNavigate } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

export const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useUsers();

  const user = users.find((u) => u.id === Number(id));

  if (!user) return <div className="p-6">User not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">

        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-blue-500"
        >
          ← Back
        </button>

        <h2 className="text-2xl font-bold mb-4">{user.name}</h2>

        <div className="space-y-2">
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Company:</b> {user.company.name}</p>
          <p><b>Website:</b> {user.website}</p>
          <p><b>City:</b> {user.address.city}</p>
        </div>
      </div>
    </div>
  );
};