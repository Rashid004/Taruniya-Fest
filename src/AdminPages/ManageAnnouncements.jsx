/** @format */

import { useEffect, useMemo, useState } from "react";
import { Flex } from "@mantine/core";
import AddAnnouncment from "../Admin/components/Announcement/AddAnnouncment";
import Breadcrumb from "../Admin/components/BreadCrumb";
import AnnouncementTable from "../Admin/components/Announcement/AnnouncementTable";
import { useDispatch, useSelector } from "react-redux";
import { deleteAnnouncement, getAnnouncements } from "../service/Announcement";
import { setAnnouncementData } from "../Redux/reducer/announcementReducer";
import toast from "react-hot-toast";
import { Filter } from "lucide-react";
import FilterAnnouncement from "../Admin/components/Announcement/FilterAnnouncement";

export default function ManageAnnouncements() {
  const dispatch = useDispatch();
  const announcements = useSelector(
    (state) => state.announcement.announcements
  );

  const [searchQuery, setSearchQuery] = useState("");

  // Make Slected Announcements state to handle selected announcements
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

  // Delete selected announcements
  const handleDeleteSelected = async () => {
    console.log("Deleting selected announcements:", selectedAnnouncements);
    try {
      await deleteAnnouncement(selectedAnnouncements);
      toast.success("Announcements deleted successfully");
    } catch (error) {
      toast.error("Failed to delete announcements");
      console.log(error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const data = await getAnnouncements();
      dispatch(setAnnouncementData(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  // Filter Announcements
  const filteredAnnouncements = useMemo(() => {
    return announcements.filter((announcements) => {
      if (searchQuery.length > 3) {
        const searchText = searchQuery.toLowerCase();
        return (
          announcements.title.toLowerCase().trim().includes(searchText) ||
          announcements.description.toLowerCase().trim().includes(searchText) ||
          announcements.location.toLowerCase().trim().includes(searchText) ||
          announcements.link.toLowerCase().trim().includes(searchText)
        );
      } else {
        return true;
      }
    });
  });

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
