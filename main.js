const switchThemeBtn = document.getElementById("light-mode-btn"); 
const lengthNum = document.getElementById("length-num");
const rangeInput = document.getElementById("rangeInput"); 
const generatePassBtn = document.getElementById("generatePassBtn");
const pass1 = document.querySelector(".password-1");
const pass2 = document.querySelector(".password-2");
const copyEl1 = document.getElementById("copyEl1");
const copyEl2 = document.getElementById("copyEl2");
let checkLight = localStorage.getItem("lightMode");

let passLength = 0;

function generateRandomPass() { 

    const chars = "qwertyuiopasdfghjklzxcvbnm!@#$%^&*<>?1234567890";
    randomPass = "";

    for (let i = 0; i < passLength; i++) { 
        const randomIndex = Math.floor(Math.random() * chars.length); 
        randomPass += chars[randomIndex]
    } 

    return randomPass;
}

const test = "hello"; 

generatePassBtn.addEventListener('click', () =>  { 
    const password1 = generateRandomPass();
    const password2 = generateRandomPass();
    pass1.textContent = password1; 
    pass2.textContent = password2; 
})

lengthNum.textContent = rangeInput.value; 
passLength = rangeInput.value;

rangeInput.addEventListener('input', (e) => { 
    passLength = e.target.value; 
    lengthNum.textContent = passLength; 
})

copyEl1.addEventListener('click', async () => { 
    try { 
        await navigation.clipboard.writeText(test)
        console.log("text copied")
    } catch(error) { 
        console.log(error.name, error.message)
    }
})

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