
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDhrW4Hd4XJK6X5UdmrmNHfmq5O7EBJpn4",
      authDomain: "lets-chat-46dad.firebaseapp.com",
      databaseURL: "https://lets-chat-46dad-default-rtdb.firebaseio.com",
      projectId: "lets-chat-46dad",
      storageBucket: "lets-chat-46dad.appspot.com",
      messagingSenderId: "76042964583",
      appId: "1:76042964583:web:4b16b8dbc3020696ec8ec2"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);








function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome "+user_name+"😀";





function addRoom(){

      room_name=document.getElementById("room_name").value;

      firebase.database().ref('/').child(room_name).update({

            purpose:"adding room"
      });

      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";

}


function redirectToRoomName(name){
      localStorage.setItem("room_name",name);

      window.location="kwitter_page.html";

}


