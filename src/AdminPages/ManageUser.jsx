/** @format */

import AddUserModal from "../Admin/components/Users/AddUserModal";
import UserTable from "../Admin/components/Users/UserTable";
import { getUsers } from "../service/User";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { setLoading, setUserData } from "../Redux/reducer/portalUser";
import Breadcrumb from "../Admin/components/BreadCrumb";
import { Flex } from "@mantine/core";
import FilterUser from "../Admin/components/Users/FilterUser";

function ManageUser() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  // Filter users
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      if (searchQuery.length > 2) {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
          user.name.toLowerCase().trim().includes(lowerCaseQuery) ||
          user.email.toLowerCase().trim().includes(lowerCaseQuery)
        );
      } else {
        return true;
      }
    });
  });

  // Fetch users data from Firebase
  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      dispatch(setUserData(data));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        className="border-b border-t border-gray-300 px-4"
      >
        <Breadcrumb title="Portal User" path="user" />
        <AddUserModal />
      </Flex>
      <div className="py-4 w-[20%] px-4">
        <FilterUser searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <UserTable users={filteredUsers} searchQuery={searchQuery} />
    </div>
  );
}

export default ManageUser;
