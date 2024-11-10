/** @format */

import { Flex } from "@mantine/core";
import Breadcrumb from "../Admin/components/BreadCrumb";
import AddEvent from "../Admin/components/Events/AddEvent";
import EventTable from "../Admin/components/Events/EventsTable";
import { useDispatch, useSelector } from "react-redux";
import { deleteCheckEvent, getEvents } from "../service/Events";
import toast from "react-hot-toast";
import { setEvents } from "../Redux/reducer/event";
import { useEffect, useMemo, useState } from "react";
import FilterEvents from "../Admin/components/Events/FilterEvent";

function ManageEvents() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.event.events);

  // Slected Events
  const [selectedEvents, setSelectedEvents] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectionChange = (id) => {
    setSelectedEvents((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedEvents(events.map((item) => item.id));
    } else {
      setSelectedEvents([]);
    }
  };
  // Filter Events

  const filteredEvents = useMemo(() => {
    return events.filter((events) => {
      if (searchQuery.length > 3) {
        const searchText = searchQuery.toLowerCase();
        return (
          events.title.toLowerCase().trim().includes(searchText) ||
          events.description.toLowerCase().trim().includes(searchText)
        );
      } else {
        return true;
      }
    });
  });
  // Delete selected Events
  // Delete selected events
  const handleDeleteSelected = async () => {
    if (selectedEvents.length === 0) return;
    try {
      await deleteCheckEvent(selectedEvents); // Pass the array of IDs
      toast.success("Events deleted successfully");
      setSelectedEvents([]); // Clear selected events
      fetchEvents(); // Refresh event list to reflect changes
    } catch (error) {
      toast.error("Failed to delete events");
      console.log(error);
    }
  };

  // Fetch Events
  const fetchEvents = async () => {
    try {
      const data = await getEvents();
      dispatch(setEvents(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        className="border-b border-t border-gray-300 px-4"
      >
        <Breadcrumb title="Events" path="events" />
        <AddEvent
          selectedEvents={selectedEvents}
          handleDeleteSelected={handleDeleteSelected}
        />
      </Flex>
      <div className="py-4 w-[20%] px-4">
        <FilterEvents
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <EventTable
        events={filteredEvents}
        selectedEvents={selectedEvents}
        handleSelectionChange={handleSelectionChange}
        handleSelectAll={handleSelectionChange}
        handSelectAll={handleSelectAll}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default ManageEvents;
