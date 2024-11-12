/** @format */

import { useEffect, useMemo, useState } from "react";
import { Flex } from "@mantine/core";
import AddAnnouncment from "../Admin/components/Announcement/AddAnnouncment";
import Breadcrumb from "../Admin/components/BreadCrumb";
import AnnouncementTable from "../Admin/components/Announcement/AnnouncementTable";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCheckAnnouncement,
  getAnnouncements,
} from "../service/Announcement";
import { setAnnouncementData } from "../Redux/reducer/announcementReducer";
import toast from "react-hot-toast";
import FilterAnnouncement from "../Admin/components/Announcement/FilterAnnouncement";

export default function ManageAnnouncements() {
  const dispatch = useDispatch();
  const announcements = useSelector(
    (state) => state.announcement.announcements
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAnnouncements, setSelectedAnnouncements] = useState([]);

  const handleSelectionChange = (id) => {
    setSelectedAnnouncements((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedAnnouncements(announcements.map((item) => item.id));
    } else {
      setSelectedAnnouncements([]);
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedAnnouncements.length === 0) return;
    try {
      await deleteCheckAnnouncement(selectedAnnouncements);
      toast.success("Announcements deleted successfully");
      setSelectedAnnouncements([]);
    } catch (error) {
      toast.error("Failed to delete announcements");
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = getAnnouncements((data) => {
      dispatch(setAnnouncementData(data));
    });

    return () => unsubscribe && unsubscribe();
  }, [dispatch]);

  const filteredAnnouncements = useMemo(() => {
    return announcements.filter((announcement) => {
      if (searchQuery.length > 3) {
        const searchText = searchQuery.toLowerCase();
        return (
          announcement.title.toLowerCase().includes(searchText) ||
          announcement.description.toLowerCase().includes(searchText) ||
          announcement.location.toLowerCase().includes(searchText) ||
          announcement.link.toLowerCase().includes(searchText)
        );
      }
      return true;
    });
  }, [announcements, searchQuery]);

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        className="border-b border-t border-gray-300 px-4"
      >
        <Breadcrumb title="Announcements" path="announcement" />
        <AddAnnouncment
          selectedAnnouncements={selectedAnnouncements}
          handleDeleteSelected={handleDeleteSelected}
        />
      </Flex>
      <div className="py-4 w-[20%] px-4">
        <FilterAnnouncement
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <AnnouncementTable
        announcements={filteredAnnouncements}
        selectedAnnouncements={selectedAnnouncements}
        handleSelectionChange={handleSelectionChange}
        handleSelectAll={handleSelectAll}
        searchQuery={searchQuery}
      />
    </div>
  );
}
