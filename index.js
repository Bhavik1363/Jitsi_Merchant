/* eslint-disable */

var firebaseConfig = {
  apiKey: "AIzaSyDQa7jQejd1eAi6Y-knWVuaw3L3nNBLRgY",
  authDomain: "jitsi-c6b81.firebaseapp.com",
  projectId: "jitsi-c6b81",
  storageBucket: "jitsi-c6b81.appspot.com",
  messagingSenderId: "198792555309",
  appId: "1:198792555309:web:eb39fbc387daf6d6e2c1a4",
  measurementId: "G-N5S8X5S0L5"
};
// Initialize Firebase
let db = firebase.initializeApp(firebaseConfig);
function GetRoomName() {
  // let room = '';

    let query = db.firestore().collection('Meeting').where("projectId", "==", 120);
    query.where("attended", "==", false).onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // res(doc.data().roomName)
        // Notification Function
        console.log("Room found", doc.data().roomName);
        
        console.log(Notification.permission);
        if (Notification.permission === "granted") {
          showNotificatoin(doc.data().roomName);
        } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then(permission => {
            if (permission === "granted") {
              showNotificatoin(doc.data().roomName);
            }
          });
        }

      })
    }
    )
  
}
function showNotificatoin(roomName) {
  localStorage.setItem('room-name',roomName)
  const notification = new Notification("New Meeting", {
    body: "Your customer waiting in virtual meeting room :"+roomName,
    requireInteraction : true,
    dir: "ltr",
    // renotify : true
  })
  notification.onclick = (e) => {
    db.firestore().collection('Meeting').doc(roomName).set({
      attended: true,
    }, { merge: true });
    console.log(window.location.href);
    window.open("newtab.html","_blank");
  
  };
}