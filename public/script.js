document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');
  
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
    menuToggle.style.display = 'none';
  });
  

  closeMenu.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
    menuToggle.style.display = 'block';
  });


});


//   ecosystem section
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("[id$='-btn']");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => {
                btn.classList.remove("active-btn", "bg-white");
                btn.classList.add("bg-transparent");
                btn.querySelector("p").classList.remove("text-[#004A86]");
                btn.querySelector("p").classList.add("text-white");
                btn.querySelector("div > div").style.filter = "brightness(0) invert(1)"; // Change icon color
            });

            this.classList.add("active-btn", "bg-white");
            this.classList.remove("bg-transparent");
            this.querySelector("p").classList.remove("text-white");
            this.querySelector("p").classList.add("text-[#004A86]");
            this.querySelector("div > div").style.filter = ""; // Restore original icon color
        });
    });
});




  //ABHD PAGE SCRIPT
  //scroll number count
// function animateCounter(element, target, duration) {
//   let start = 0;
//   let increment = target / (duration / 10); 

//   let counter = setInterval(() => {
//       start += increment;
//       if (start >= target) {
//           start = target;
//           clearInterval(counter);
//       }
//       element.textContent = Math.floor(start).toLocaleString(); 
//   }, 10);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   let counterElement = document.querySelector('#counter'); 
//   let counterElement2 = document.querySelector('#counter2'); 
//   let counterElement3 = document.querySelector('#counter3'); 
//   animateCounter(counterElement, 7602433, 2000);
//   animateCounter(counterElement2, 305875, 3000);
//   animateCounter(counterElement3, 652848, 4000);
   
// });

// //navbar
// document.addEventListener("DOMContentLoaded", function () {
//   const menuBtn = document.getElementById("menu-btn");
//   const mobileMenu = document.getElementById("mobile-menu");

//   menuBtn.addEventListener("click", function () {
//       const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
//       menuBtn.setAttribute("aria-expanded", !isExpanded);
//       menuBtn.innerHTML = isExpanded ? "&#9776;" : "&#10006;"; 
//       mobileMenu.classList.toggle("hidden");
//   });
// });

// //Input Change
// document.addEventListener("DOMContentLoaded", function () {
//   const toggleIndicator = document.getElementById("toggleIndicator");
//   const aadharBtn = document.getElementById("aadharBtn");
//   const mobileBtn = document.getElementById("mobileBtn");
//   const aadharInput = document.getElementById("aadharInput");
//   const mobileInput = document.getElementById("mobileInput");
//   const prefix = "+91 | ";

//   aadharBtn.addEventListener("click", () => {
//       toggleIndicator.style.left = "1px";
//       aadharBtn.classList.add("text-white");
//       aadharBtn.classList.remove("text-gray-600");
//       mobileBtn.classList.add("text-gray-600");
//       mobileBtn.classList.remove("text-white");
//       aadharInput.classList.remove("hidden");
//       mobileInput.classList.add("hidden");
//   });

//   mobileBtn.addEventListener("click", () => {
//       toggleIndicator.style.left = "50%";
//       mobileBtn.classList.add("text-white");
//       mobileBtn.classList.remove("text-gray-600");
//       aadharBtn.classList.add("text-gray-600");
//       aadharBtn.classList.remove("text-white");
//       mobileInput.classList.remove("hidden");
//       aadharInput.classList.add("hidden");
      
//       if (!mobileInput.value.startsWith(prefix)) {
//           mobileInput.value = prefix;
//       }
//   });

//   aadharInput.addEventListener("input", (event) => {
//       let value = event.target.value.replace(/\D/g, "").substring(0, 12);
//       event.target.value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
//   });

//   mobileInput.addEventListener("focus", function () {
//       if (!mobileInput.value.startsWith(prefix)) {
//           mobileInput.value = prefix;
//       }
//   });

//   mobileInput.addEventListener("input", function (event) {
//       if (!mobileInput.value.startsWith(prefix)) {
//           mobileInput.value = prefix;
//       }

//       let rawValue = event.target.value.replace(prefix, "").replace(/\D/g, "").substring(0, 10);
//       event.target.value = prefix + rawValue.replace(/(\d{5})(?=\d)/g, "$1 ");
//   });

//   mobileInput.addEventListener("keydown", function (event) {
//       if (event.key === "Backspace" && mobileInput.selectionStart <= prefix.length) {
//           event.preventDefault(); 
//       }
//       if (!/[\d]/.test(event.key) && !["Backspace", "ArrowLeft", "ArrowRight"].includes(event.key)) {
//           event.preventDefault(); 
//       }
//   });
// });

// //asked question (last)
// function toggleFAQ(id) {
//   const answer = document.getElementById(`answer-${id}`);
//   const icon = document.getElementById(`icon-${id}`);

//   if (answer.classList.contains("hidden")) {
//       answer.classList.remove("hidden");
//       icon.innerHTML = `<img src="https://i.postimg.cc/MZ3zrWp2/Icon-3.png" alt="-" />`;
//   } else {
//       answer.classList.add("hidden");
//       icon.innerHTML = `<img src="https://i.postimg.cc/d0csm4th/Icon-2.png" alt="+" />`;
//   }
// }