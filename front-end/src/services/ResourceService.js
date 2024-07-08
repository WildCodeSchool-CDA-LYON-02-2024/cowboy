// export const fetchGlobalResource = (token) => {
//   return new Promise((resolve, reject) => {
//     try {
//       const eventSource = new EventSource(
//         `${import.meta.env.VITE_BACKEND_URL}/api/resource`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       eventSource.onmessage = (event) => {
//         const newData = JSON.parse(event.data);
//         resolve(newData); 
//       };

//       eventSource.onerror = (err) => {
//         console.error("EventSource error:", err);
//         reject(err); 
//       };
//     } catch (err) {
//       console.error("EventSource setup error:", err);
//       reject(err); 
//     }
//   });
// };
