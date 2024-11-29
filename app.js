// Function to open the image in a lightbox
function openPreview(imageElement) {
  const lightbox = document.getElementById('preview-lightbox');
  const previewImage = document.getElementById('preview-image');
  
  previewImage.src = imageElement.src;  // Set the image source
  lightbox.style.display = 'flex';  // Show the lightbox
}

// Function to close the lightbox
function closePreview() {
  const lightbox = document.getElementById('preview-lightbox');
  lightbox.style.display = 'none';  // Hide the lightbox
}
