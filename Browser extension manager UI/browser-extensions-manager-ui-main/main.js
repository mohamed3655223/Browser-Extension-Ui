// DOM Elements
const modeBtn = document.querySelector(".mode-icon");
const modeIcon = document.querySelector(".modeIcon");
const header = document.querySelector(".header");
const cards = document.querySelectorAll(".card");
const buttons = document.querySelectorAll("button");
const word = document.querySelector(".word");
const sortingBtns = document.querySelectorAll(".control button");
const toggleBtns = document.querySelectorAll(".switch input");

// LocalStorage Keys
const MODE_KEY = "light-mode";
const CARD_KEY_PREFIX = "card-";

// Light mode class configuration
const lightModeClasses = {
    body: "light-mode-body",
    header: "light-mode-header",
    card: "light-mode-card",
    button: "light-mode-button",
    word: "light-mode-word",
};

// -------------------- Light Mode --------------------
const setLightMode = (enabled) => {
    document.body.classList.toggle(lightModeClasses.body, enabled);
    header.classList.toggle(lightModeClasses.header, enabled);
    cards.forEach(card => card.classList.toggle(lightModeClasses.card, enabled));
    buttons.forEach(btn => btn.classList.toggle(lightModeClasses.button, enabled));
    word.classList.toggle(lightModeClasses.word, enabled);

    modeIcon.src = enabled
        ? "./assets/images/icon-moon.svg"
        : "./assets/images/icon-sun.svg";

    localStorage.setItem(MODE_KEY, enabled ? "enabled" : "disabled");
};

const initLightMode = () => {
    const savedMode = localStorage.getItem(MODE_KEY);
    if (savedMode === "enabled") setLightMode(true);

    modeBtn.addEventListener("click", () => {
        const enable = localStorage.getItem(MODE_KEY) === "disabled";
        setLightMode(enable);
    });
};

// -------------------- Cards & Toggles --------------------

const initCardToggles = () => {
    toggleBtns.forEach((toggle, index) => {
        const card = toggle.closest(".card");
        if (!card) return;

        // Assign stable ID
        card.dataset.id = card.dataset.id || index + 1;
        const cardId = card.dataset.id;

        // Restore state
        const savedStatus = localStorage.getItem(`${CARD_KEY_PREFIX}${cardId}`);
        const isActive = savedStatus === "active" || (!savedStatus && toggle.checked);

        updateCardState(card, toggle, isActive);

        // Save state on change
        toggle.addEventListener("change", () => {
            updateCardState(card, toggle, toggle.checked);
            localStorage.setItem(`${CARD_KEY_PREFIX}${cardId}`, card.dataset.status);
        });
    });
};

const updateCardState = (card, toggle, active) => {
    if (active) {
        toggle.setAttribute("toggle", "checked");
        toggle.checked = true;
        card.dataset.status = "active";
    } else {
        toggle.removeAttribute("toggle");
        toggle.checked = false;
        card.dataset.status = "inactive";
    }
};

// -------------------- Sorting --------------------
const initSorting = () => {
    sortingBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            sortingBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.textContent.trim().toLowerCase();
            cards.forEach((card) => {
                const status = card.dataset.status || "inactive";
                const shouldShow = filter === "all" || filter === status;
                card.classList.toggle("hidden", !shouldShow);
            });
        });
    });
};

// -------------------- Init --------------------
document.addEventListener("DOMContentLoaded", () => {
    initLightMode();
    initCardToggles();
    initSorting();
});





