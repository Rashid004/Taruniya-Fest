/** @format */

// src/components/admin/ManageAnnouncements.jsx
import { useState } from "react";

export default function ManageAnnouncements() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, text: "Welcome to the College Fest!" },
    { id: 2, text: "New event added: Coding Challenge." },
    { id: 3, text: "Check out our latest sponsors!" },
  ]);
  const [newAnnouncement, setNewAnnouncement] = useState("");

  const addAnnouncement = () => {
    const newId = announcements.length + 1;
    const newAnnounce = { id: newId, text: newAnnouncement };
    setAnnouncements([...announcements, newAnnounce]);
    setNewAnnouncement("");
  };

  return (
    <div>
      <h2>Manage Announcements</h2>
      <input
        type="text"
        value={newAnnouncement}
        onChange={(e) => setNewAnnouncement(e.target.value)}
        placeholder="Enter new announcement"
        className="border rounded p-2 mr-2"
      />
      <button
        onClick={addAnnouncement}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Add Announcement
      </button>
      <ul className="mt-4">
        {announcements.map((a) => (
          <li key={a.id} className="py-1">
            {a.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
