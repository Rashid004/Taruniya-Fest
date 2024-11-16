/** @format */

import { Flex } from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import Breadcrumb from "../Admin/components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { setLeaderboardData } from "../Redux/reducer/leaderboard";
import toast from "react-hot-toast";
import LeaderBoardTable from "../Admin/components/LeaderBoard/LeaderBoardTabel";
import FilterLeaderBoard from "../Admin/components/LeaderBoard/FilterLeaderBoard";
import AddLeaderBoard from "../Admin/components/LeaderBoard/AddLeaderBoard";
import {
  deleteCheckLeaderBoard,
  deleteLeaderBoard,
  getLeaderBoards,
} from "../service/Leaderboard";

export default function ManageLeaderboard() {
  const dispatch = useDispatch();
  const leaderBoard = useSelector((state) => state.leaderboard.leaderboards);
  console.log(leaderBoard);
  const [searchQuery, setSearchQuery] = useState("");

  // Selected LeaderBoards
  const [selectedLeaderBoards, setSelectedLeaderBoards] = useState([]);

  // Selected LeaderBoards
  const handleSelectionChange = (id) => {
    setSelectedLeaderBoards((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Select All
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedLeaderBoards(leaderBoard.map((item) => item.id));
    } else {
      setSelectedLeaderBoards([]);
    }
  };

  // Filter LeaderBoards
  const filteredBlogs = useMemo(() => {
    return leaderBoard.filter((leaderboard) => {
      if (searchQuery.length > 3) {
        const searchText = searchQuery.toLowerCase();
        return (
          leaderboard.title.toLowerCase().trim().includes(searchText) ||
          leaderboard.description.toLowerCase().trim().includes(searchText)
        );
      } else {
        return true;
      }
    });
  }, [leaderBoard, searchQuery]);

  const handleDeleteSelected = async () => {
    if (selectedLeaderBoards.length === 0) return;
    try {
      await deleteCheckLeaderBoard(selectedLeaderBoards);
      toast.success("leaderBoard deleted successfully");
      setSelectedLeaderBoards([]);
    } catch (error) {
      toast.error("Failed to delete leaderBoard");
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = getLeaderBoards((data) => {
      dispatch(setLeaderboardData(data));
    });

    // Cleanup on unmount
    return () => unsubscribe && unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        className="border-b border-t border-gray-300 px-4"
      >
        <Breadcrumb title="LeaderBoard" path="Leaderboard" />
        <AddLeaderBoard
          selectedLeaderBoards={selectedLeaderBoards}
          handleDeleteSelected={handleDeleteSelected}
        />
      </Flex>
      <div className="py-4 w-[20%] px-4">
        <FilterLeaderBoard
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <LeaderBoardTable
        leaderBoard={filteredBlogs}
        selectedLeaderBoards={selectedLeaderBoards}
        handleSelectionChange={handleSelectionChange}
        handleSelectAll={handleSelectAll}
        searchQuery={searchQuery}
      />
    </div>
  );
}
