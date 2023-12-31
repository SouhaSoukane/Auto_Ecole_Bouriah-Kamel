 // Array of image URLs

    const images = [
    "/media/plaques/p1.jpg","/media/plaques/p2.jpg","/media/plaques/p3.jpg","/media/plaques/p4.jpg","/media/plaques/p5.jpg",
    "/media/plaques/p6.jpg","/media/plaques/p7.jpg","/media/plaques/p8.jpg","/media/plaques/p9.jpg","/media/plaques/p10.jpg",
    "/media/plaques/p11.jpg","/media/plaques/p12.jpg","/media/plaques/p13.jpg","/media/plaques/p14.jpg","/media/plaques/p15.jpg",
    "/media/plaques/p16.jpg","/media/plaques/p17.jpg","/media/plaques/p18.jpg","/media/plaques/p19.jpg","/media/plaques/p20.jpg",
    "/media/plaques/p21.jpg","/media/plaques/p22.jpg","/media/plaques/p23.jpg","/media/plaques/p24.jpg","/media/plaques/p25.jpg",
    "/media/plaques/p26.jpg","/media/plaques/p27.jpg","/media/plaques/p28.jpg","/media/plaques/p29.jpg","/media/plaques/p30.jpg",
    "/media/plaques/p31.jpg","/media/plaques/p32.jpg","/media/plaques/p33.jpg","/media/plaques/p34.jpg","/media/plaques/p35.jpg",
    "/media/plaques/p36.jpg","/media/plaques/p37.jpg","/media/plaques/p38.jpg","/media/plaques/p39.jpg","/media/plaques/p40.jpg",
    "/media/plaques/p41.jpg","/media/plaques/p42.jpg","/media/plaques/p43.jpg","/media/plaques/p44.jpg","/media/plaques/p45.jpg",
    "/media/plaques/p46.jpg","/media/plaques/p47.jpg","/media/plaques/p48.jpg","/media/plaques/p49.jpg","/media/plaques/p50.jpg",
    "/media/plaques/p51.jpg","/media/plaques/p52.jpg","/media/plaques/p53.jpg","/media/plaques/p54.jpg","/media/plaques/p55.jpg",
    "/media/plaques/p56.jpg","/media/plaques/p57.jpg","/media/plaques/p58.jpg","/media/plaques/p59.jpg","/media/plaques/p60.jpg",
    "/media/plaques/p61.jpg","/media/plaques/p62.jpg","/media/plaques/p63.jpg","/media/plaques/p64.jpg","/media/plaques/p65.jpg",
    "/media/plaques/p66.jpg","/media/plaques/p67.jpg","/media/plaques/p68.jpg","/media/plaques/p69.jpg","/media/plaques/p70.jpg",
    "/media/plaques/p71.jpg","/media/plaques/p72.jpg","/media/plaques/p73.jpg","/media/plaques/p74.jpg","/media/plaques/p75.jpg",
    "/media/plaques/p76.jpg","/media/plaques/p77.jpg","/media/plaques/p78.jpg","/media/plaques/p79.jpg","/media/plaques/p80.jpg",
    "/media/plaques/p81.jpg","/media/plaques/p82.jpg","/media/plaques/p83.jpg","/media/plaques/p84.jpg","/media/plaques/p85.jpg",
    "/media/plaques/p86.jpg","/media/plaques/p86.jpg","/media/plaques/p88.jpg",];

    let currentIndex = 0;
    const displayedImage = document.getElementById("displayed-image");
   
    function changeImage(offset) {
      currentIndex += offset;
   
      // Wrap around to the first image if reaching the end
      if (currentIndex < 0) {
        currentIndex = images.length - 1;
      } else if (currentIndex >= images.length) {
        currentIndex = 0;
      }
   
      // Update the displayed image
      displayedImage.src = images[currentIndex];
 
 
 }