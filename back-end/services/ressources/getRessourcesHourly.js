import ResourceModel from "../../models/ResourceDAO.js";

function updateResources() {
  const resourceModel = new ResourceModel();

  resourceModel
    .getResourceHour()
    .then(() => {
      console.log("Database updated.");
    })
    .catch((error) => {
      console.error("Error updating database:", error);
    });
}

export function startScheduledTasks() {
  updateResources();
  setInterval(updateResources, 60000);
}
