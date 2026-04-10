function calculateRows(firstDayOfMonth,daysInMonth) {    
    const firstDayIndex = (firstDayOfMonth + 6) % 7;
    const daysRemaining =firstDayIndex===0 ? daysInMonth : daysInMonth - (7 - firstDayIndex);
    //Calculate the number of rows needed for the calendar
    return firstDayIndex===0 ? Math.ceil(daysRemaining/7) : Math.ceil(daysRemaining/7) + 1;
}

function getFirstDayIndex(firstDayOfMonth) {
    const firstDayIndex = (firstDayOfMonth + 6) % 7;
    return firstDayIndex;
} 