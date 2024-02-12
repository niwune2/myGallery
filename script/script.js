function showLightbox(imageSrc, detailLink) {
    document.querySelector('.lightbox-background').style.display = 'block';
    document.querySelector('.lightbox-content').src = imageSrc;
    document.querySelector('.lightbox-link').href = detailLink;
}

function closeLightbox() {
    document.querySelector('.lightbox-background').style.display = 'none';
}

document.querySelectorAll('.lightbox-trigger').forEach(image => {
    image.addEventListener('click', function() {
        showLightbox(this.src, this.getAttribute('data-link'));
    });
});