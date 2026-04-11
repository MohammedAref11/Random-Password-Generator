let checkLight = localStorage.getItem("lightMode"); 
const switchBtn = document.getElementById("light-mode-btn"); 

//* Enable Light Mode

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

switchBtn.addEventListener("click", () => { 
    checkLight = localStorage.getItem('lightMode'); 
    if (checkLight !== 'enabled') { 
        enableLightMode(); 
    } else { 
        disableLightMode();
    }
})


