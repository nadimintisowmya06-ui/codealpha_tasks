// Get all gallery images
const galleryItems = document.querySelectorAll(".gallery-item");
const images = document.querySelectorAll(".gallery-item img");

// Lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Filter buttons
const filterButtons = document.querySelectorAll(".filter-btn");

// Store the currently visible images
let visibleImages = Array.from(images);

// Current image index
let currentIndex = 0;


// ---------- Open Lightbox ----------

galleryItems.forEach((item) => {

    item.addEventListener("click", () => {

        // Get all currently visible images
        visibleImages = Array.from(
            document.querySelectorAll(".gallery-item:not(.hidden) img")
        );

        // Find the clicked image
        const clickedImage = item.querySelector("img");

        currentIndex = visibleImages.indexOf(clickedImage);

        // Show the image
        showImage(currentIndex);

        // Display lightbox
        lightbox.classList.add("show");

        // Prevent background scrolling
        document.body.style.overflow = "hidden";
    });

});


// ---------- Display Image ----------

function showImage(index) {

    // Keep index within the available range
    if (index < 0) {
        index = visibleImages.length - 1;
    }

    if (index >= visibleImages.length) {
        index = 0;
    }

    currentIndex = index;

    // Change lightbox image
    lightboxImage.src = visibleImages[currentIndex].src;

    // Change alternative text
    lightboxImage.alt = visibleImages[currentIndex].alt;
}


// ---------- Next Button ----------

nextBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    showImage(currentIndex + 1);

});


// ---------- Previous Button ----------

prevBtn.addEventListener("click", (event) => {

    event.stopPropagation();

    showImage(currentIndex - 1);

});


// ---------- Close Lightbox ----------

closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("show");

    document.body.style.overflow = "auto";

});


// ---------- Close by Clicking Outside Image ----------

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("show");

        document.body.style.overflow = "auto";
    }

});


// ---------- Keyboard Navigation ----------

document.addEventListener("keydown", (event) => {

    // Only work when lightbox is open
    if (!lightbox.classList.contains("show")) {
        return;
    }

    if (event.key === "ArrowRight") {
        showImage(currentIndex + 1);
    }

    if (event.key === "ArrowLeft") {
        showImage(currentIndex - 1);
    }

    if (event.key === "Escape") {

        lightbox.classList.remove("show");

        document.body.style.overflow = "auto";
    }

});


// ---------- Category Filters ----------

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        // Get selected category
        const selectedCategory = button.dataset.category;

        // Filter gallery items
        galleryItems.forEach((item) => {

            const itemCategory = item.dataset.category;

            if (
                selectedCategory === "all" ||
                itemCategory === selectedCategory
            ) {

                item.classList.remove("hidden");

            } else {

                item.classList.add("hidden");

            }

        });

    });

});
