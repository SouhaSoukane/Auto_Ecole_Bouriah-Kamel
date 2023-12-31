const mains = document.querySelectorAll(".main");

mains.forEach(main=>{
    main.addEventListener("click",()=>{
        main.classList.toggle("active");
    });
});