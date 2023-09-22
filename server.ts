import { app } from "./app";

require("./.env").config();

// create server
// app.listen(process.env.PORT || 3000, () => {
//   console.log("Server is running on port 3000");
// });

// start server
app.listen(process.env.PORT, () => {
    console.log('server is connected with port ${process.env.PORT}');
});