// About Tabs

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});

// Portfolio Item Details Popup 

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();   
    }
});

function togglePortfolioPopup() {
    
}