/**script for home*/
// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        window.location.href = this.getAttribute("href");
    });
});

// Simple fade-in effect
window.addEventListener("load", () => {
    document.querySelector(".hero").style.opacity = "1";
});


/**script for about*/
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "auto" 
            });
        }
    });
});



/**script for contact*/

// Simple form handler
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully!");
    this.reset();
});

document.getElementById("submit").addEventListener("click", function() {
    alert("Message sent successfully!");
});


 function HandleSend(){
    const textInput = document.querySelector('.contact-form input[type="text"]');
    const emailInput = document.querySelector('.contact-form input[type="email"]');
    const msgInput = document.querySelector('.contact-form textarea');

    const text = textInput.value.trim();
    const email = emailInput.value.trim();
    const msg =  msgInput.value.trim();


    if (!text || !email || !placeholder){
        alert('Please fill in all fields.');
        return;

    }
 alert('Thanks,${text}! Your messaage has been sent!.');

 textInput.value ='';
 emailInput.value ='';
 msgInput.value ='';

    }

