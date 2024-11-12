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
  const [searchQuery, setSearchQuery] = useState("");

  // Selected Events
  const [selectedEvents, setSelectedEvents] = useState([]);

  // Select Event
  const handleSelectionChange = (id) => {
    setSelectedEvents((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Select All Events
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedEvents(events.map((event) => event.id)); // Select all event IDs
    } else {
      setSelectedEvents([]); // Deselect all
    }
  };

  // Filter Events
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      if (searchQuery.length > 3) {
        const searchText = searchQuery.toLowerCase();
        return (
          event.title.toLowerCase().trim().includes(searchText) ||
          event.description.toLowerCase().trim().includes(searchText)
        );
      } else {
        return true;
      }
    });
  }, [events, searchQuery]);

  // Delete selected events
  const handleDeleteSelected = async () => {
    if (selectedEvents.length === 0) return;
    try {
      await deleteCheckEvent(selectedEvents);
      toast.success("Events deleted successfully");
      setSelectedEvents([]); // Clear selected events
    } catch (error) {
      toast.error("Failed to delete events");
      console.log(error);
    }
  };

  // Fetch and listen to Events in real-time
  useEffect(() => {
    const unsubscribe = getEvents((data) => {
      dispatch(setEvents(data));
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
        handleSelectAll={handleSelectAll}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default ManageEvents;
