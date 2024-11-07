/** @format */

import AddUserModal from "../../Admin/components/Users/AddUserModal";
import UserTable from "../../Admin/components/Users/UserTable";

function ManageUser() {
  return (
    <div>
      <AddUserModal />
      <UserTable />
    </div>
  );
}

export default ManageUser;
