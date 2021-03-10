/* eslint-disable */

var firebaseConfig = {
  apiKey: 'AIzaSyC9MVIIOcSWDFT30U1s75s5sYdz3dhudpo',
      authDomain: 'rtc-server.firebaseapp.com',
      databaseURL: 'https://rtc-server.firebaseio.com',
      projectId: 'rtc-server',
      storageBucket: 'rtc-server.appspot.com',
      messagingSenderId: '38884098845',
      appId: '1:38884098845:web:8f3f0c021375b4388257f4'
};
// Initialize Firebase
let db = firebase.initializeApp(firebaseConfig);

function GetRoomName() {
  // let room = '';

  let query = db.firestore().collection('Meeting').where("projectId", "==", "60438790eefc9a00186931bc");
  query.where("attended", "==", 'start').onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {

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
  localStorage.setItem('room-name', roomName)
  const notification = new Notification("New Meeting", {
    body: "Your customer waiting in virtual meeting room :" + roomName,
    requireInteraction: true,
    dir: "ltr",
    // renotify : true
  })
  notification.onclick = (e) => {
    new Promise((res,rej)=>{
      db.firestore().collection('Meeting').doc(roomName).set({
      attended : 'Ongoing',
      },{merge : true})
      res('clicked')
    }).then(res=>{

      console.log(window.location.href);
      JitsiWindow = window.open("newtab.html", "_blank");
    })

  }
}