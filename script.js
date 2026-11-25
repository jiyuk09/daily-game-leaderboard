// Menu Toggle Animation
function myFunction(x) {
    x.classList.toggle("change");
    const navRight = document.getElementById('navRightMenu');
    navRight.classList.toggle('active');
}

// Back-to-Top Button
let mybutton = document.getElementById("topBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Supabase Configuration & Authentication Setup
const SUPABASE_URL = 'https://abhyqzixjwexmtjghfbw.supabase.co';          
const SUPABASE_ANON_KEY = 'sb_publishable_NfDy_UZOplFLCnwDWxzZSQ_Hy7UcUSA';   

// Initialize Supabase client safely
const _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Mobile Navbar Toggle Function
function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById("navRightMenu").classList.toggle("active");
}
