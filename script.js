document.addEventListener("DOMContentLoaded", () => {
const screens = document.querySelectorAll(".screen");
const music = document.getElementById("bg-music");

// TERA EMOTIONAL MESSAGE (Poora 1.5 saal ka safar)  
const longMessage = `Sun yaar…

Mujhe pata hai humare beech aaj‑kal kuch theek nahi chal raha,
shayad kuch hai bhi nahi.
Par main bas itna chahta hoon ki tu jo chahe, wo tujhe mil jaaye.
Chahe main teri chahne wali list mein hoon ya nahi,
bas tu hamesha khush rahe 🤍

Pata hai humari starting kahan se hui thi? 😂
Ek chhoti si meetup, achanak se… aur tu, main, pata nahi kaise ek random GC mein aa gaya tha.
Tab socha bhi nahi tha ki wahan koi aisa hoga jo mere saath 1.5 saal tak chalega.

Aur haan yaar… 1.5 saal ho gaye, pata hi nahi chala.
Tujhe wo date yaad hai? June 17 — jab tu mujhe mili thi, jab humari baatein start hui thi.

Wo song yaad hai tujhe? Ruk… uski kuch lines aaj bhi mujhe yaad hain:
“Haan, maanga jo mera hai, jaata kya tera hai? Maine kaun si tujhse jannat maang li? Kaisa Khuda hai tu, bas naam ka hai tu Rabba, jo teri itni si bhi na chali”
Ye lines aaj tak mere saath hain, shayad kabhi bhool bhi nahi paunga.

Phir meri life mein wo breakup hua… jab mujhe dhokha mila. Us time tu hi thi jo mere saath thi. Dheere‑dheere baatein hui, dosti hui, aur pata hi nahi chala kab kya ho gaya.

Sach bolun, mujhe kaafi options mile the... Rakhi, Sanchita, Priya, Sejal 😂
Uski wajah se kitne kalesh hue the humare beech. Tu bahut gussa hui thi, aur tujhe manane mein maine bhi bahut papad bele the 😅

Par phir bhi main tujhse alag nahi ho paaya. Pata nahi tere andar aisa kya tha jo mujhe tujhse door jaane hi nahi deta.
Humari baatein itni badh gayi thi ki mujhe pata hi nahi chala kab dosti se love wali feeling aa gayi.

Yaad hai wo din? Ghanto‑ghanto baatein, tu mujhe sone nahi deti thi 😂 main din mein so jata tha aur tu call pe call karke pareshaan karti thi. Bahut achhe din the yaar.

Shayad kisi ki nazar lag gayi. Tu kehti thi na “nazar is real” aur aaj main bhi maanta hoon — nazar is real.
Phir tera college jaana… aur ek‑ek mahina wait karna ki kab tera message ya call aayega 🫠

Pyaar mein insaan wait karta hai, attachment mein pagal ho jata hai. Shayad main dono tha.
Main 5 mahine bhi wait karta raha sirf ek baar baat karne ke liye.

Tere naam se mujhe pyaar hai, jise sunte hi meri heartbeat tez ho jaati hai. Teri awaaz se pyaar hai, jise sunte hi sab normal ho jata hai.
Mujhe poori ki poori tu pasand hai.

Abhi mujhe bahut kuch paana hai — ek achhi job, tere paas hi thoda door ek ghar, aur last mein… tujhe.
Agar tu saath rahi to main sab karke dikhaunga. Par agar tu aise hi hurt karti rahi to sach mein main door chala jaunga… bhool phir bhi nahi paunga.

2024 se 2025 tak ki kahani... I hope 2026 mein aur bhi achhe moments banayenge 🤍

Ly ❤️‍🩹
Happpppppyyyy Birthday meri Shraddha 🎂❤️`;

// SCREEN NAVIGATION LOGIC  
function showScreen(index) {  
    screens.forEach(s => s.classList.remove("active"));  
    screens[index].classList.add("active");  
      
    // Final Screen: Confetti Celebration  
    if (index === 5) {   
        setTimeout(startConfetti, 500);  
    }  
}  

// STEP 1: UNLOCK WITH AUDIO FIX (Critical for Mobile)  
const unlockBtn = document.getElementById("unlock-btn");  
  
const triggerUnlock = (e) => {  
    e.preventDefault();  
    music.play().catch(err => console.log("Audio Play Blocked:", err));  
      
    // GSAP Animation for smooth transition  
    gsap.to("#step1-2", { opacity: 0, scale: 0.9, duration: 0.5, onComplete: () => {  
        showScreen(1);  
        startTimer();  
    }});  
};  

unlockBtn.addEventListener("click", triggerUnlock);  
unlockBtn.addEventListener("touchstart", triggerUnlock, {passive: false});  

// STEP 3: PROGRESS TIMER  
function startTimer() {  
    const btn = document.getElementById("timer-next-btn");  
    const bar = document.querySelector(".progress-bar");  
    let timeLeft = 3;  
      
    const countdown = setInterval(() => {  
        timeLeft--;  
        if(bar) bar.style.width = ((3 - timeLeft) / 3) * 100 + "%";  
          
        if (timeLeft <= 0) {  
            clearInterval(countdown);  
            btn.classList.remove("disabled");  
            btn.disabled = false;  
            btn.innerText = "Click to Unlock Surprise ✨";  
            gsap.from(btn, {y: 10, repeat: -1, yoyo: true, duration: 0.5});  
        }  
    }, 1000);  
}  

document.getElementById("timer-next-btn").addEventListener("click", () => showScreen(2));  

// STEP 4: START MEMORIES  
document.getElementById("ready-btn").addEventListener("click", () => {  
    showScreen(3);  
    startTypewriter();  
});  

// STEP 5: TYPEWRITER (Tera Message Animation)  
function startTypewriter() {  
    const textElement = document.getElementById("typewriter-text");  
    const nextBtn = document.getElementById("memories-next-btn");  
    let i = 0;  
    textElement.innerHTML = "";   

    function type() {  
        if (i < longMessage.length) {  
            textElement.innerHTML += longMessage.charAt(i);  
            i++;  
            // Auto-Scroll to keep up with typing  
            textElement.scrollTop = textElement.scrollHeight;  
              
            // Realistic speed variations  
            let speed = (longMessage[i-1] === '.' || longMessage[i-1] === '🤍' || longMessage[i-1] === '😂') ? 500 : 40;  
            setTimeout(type, speed);  
        } else {  
            nextBtn.classList.remove("hidden");  
            gsap.from(nextBtn, { opacity: 0, scale: 1.2, duration: 1 });  
        }  
    }  
    type();  
}  

document.getElementById("memories-next-btn").addEventListener("click", () => showScreen(4));  
document.getElementById("end-btn").addEventListener("click", () => showScreen(5));  

// FINAL FINALE: CONFETTI ENGINE  
function startConfetti() {  
    const end = Date.now() + (10 * 1000);  
    const colors = ['#ff1493', '#9d00ff', '#ffffff', '#ff85a2'];  

    (function frame() {  
        confetti({  
            particleCount: 4,  
            angle: 60,  
            spread: 55,  
            origin: { x: 0 },  
            colors: colors  
        });  
        confetti({  
            particleCount: 4,  
            angle: 120,  
            spread: 55,  
            origin: { x: 1 },  
            colors: colors  
        });  

        if (Date.now() < end) {  
            requestAnimationFrame(frame);  
        }  
    }());  
}

});
