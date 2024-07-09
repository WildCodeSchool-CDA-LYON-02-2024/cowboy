import ResourceModel from "../models/ResourceDAO.js";
const Resource = new ResourceModel();
// sse headers
// const setSSEHeaders = (res) => {
//   res.setHeader("Content-Type", "text/event-stream");
//   res.setHeader("Cache-Control", "no-cache");
//   res.setHeader("Connection", "keep-alive");
// };

// // La méthode d'envoi des données SSE
// const sendData = (res, data) => {
//   res.write(`data: ${JSON.stringify(data)}\n\n`);
// };

// // La méthode pour gérer les erreurs SSE

// const sendError = (res, message) => {
//   res.write(`event: error\ndata: ${JSON.stringify({ message })}\n\n`);
// };

// ici je fetch les données sans sse headers
// const getResources1 = (res, loggedPlayerId) => {
//   Resource.getResources(loggedPlayerId)
//     .then((resources) => {
//       // res.json(resources);
//       // sendData(res, resources);
//       res.json(resources);
//     })
//     .catch((err) => {
//       console.error("Error fetching initial resources:", err);
//       sendError(res, "Error fetching initial resources");
//     });
// };

// // le fetch de ressources

// const browse = (req, res) => {
//   const loggedPlayerId = req.loggedPlayerId;
//   setSSEHeaders(res);

//   getResources1(res, loggedPlayerId);

//   // ici c'est l'envoie du donnéés continue
//   const getResource2 = setInterval(() => {
//     Resource.getResources(loggedPlayerId)
//       .then((resources) => {
//         console.log(resources, "CONTROLLER RESOURCE", res, "RESPONSE");
//         sendData(res, resources);
//       })
//       .catch((err) => {
//         console.error("Error fetching resources 2:", err);
//         sendError(res, "Error fetching resources 2 ");
//       });
//   }, 60000);

//   req.on("close", () => {
//     clearInterval(getResource2);
//     res.end();
//     console.log("SSE connection closed by client");
//   });

//   req.on("error", (err) => {
//     clearInterval(getResource2);
//     res.end();
//     console.error("SSE connection error:", err);
//   });
// };

const browseSimple = (req, res) => {
  const loggedPlayerId = req.loggedPlayerId;

  Resource.getResources(loggedPlayerId)
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      console.error(err);
    });
};
//UPDATE RESOURCES KEEP IT
const updateResources = async (req, res) => {
  const { colonyId } = parseInt(req.params);
  const { resources } = req.body;
  Resource.updateResource(colonyId, resources)
    .then((result) => {
      res.json({ message: "Ressource mise à jour avec succès", result });
    })
    .catch((err) => {
      console.error("Failed to update resource:", err);
      res.status(500).json({ error: "Failed to update resource" });
    });
};

export default { browseSimple, updateResources };
