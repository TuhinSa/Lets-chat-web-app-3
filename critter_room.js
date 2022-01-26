var firebaseConfig = {
    apiKey: "AIzaSyBnz7ssQVCQX1eVGzqa2TlnkTcsba9N2XA",
    authDomain: "lets-chat-web-app-b6ddb.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-b6ddb-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-b6ddb",
    storageBucket: "lets-chat-web-app-b6ddb.appspot.com",
    messagingSenderId: "272287124391",
    appId: "1:272287124391:web:db6b390d8a59d66f97c482",
    measurementId: "G-P8BW208PMH"
  };
  firebase.initializeApp(firebaseConfig);
username = localStorage.getItem("username");
document.getElementById("user").innerHTML = "Welcome " + "&nbsp" + username;
function addroom() 
{
    
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
          purpose : "storing room name"    
        })
        localStorage.setItem("room_name", room_name);
        window.location = "critter_page.html";
        
        
        
        
        
        
        
            

}
function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Names" + Room_names);
    row = "<div class='room_name' id= " + Room_names +" onclick='Redirect_to_room_name(this.id)'>#"+ Room_names + "</div><hr>"
    document.getElementById("output").innerHTML = row;
});});}
getData();
function Redirect_to_room_name(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "critter_page.html";
    
    }  