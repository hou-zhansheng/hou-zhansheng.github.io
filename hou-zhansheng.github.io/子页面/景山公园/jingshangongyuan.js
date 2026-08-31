const photos = document.querySelectorAll('.photo');

photos.forEach((photo) => {
  photo.addEventListener('mouseenter', function () {
    photos.forEach((otherPhoto) => {
      if (otherPhoto!== photo) {
        otherPhoto.style.opacity = 0.5;
      }
    });
    photo.style.opacity = 1;
  });

  photo.addEventListener('mouseleave', function () {
    photos.forEach((otherPhoto) => {
      otherPhoto.style.opacity = 1;
    });
  });
});