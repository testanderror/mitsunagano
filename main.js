document.addEventListener('DOMContentLoaded', function () {
  // Get references to the elements
  const service2 = document.getElementById('service2'); // Hospedaje
  const service3 = document.getElementById('service3'); //Equipaje
  const service4 = document.getElementById('service4'); // Toures guiados

  // Function to add service information based on service number
  function addServiceInfo(serviceNumber) {
    const secondContentCol = document.querySelector(
      '.content-col:nth-child(2)'
    );
    secondContentCol.innerHTML = ''; // Clear existing content

    const serviceInfo = document.createElement('h2');
    let infoText = '';

    // Determine info text based on serviceNumber
    switch (serviceNumber) {
      case 2:
        infoText =
          'Habitación tradicional con suelo de Tatami, baño japones, amenidades, cocina y balcón. Vista hacia la avenida y a pasos de la estación XXX';
        break;
      case 3:
        infoText =
          'Te cuido tu equipaje por tan solo ¥800 durante todo el tiempo que necesites.';
        break;
      case 4:
        infoText =
          'Toures guiados por toda el area con mas de 20 años de experiencia.';
        break;
      default:
        infoText = 'Info not available';
        break;
    }

    serviceInfo.textContent = infoText;
    serviceInfo.className = 'serviceInfo';
    secondContentCol.appendChild(serviceInfo);
  }

  // Event listeners for service elements (both click and hover)
  function setupServiceEventListeners(serviceElement, serviceNumber) {
    serviceElement.addEventListener('click', function () {
      addServiceInfo(serviceNumber);
    });

    serviceElement.addEventListener('mouseover', function () {
      addServiceInfo(serviceNumber);
    });

    serviceElement.addEventListener('mouseout', function () {
      // Clear the info when mouse leaves the service element
      const secondContentCol = document.querySelector(
        '.content-col:nth-child(2)'
      );
      secondContentCol.innerHTML = ''; // Clear existing content
    });
  }

  // Setup event listeners for each service element
  setupServiceEventListeners(service2, 2);
  setupServiceEventListeners(service3, 3);
  setupServiceEventListeners(service4, 4);
});

// Function to toggle mobile menu
function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('mobile-menu');
}

document.addEventListener('DOMContentLoaded', function () {
  // Get references to elements
  const menuBtn = document.getElementById('menuBtn');

  // Add click event listener to menu button
  menuBtn.addEventListener('click', toggleMobileMenu);
});

// Calendar Setup

let currentMonth = 4; // May is the 5th month (0-indexed)
const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];
const daysContainer = document.querySelector('.days');

// Function to get unavailable dates for a given month
// Function to get unavailable dates for a given month
function getUnavailableDates(monthIndex) {
  switch (monthIndex) {
    case 0: // January
      return [2, 3, 5, 8, 15, 16, 22]; // Example unavailable dates for January
    case 1: // February
      return [5, 7, 9, 11, 12, 13, 14, 25]; // Example unavailable dates for February
    case 2: // March
      return [1, 4, 5, 6, 12, 13, 21, 22, 23, 27]; // Example unavailable dates for March
    case 3: // April
      return [2, 5, 6, 7, 9, 11, 12, 13, 16, 23, 24]; // Example unavailable dates for April
    case 4: // May
      return [6, 7, 8, 9, 13, 14, , 20, 21, 22, 26, 27, 28]; // Example unavailable dates for May
    case 5: // June
      return [3, 4, 5, 10, 11, 12, 13, 17, 18, 21, 24]; // Example unavailable dates for June
    case 6: // July
      return [1, 2, 3, , 5, 6, 7, 8, 15, 16, 20, 22, 29]; // Example unavailable dates for July
    case 7: // August
      return [5, 7, 8, 9, 12, 13, 14, 19, , 22, 23, 2426]; // Example unavailable dates for August
    case 8: // September
      return [4, 5, 6, 7, 8, 11, 12, 13, 14, 18, 19, 20, 21, 25]; // Example unavailable dates for September
    case 9: // October
      return [2, 3, 4, 5, 6, 9, 10, 11, 12, 16, 17, 23, 24, 30]; // Example unavailable dates for October
    case 10: // November
      return [6, 7, 8, 11, 13, 20, 21, 22, 28, 27]; // Example unavailable dates for November
    default:
      return []; // Default to no unavailable dates
  }
}

// Function to generate calendar for a given month
function generateCalendar(monthIndex) {
  // Clear existing days
  daysContainer.innerHTML = '';

  // Update month and year in the header
  const monthYearElement = document.getElementById('monthYear');
  monthYearElement.textContent = months[monthIndex] + ' 2024';

  // Determine number of days in the selected month
  const daysInMonth = new Date(2024, monthIndex + 1, 0).getDate();

  // Get unavailable dates for the selected month
  const unavailableDates = getUnavailableDates(monthIndex);

  // Generate calendar days
  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement('div');
    dayElement.textContent = i;
    dayElement.classList.add('day');

    if (unavailableDates.includes(i)) {
      dayElement.classList.add('unavailable');
    }

    daysContainer.appendChild(dayElement);
  }
}

// Function to navigate to the previous month
function previousMonth() {
  currentMonth = (currentMonth - 1 + 12) % 12; // Wrap around to December if going back from January
  generateCalendar(currentMonth);
}

// Function to navigate to the next month
function nextMonth() {
  currentMonth = (currentMonth + 1) % 12; // Wrap around to January if going forward from December
  generateCalendar(currentMonth);
}

// Initial calendar generation for the current month (May 2024)
generateCalendar(currentMonth);
