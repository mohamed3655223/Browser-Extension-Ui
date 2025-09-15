// const modeBtn = document.querySelector(".mode-icon");
// const modeIcon = document.querySelector(".modeIcon");
// const header = document.querySelector(".header");
// const cards = document.querySelectorAll(".card");
// const buttons = document.querySelectorAll("button");
// const word = document.querySelector(".word");
// const sortingBtns = document.querySelectorAll(".control button");
// const toggleBtns = document.querySelectorAll(".switch input");

// let lightMode = localStorage.getItem("light-mode");

// // Configuration for light mode classes
// const lightModeClasses = {
//     body: ["light-mode-body"],
//     header: ["light-mode-header"],
//     cards: ["light-mode-card"],
//     buttons: ["light-mode-button"],
//     word: ["light-mode-word"],
// };

// // Function to apply/remove classes
// const setLightMode = (enable) => {
//     document.body.classList.toggle(lightModeClasses.body[0], enable);
//     header.classList.toggle(lightModeClasses.header[0], enable);
//     cards.forEach(card => card.classList.toggle(lightModeClasses.cards[0], enable));
//     buttons.forEach(btn => btn.classList.toggle(lightModeClasses.buttons[0], enable));
//     word.classList.toggle(lightModeClasses.word[0], enable);
//     modeIcon.src = enable
//     ? "./assets/images/icon-moon.svg"
//     : "./assets/images/icon-sun.svg";

//     localStorage.setItem("light-mode", enable ? "enabled" : "disabled");
// };

// // Apply saved mode on load
// if (lightMode === "enabled") {
//     setLightMode(true);
// }

// // Toggle mode on button click
// modeBtn.addEventListener("click", () => {
//     const enable = localStorage.getItem("light-mode") === "disabled";
//     setLightMode(enable);
// });


// // Assign IDs and restore from localStorage
// function setIdForEveryCard() {
//     for (let i = 0; i < toggleBtns.length; i++) {
//         const card = toggleBtns[i].closest(".card");

//         // Assign an ID if not already set
//         if (!card.dataset.id) {
//             card.dataset.id = i + 1; // stable ID instead of random
//         }
//         const cardId = card.dataset.id;

//         // ---- Restore state from localStorage ----
//         const savedStatus = localStorage.getItem(`card-${cardId}`);
//         if (savedStatus) {
//             card.dataset.status = savedStatus;
//             if (savedStatus === "active") {
//                 toggleBtns[i].checked = true;
//                 toggleBtns[i].setAttribute("toggle", "checked");
//             } else {
//                 toggleBtns[i].checked = false;
//                 toggleBtns[i].removeAttribute("toggle");
//             }
//         } else {
//             // default state
//             card.dataset.status = toggleBtns[i].checked ? "active" : "inactive";
//         }

//         // ---- Save on change ----
//         toggleBtns[i].addEventListener("change", () => {
//             if (toggleBtns[i].checked) {
//                 toggleBtns[i].setAttribute("toggle", "checked");
//                 card.dataset.status = "active";
//             } else {
//                 toggleBtns[i].removeAttribute("toggle");
//                 card.dataset.status = "inactive";
//             }
//             localStorage.setItem(`card-${cardId}`, card.dataset.status);
//         });
//     }
// }

// // Call this on page load
// setIdForEveryCard();

// // Sorting Buttons Logic 
// sortingBtns.forEach((btn) => { 
//     btn.addEventListener("click", () => { 
//         sortingBtns.forEach(b => b.classList.remove("active")); 
//         btn.classList.add("active"); 
//         const btnName = btn.textContent.trim().toLowerCase(); 
//         cards.forEach((card) => { 
//             const status = card.dataset.status || "inactive"; 
//             if (btnName === "all" || btnName === status) { 
//                 card.classList.remove("hidden"); 
//             } else { 
//                 card.classList.add("hidden"); 
//             } 
//         }); 
//     }); 
// });