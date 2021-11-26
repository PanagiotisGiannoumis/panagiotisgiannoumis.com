let photoDesigner = document.querySelector('.homepage-main-container-left');
 
let photoCoder = document.querySelector('.homepage-main-container-right');
  
 
photoCoder.addEventListener('mouseover', () => {
    photoDesigner.style.backgroundImage = `url('/img/me/home-cropped-opposite1.jpg')`;
});

photoCoder.addEventListener('mouseover', () => {
    photoCoder.style.backgroundImage = `url('/img/me/home-cropped-opposite2.jpg')`;
});
 
photoCoder.addEventListener('mouseleave', () => {
    photoDesigner.style.backgroundImage = `url('/img/me/home-cropped1.jpg')`;
});

photoCoder.addEventListener('mouseleave', () => {
    photoCoder.style.backgroundImage = `url('/img/me/home-cropped2.jpg')`;
});


