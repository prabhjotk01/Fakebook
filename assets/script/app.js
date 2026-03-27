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
        postBtn.disabled = postText.value.trim() === "" && postImage.files.length === 0;
});

    postImage.addEventListener("change", () => {
    postBtn.disabled = postText.value.trim() === "" && postImage.files.length === 0;
});


    postBtn.addEventListener("click", () => {
    const text = postText.value.trim();
    const file = postImage.files[0];

        if (text === "" && !file) return;

  
    const div = document.createElement("div");
        div.className = "post";

  
    const header = document.createElement("div");
        header.className = "post-header";

    const profileImg = document.createElement("img");
        profileImg.src = "assets/media/profile.png";
        profileImg.className = "profile-pic";

    const userInfoDiv = document.createElement("div");
    const nameEl = document.createElement("strong");
        nameEl.textContent = user.name;

    const dateEl = document.createElement("small");
        dateEl.textContent = new Date().toLocaleString();

  
    userInfoDiv.appendChild(nameEl);
    userInfoDiv.appendChild(document.createElement("br"));
    userInfoDiv.appendChild(dateEl);

    header.appendChild(profileImg);
    header.appendChild(userInfoDiv);
    div.appendChild(header);

  
    if (text !== "") {
        const p = document.createElement("p");
        p.textContent = text;
        div.appendChild(p);
  }

  
    if (file) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.className = "post-img";
        div.appendChild(img);
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