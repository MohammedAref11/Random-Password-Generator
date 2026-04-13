const switchThemeBtn = document.getElementById("light-mode-btn"); 
const lengthText = document.getElementById("length-num");
const rangeInput = document.getElementById("rangeInput"); 
const generatePassBtn = document.getElementById("generatePassBtn");
const pass1 = document.querySelector(".password-1");
const pass2 = document.querySelector(".password-2");
let checkLight = localStorage.getItem("lightMode");

//* Switch Theme
const enableLightMode = () => { 
    document.body.classList.add('light-mode'); 
    localStorage.setItem('lightMode', 'enabled');
}

const disableLightMode = () => { 
    document.body.classList.remove("light-mode"); 
    localStorage.setItem("lightMode", null); 
}

if (checkLight === 'enabled') { 
    enableLightMode(); 
}

switchThemeBtn.addEventListener("click", () => { 
    checkLight = localStorage.getItem('lightMode'); 
    if (checkLight !== 'enabled') { 
        enableLightMode(); 
    } else { 
        disableLightMode();
    }
})

const password1 = generateRandomPass(10); 
const password2 = generateRandomPass(10); 

function generateRandomPass(length) { 
    const chars = "qwertyuiopasdfghjklzxcvbnm!@#$%^&*<>?1234567890";
    randomPass = ""

    for (let i = 0; i < length; i++) { 
        const randomIndex = Math.floor(Math.random() * chars.length); 
        randomPass += chars[randomIndex]
    } 

    return randomPass
}




