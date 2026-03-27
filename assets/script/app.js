'use strict';
import { Subscriber } from "./subscriber.js";

const user = new Subscriber(
  1,
  "Prabhjot Kaur",
  "prabh_01",
  "prabh@email.com",
  ["Travel", "Fashion"],
  ["Friends", "College"],
  true
);

const postText = document.getElementById("postText");
const postImage = document.getElementById("postImage");
const postBtn = document.getElementById("postBtn");
const posts = document.getElementById("posts");

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const userInfo = document.getElementById("userInfo");
const profilePic = document.querySelector(".profile-pic");

    postText.addEventListener("input", () => {
     if (postText.value.trim() !== "") {
            postBtn.disabled = false;
  } else {
         if (postImage.files.length > 0) {
      postBtn.disabled = false;
    }   else {
            postBtn.disabled = true;
    }
  }
});

    postImage.addEventListener("change", () => {
        if (postImage.files.length > 0) {
            postBtn.disabled = false;
  }     else {
            if (postText.value.trim() !== "") {
            postBtn.disabled = false;
    }   else {
            postBtn.disabled = true;
    }
  }
});



    postBtn.addEventListener("click", () => {

    let text = postText.value.trim();
    let file = postImage.files[0];

  
    if (text === "" && !file) {
        return;
  }

    let div = document.createElement("div");
        div.className = "post";

    let date = new Date().toLocaleString();

    let img = "";

        if (file) {
            let url = URL.createObjectURL(file);
        img = "<img src='" + url + "' class='post-img'>";
  }

  
    div.innerHTML = "";

    div.innerHTML += "<div class='post-header'>";
    div.innerHTML += "<img src='assets/media/profile.png' class='profile-pic'>";
    div.innerHTML += "<div>";
    div.innerHTML += "<strong>" + user.name + "</strong><br>";
    div.innerHTML += "<small>" + date + "</small>";
    div.innerHTML += "</div>";
    div.innerHTML += "</div>";

        if (text !== "") {
            div.innerHTML += "<p>" + text + "</p>";
  }

        if (img !== "") {
            div.innerHTML += img;
  }

        posts.prepend(div);

  
    postText.value = "";
    postImage.value = "";
    postBtn.disabled = true;
});



    profilePic.addEventListener("click", () => {
    modal.style.display = "block";
    userInfo.innerHTML = user.getInfo();
});


    closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


    window.addEventListener("click", (e) => {
    if (e.target === modal) {
     modal.style.display = "none";
  }
});