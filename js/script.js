


// Toggle Navbar 
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
});

function hideSection() {
    
}


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
        document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
});

// hide popup when clicking outside of it

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = 
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}
