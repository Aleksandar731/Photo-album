document.addEventListener("DOMContentLoaded", function() {
    const imagesDiv = document.querySelector('.images');
  
    function showImages(imageUrls) {
      imagesDiv.innerHTML = '';
      imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        imagesDiv.appendChild(img);
      });
    }
  
    document.getElementById('show-all-btn').addEventListener('click', function() {
      const allImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg','7.jpg','8.jpg','10.jpg','11.jpg','12.jpg','14.jpg','15.jpg','16.jpg','5.jpg','18.jpg','19.jpg','4.jpg'];
      showImages(allImages);
    });
  
    document.getElementById('spain-btn').addEventListener('click', function() {
      const spainImages = ['1.jpg', '2.jpg'];
      showImages(spainImages);
    });
  
    document.getElementById('italy-btn').addEventListener('click', function() {
      const italyImages = ['3.jpg', '4.jpg', '5.jpg'];
      showImages(italyImages);
    });
  
    document.getElementById('france-btn').addEventListener('click', function() {
      const franceImages = ['6.jpg', '7.jpg', '8.jpg'];
      showImages(franceImages);
    });
  
    document.getElementById('serbia-btn').addEventListener('click', function() {
      const serbiaImages = ['10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg'];
      showImages(serbiaImages);
    });
  
    document.getElementById('albania-btn').addEventListener('click', function() {
      const albaniaImages = ['15.jpg', '16.jpg', '5.jpg', '18.jpg', '19.jpg', '4.jpg'];
      showImages(albaniaImages);
    });
});
