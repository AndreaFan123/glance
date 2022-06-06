import { getMessaging, getToken } from "firebase/messaging";
import { app } from "./config";

const messaging = getMessaging(app);

getToken(messaging, {
  vapidKey:
    "BN4HvI_5LYCIJISgjO8RXd3tFIG4U2xubu6IK_A6MrEDLfK7XJ2CQnk8m4vTt-8ozyP2WNDvBTggzAMM8DC-w28",
})
  .then((currentToken) => {
    if (currentToken) {
      console.log(currentToken);
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });
