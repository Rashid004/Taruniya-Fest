/** @format */

import { Trash, PlusCircle, Edit } from "lucide-react";

function ManageUser() {
  return (
    <div className="py-5 border-b-2 border-gray-200 flex items-center justify-between">
      <div className="">
        <h1 className="text-2xl font-medium">Portal User</h1>
      </div>
      <div className="flex gap-5">
        <button className="flex items-center gap-2 border border-red-500 text-neutral-950 px-4 py-1 rounded hover:border-red-600">
          <Trash className="w-5 h-5" color="red" />
          Delete User
        </button>
        <button className="flex items-center gap-2 border border-green-500 text-neutral-950  px-4 py-1 rounded hover:border-green-600">
          <PlusCircle className="w-5 h-5" color="#22c55e" />
          Add User
        </button>
        <button className="flex items-center gap-2 border border-blue-500 text-neutral-950  px-4 py-1 rounded hover:border-blue-600">
          <Edit className="w-5 h-5" color="#3b82f6" />
          Edit User
        </button>
      </div>
    </div>
  );
}

export default ManageUser;
