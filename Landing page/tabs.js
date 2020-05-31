// Realizing categories tabs

// Getting created new tabs elements

const tabs = document.querySelectorAll(".category_tab");
const items = document.querySelectorAll(".category_item");
function toggleShow() {
    const target = this;
    const item = target.classList.contains("category_tab")
        ? target
        : target.parentElement;
    const id = item.dataset.tabId;

    tabs.forEach((tab) => {
        if (tab.dataset.tabId === id) {
            tab.classList.add("category_active");
        } else {
            tab.classList.remove("category_active");
        }
    });

    items.forEach((item) => {
        if (item.dataset.tabId === id) {
            item.classList.add("category_active");
        } else {
            item.classList.remove("category_active");
        }
    });
}

tabs.forEach((tab) => {
    tab.addEventListener("click", toggleShow);
});