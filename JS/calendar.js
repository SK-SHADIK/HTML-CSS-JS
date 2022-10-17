const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// NEW DATE CURRENT YEAR AND MONTH
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// ARRAY OF MONTH LIST
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // FIRST DATE OF MONTH
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // LAST DATE OF MONTH
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // LAST DATE OF MONTH
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // LAST DATE OF PREV MONTH
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // CREATING LAST DATE OF PREV MONTH
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // CREATING LI OF ALL DAYS OF CURRENT MONTH
        // ADDING ACTIVE CLASS TO LI IF THE CURRENT DAY, MONTH, YEAR MATCHED
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // CREATING LI OF NEXT MONTH FIRST DAYS
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // PASSING CURRENT MONTH AND YEAR AS CURRENTDAY TEXT
    daysTag.innerHTML = liTag;
}
renderCalendar();
prevNextIcon.forEach(icon => { // GETTING PREV AND NEXT ICONS
    icon.addEventListener("click", () => { // ADDING CLICK EVENT IN BOTH ICON
        // IF CLICKED ICON IS PREV ICON THEN DECREMENT CURRENT MONTH BY 1 ELSE INCREMENT IT BY 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { // IF CURRENT MONTH IS LESS THAN 0 OR GRATER THAN 11
            // CREATING A NEW DATE OF CURRENT YEAR & MONTH AND PASS IT AS DATE VALUE
            date = new Date(currYear, currMonth);
            currYear = date.getFullYear(); // UPDATING CURRENT YEAR WITH NEW DATE YEAR
            currMonth = date.getMonth(); // UPDATING CURRENT MONTH WITH NEW DATE MONTH
        } else {
            date = new Date(); // PASS THE CURRENT DATE AS DATE VALUE
        }
        renderCalendar(); // CALLING RENDERCALENDER FUNCTION
    });
});