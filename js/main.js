const header = document.getElementById('header');
const logo = document.querySelector('.logo > img');
const links = document.querySelectorAll('header a');
function showVideo(blockNumber) {
    const videoBlocks = document.querySelectorAll('.video-slide');
    videoBlocks.forEach(block => {
        block.classList.remove('active');
    });
    const selectedVideoBlock = document.getElementById(`video${blockNumber}`);
    selectedVideoBlock.classList.add('active');
}

function showBlock(index) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    const activeSlide = document.getElementById(`block${index}`);
    activeSlide.classList.add('active');
}

const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModal = document.querySelector(".close-modal");
openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
});
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "";
});
window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }
});