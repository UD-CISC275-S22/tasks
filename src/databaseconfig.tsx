import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "../firebasecofig/cisc2-7ec71-firebase-adminsdk-g0umi-4ec0da32d3.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
    databaseURL: "https://cisc2-7ec71-default-rtdb.firebaseio.com"
});

export const database = admin.database();

console.log(database.ref("class/").once("value"));
