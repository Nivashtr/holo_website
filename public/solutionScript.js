document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      menuToggle.style.color='white';
      document.body.style.overflow = 'hidden';
      menuToggle.style.display = 'none';
    });
    
    closeMenu.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      menuToggle.style.color='';
      document.body.style.overflow = ''; 
      menuToggle.style.display = 'block';
    });

  });
  document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
  });
  document.getElementById('contactForm').addEventListener('click', async function(event) {
    event.preventDefault(); 

    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    // Reset messages
    successMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');

    // Get input field values
    const fname = document.getElementById('first-name').value;
    const lname = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const date_time = document.getElementById('date').value;
    const desc = document.getElementById('message').value;

    // Check if any field is empty
    if (!fname || !lname || !email || !date_time || !desc) {
        errorMessage.textContent = "All fields are required.";
        errorMessage.classList.remove('hidden');
        return; // Stop form submission
    }

    // Validate hCaptcha
    const captchaResponse = document.querySelector('.h-captcha [name="h-captcha-response"]').value;
    if (!captchaResponse) {
        errorMessage.textContent = "Please complete the hCaptcha verification.";
        errorMessage.classList.remove('hidden');
        return;
    }

    // Collect form data
    const formData = { fname, lname, email, date_time, desc };

    try {
        const response = await fetch('https://tifi3n7whl.execute-api.ap-south-1.amazonaws.com/prod/contactus', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (!response.ok) throw new Error();

        // Show success message
        successMessage.textContent = "Message sent successfully!";
        successMessage.classList.remove('hidden');
        document.querySelectorAll('#first-name, #last-name, #email, #date, #message').forEach(input => input.value = "");
        hcaptcha.reset()

    } catch {
        errorMessage.textContent = "Failed to send message. Please try again.";
        errorMessage.classList.remove('hidden');
    }
});
document.addEventListener("DOMContentLoaded", function () {
  const timeSlots = [
      { time: "09:00", available: false },
      { time: "09:30", available: false },
      { time: "10:00", available: true },
      { time: "10:30", available: true },
      { time: "11:00", available: true },
      { time: "11:30", available: true },
      { time: "12:00", available: false },
      { time: "12:30", available: true },
      { time: "13:00", available: true },
      { time: "13:30", available: true },
      { time: "14:00", available: true },
      { time: "14:30", available: false },
      { time: "15:00", available: false },
      { time: "15:30", available: true },
      { time: "16:00", available: true },
      { time: "16:30", available: true },
      { time: "17:00", available: true },
      { time: "17:30", available: true },
  ];

  let selectedDate = "";
  let selectedTime = "";

  const date = document.getElementById("date");
  const pickerContainer = document.getElementById("pickerContainer");
  const datePicker = document.getElementById("datePicker");
  const selectedDateEl = document.getElementById("selectedDate");
  const timeSlotsContainer = document.getElementById("timeSlots");

  // Open the calendar on clicking the input field
  date.addEventListener("click", function () {
      pickerContainer.style.display = "block";
  });

  // Initialize Flatpickr
  flatpickr(datePicker, {
      inline: true,
      appendTo: document.getElementById("calendarContainer"),
      dateFormat: "Y-m-d",
      minDate: "today",
      onChange: function (selectedDates, dateStr) {
          selectedDate = dateStr;
          selectedTime = "";
          selectedDateEl.textContent = `Selected:  ${dateStr}`;
          generateTimeSlots();
      },
  });

  function generateTimeSlots() {
      timeSlotsContainer.innerHTML = ""; // Clear existing slots

      timeSlots.forEach(({ time, available }) => {
          const button = document.createElement("button");
          button.textContent = time;
          button.className = `px-3 py-1 rounded border w-1/2 ${
              available ? "bg-white text-black border-gray-400 hover:bg-blue-500 hover:text-white" : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`;

          if (available) {
              button.onclick = () => {
                  selectedTime = time;
                  date.value = `${selectedDate} - ${selectedTime}`;
                  pickerContainer.style.display = "none"; // Hide after selection
                  highlightSelectedTime(time);
              };
          } else {
              button.disabled = true;
          }

          timeSlotsContainer.appendChild(button);
      });
  }

  function highlightSelectedTime(time) {
      document.querySelectorAll("#timeSlots button").forEach(btn => {
          if (btn.textContent === time) {
              btn.classList.add("bg-blue-500", "text-white");
          } else {
              btn.classList.remove("bg-blue-500", "text-white");
          }
      });
  }

  // Close the picker when clicking outside
  document.addEventListener("click", function (event) {
      if (!date.contains(event.target) && !pickerContainer.contains(event.target)) {
          pickerContainer.style.display = "none";
      }
  });
});
