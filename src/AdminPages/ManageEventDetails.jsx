/** @format */

import { useEffect, useState } from "react";
import { Button, TextInput, Textarea, Modal, Flex } from "@mantine/core";
import {
  getEventDetails,
  createEventDetail,
  updateEventDetail,
  deleteEventDetail,
} from "../service/Events";

function ManageEventDetails() {
  const [eventDetails, setEventDetails] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDetail, setCurrentDetail] = useState({
    heading: "",
    events: [],
  });
  const [selectedId, setSelectedId] = useState("");

  const fetchEventDetails = async () => {
    const data = await getEventDetails();
    setEventDetails(data);
  };

  useEffect(() => {
    fetchEventDetails();
  }, []);

  const handleAddEventDetail = async () => {
    await createEventDetail(selectedId, currentDetail);
    fetchEventDetails();
    setIsModalOpen(false);
  };

  const handleUpdateEventDetail = async () => {
    await updateEventDetail(selectedId, currentDetail);
    fetchEventDetails();
    setIsModalOpen(false);
  };

  const handleDeleteEventDetail = async (id) => {
    await deleteEventDetail(id);
    fetchEventDetails();
  };

  return (
    <div>
      <Button onClick={() => setIsModalOpen(true)}>Add Event Detail</Button>
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add/Edit Event Detail"
      >
        <TextInput
          label="Heading"
          value={currentDetail.heading}
          onChange={(e) =>
            setCurrentDetail({ ...currentDetail, heading: e.target.value })
          }
          required
        />
        <Textarea
          label="Events JSON"
          placeholder="Enter events array as JSON"
          value={JSON.stringify(currentDetail.events, null, 2)}
          onChange={(e) =>
            setCurrentDetail({
              ...currentDetail,
              events: JSON.parse(e.target.value),
            })
          }
          required
        />
        <Flex justify="flex-end" mt="md">
          <Button onClick={handleAddEventDetail}>Save</Button>
        </Flex>
      </Modal>

      <div>
        {eventDetails.map((detail) => (
          <div key={detail.id}>
            <h3>{detail.heading}</h3>
            <Button onClick={() => handleDeleteEventDetail(detail.id)}>
              Delete
            </Button>
            <Button
              onClick={() => {
                setSelectedId(detail.id);
                setCurrentDetail(detail);
                setIsModalOpen(true);
              }}
            >
              Edit
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageEventDetails;
