// navbar.js
function createNavbar() {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    
    // Add the content of the navbar
    navbar.innerHTML = `
    
        <div class="logo">
            <img src="/media/Asset 3@3x.png" alt="Logo">
        </div>
        <div class="navbar">
         <ul class="nav">
             <li><a href="/HTML/contact.html">راسلنا</a></li>
             <div class="test">
             <li class="has-submenu"><a >الاسئلة</a>
                 <ul class="submenu">
                     <li>
                         <a href="/HTML/Questions.html">اسئلة&nbsp;الامتحان</a>
                     </li>

                     <li>
                         <a href="/HTML/plaques.html">اشارات&nbsp;المرور</a>
                     </li>

                   

                 </ul>
             </li>
             </div>
             <li><a href="/HTML/def.html">التعريف&nbsp;بالمدرسة</a></li>
             <li><a href="/HTML/home.html">الرئيسية</a></li>
         </ul>

        </div>  
        
    `;
    
    // Insert the navbar at the beginning of the <body> element
    document.body.prepend(navbar);
}

// Call the createNavbar function to generate the navbar
createNavbar();
