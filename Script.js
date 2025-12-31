document.addEventListener("DOMContentLoaded", () => {
    const screens = document.querySelectorAll(".screen");
    const music = document.getElementById("bg-music");
    
    // TERA MAIN MESSAGE (Pure Emotions ❤️)
    const longMessage = `Sun yaar…
Mujhe pata hai humare beech aaj‑kal kuch theek nahi chal raha,
shayad kuch hai bhi nahi.
Par main bas itna chahta hoon ki tu jo chahe, wo tujhe mil jaaye.
Chahe main teri chahne wali list mein hoon ya nahi,
bas tu hamesha khush rahe 🤍

Pata hai humari starting kahan se hui thi? 😂
Ek chhoti si meetup, achanak se…
aur tu, main, pata nahi kaise ek random GC mein aa gaya tha.
Tab socha bhi nahi tha ki wahan koi aisa hoga
jo mere saath 1.5 saal tak chalega.

Aur haan yaar… 1.5 saal ho gaye,
pata hi nahi chala.
Tujhe wo date yaad hai?
June 17 — jab tu mujhe mili thi,
jab humari baatein start hui thi.

Wo song yaad hai tujhe?
Ruk… uski kuch lines aaj bhi mujhe yaad hain:
“Haan, maanga jo mera hai, jaata kya tera hai?
Maine kaun si tujhse jannat maang li?
Kaisa Khuda hai tu, bas naam ka hai tu
Rabba, jo teri itni si bhi na chali”

Ye lines aaj tak mere saath hain,
shayad kabhi bhool bhi nahi paunga.

Phir meri life mein wo breakup hua…
jab mujhe dhokha mila.
Us time tu hi thi jo mere saath thi.
Dheere‑dheere baatein hui, dosti hui,
aur pata hi nahi chala kab kya ho gaya.

Sach bolun, mujhe kaafi options mile the
dubara relationship mein jaane ke liye.
Rakhi, Sanchita… aur bhi the,
naam tak yaad nahi.
Ek Priya thi — sirf friend hi rakha use,
aur wo mujhe tujhse door karna chahti thi,
par kar nahi paayi.

Phir aayi Sejal 😂
shayad tu use kabhi na bhool paaye.
Uski wajah se kitne kalesh hue the humare beech.
Tu bahut gussa hui thi,
aur tujhe manane mein maine bhi bahut papad bele the 😅

Par phir bhi main tujhse alag nahi ho paaya.
Pata nahi tere andar aisa kya tha
jo mujhe tujhse door jaane hi nahi deta.
Meri ex ne bhi try kiya wapas aane ka,
par tab tak meri life mein tu aa chuki thi.

Humari baatein itni badh gayi thi
ki mujhe pata hi nahi chala
kab dosti se love wali feeling aa gayi.
Tujhe aayi ya nahi, ya tu bata nahi paayi — mujhe nahi pata.
Par mujhe aayi thi.

Bahut mahine tak maine nahi bataya.
Phir ek din pata nahi kaunsa moment tha
jab maine apni feelings express kar di…
aur wahi se sab badal gaya.
Log bolte hain na,
agar friendship mein ek ko pyaar ho jaaye
to friendship bhi nahi bachi rehti.
Shayad wahi hua.
Agar nahi hota to aaj hum aise nahi hote.

Yaad hai wo din?
Ghanto‑ghanto baatein,
tu mujhe sone nahi deti thi 😂
main din mein so jata tha
aur tu call pe call karke pareshaan karti thi.
Bahut achhe din the yaar.

Shayad kisi ki nazar lag gayi.
Tu kehti thi na “nazar is real”
aur main mazaak udata tha.
Aaj main bhi maanta hoon —
nazar is real.

Phir tera college jaana…
aur ek‑ek mahina wait karna
ki kab tera message ya call aayega 🫠
Mujhe yaad hai kaise
maine tere bina ek‑ek din nikala 🙂❤️‍🩹

Bahut mushkil tha,
par phir jab mahine baad teri call aati…
kasam se, wo feeling koi samajh nahi sakta.
Pata nahi pyaar tha ya attachment,
waise bhi pyaar aur attachment mein farq hi kya hota hai?
Pyaar mein insaan wait karta hai,
attachment mein pagal ho jata hai.
Shayad main dono tha.

Main 1‑2 mahine,
phir 5 mahine bhi wait karta raha
sirf ek baar baat karne ke liye.
Shayad itna wait karna pyaar nahi kehlata,
abhi aur wait karna padega proof dene ke liye.

Tu kehti thi na
“online kaise pyaar ho sakta hai bina mile?”
Mere paas answer nahi hai.
Bas itna pata hai —
tere naam se mujhe pyaar hai,
jise sunte hi meri heartbeat tez ho jaati hai.
Teri awaaz se pyaar hai,
jise sunte hi sab normal ho jata hai.

Mujhe poori ki poori tu pasand hai.
Teri aankhein…
shayad main tujhe pasand na hoon,
shayad mera face bhi nahi.

Par jitna ho sakta hai
main kar raha hoon,
aur karta rahoonga.
Abhi mujhe bahut kuch paana hai —
ek achhi job,
tere paas hi thoda door ek ghar,
aur last mein… tujhe.

Agar tu saath rahi
to main sab karke dikhaunga.
Par agar tu aise hi hurt karti rahi
to sach mein main door chala jaunga…
bhool phir bhi nahi paunga.

Kuch aisi rahi humari kahani
2024 se 2025 tak.
Agar hum saath rahe
to 2026 mein aur bhi achhe moments banayenge 🤍

Ly ❤️‍🩹
Aur haan…
sorry thoda bhatak gaya,
aadat hai yaar topic se bhatakne ki 😅

Happpppppyyyy Birthday meri Shraddha 🎂❤️
Again and again.`;

    function showScreen(index) {
        screens.forEach(s => s.classList.remove("active"));
        screens[index].classList.add("active");
        
        // Final Screen Magic
        if (index === 5) { 
            startConfetti();
        }
    }

    // STEP 1: UNLOCK & MUSIC START
    document.getElementById("unlock-btn").addEventListener("click", () => {
        music.play().catch(e => console.log("Music interaction required"));
        showScreen(1); // Step 3
        startTimer();
    });

    // STEP 3: LOADING TIMER
    function startTimer() {
        const btn = document.getElementById("timer-next-btn");
        const progressBar = document.querySelector(".progress-bar");
        let seconds = 3;
        
        const countdown = setInterval(() => {
            seconds--;
            if (progressBar) progressBar.style.width = ((3 - seconds) / 3) * 100 + "%";
            
            if (seconds <= 0) {
                clearInterval(countdown);
                btn.classList.remove("disabled");
                btn.disabled = false;
                btn.innerText = "Unlock The Memories ✨";
            }
        }, 1000);
    }

    document.getElementById("timer-next-btn").addEventListener("click", () => {
        showScreen(2); // Step 4
    });

    // STEP 4: GREETING READY
    document.getElementById("ready-btn").addEventListener("click", () => {
        showScreen(3); // Step 5
        startTypewriter();
    });

    // STEP 5: TYPEWRITER LOGIC (Optimized)
    function startTypewriter() {
        const textElement = document.getElementById("typewriter-text");
        const nextBtn = document.getElementById("memories-next-btn");
        let i = 0;
        textElement.innerHTML = ""; 

        function type() {
            if (i < longMessage.length) {
                textElement.innerHTML += longMessage.charAt(i);
                i++;
                textElement.scrollTop = textElement.scrollHeight;
                
                // Beat-sync typing speed
                let speed = (longMessage.charAt(i-1) === '.' || longMessage.charAt(i-1) === '?' || longMessage.charAt(i-1) === '😂') ? 500 : 45;
                setTimeout(type, speed);
            } else {
                nextBtn.classList.remove("hidden");
                gsap.from(nextBtn, { y: 20, opacity: 0, duration: 1 });
            }
        }
        type();
    }

    document.getElementById("memories-next-btn").addEventListener("click", () => {
        showScreen(4); // Step 6
    });

    // STEP 6: END TO CAKE
    document.getElementById("end-btn").addEventListener("click", () => {
        showScreen(5); // Step 7
    });

    // FINAL: EXTREME CONFETTI
    function startConfetti() {
        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
          return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
          const timeLeft = animationEnd - Date.now();
          if (timeLeft <= 0) return clearInterval(interval);

          const particleCount = 50 * (timeLeft / duration);
          confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
          confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }
});
            
