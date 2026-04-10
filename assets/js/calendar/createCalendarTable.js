function createCalendarTable(month, year) {
    const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = getFirstDayIndex(firstDayOfMonth);

    const calendar=document.getElementById('calendar');

    const existingTable = calendar.querySelector('table');
    if (existingTable) {
        existingTable.remove();
    }

    const existingFilters = calendar.querySelector('.month');
    if (!existingFilters) {
        calendar.appendChild(addCalendarFilters(month, year));
    }
    
    const table = document.createElement('table');
    const headerRow = document.createElement('tr');
    const tableBody = document.createElement('tbody');
    
    daysOfWeek.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);   
    var n_rows=calculateRows(firstDayOfMonth, daysInMonth);
    var date = 1;
    for (let i = 0; i < n_rows; i++) {
        
        const row = document.createElement('tr');

        daysOfWeek.forEach(async (day, index) => {
            
            const td = document.createElement('td');
            const initalDateReached = i===0 && index >= firstDayIndex;
            const finalDateReached = i> 0 && date <= daysInMonth;
            const cellContent=initalDateReached || finalDateReached
            if(cellContent){
                td.setAttribute('data-date', `${month+1}-${date++}-${year}`);
                
            }else{
                td.style.backgroundColor='grey';
            }
            row.appendChild(td);
        });
     
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);

    calendar.appendChild(table);

    tableBody.querySelectorAll('td[data-date]').forEach(cell => appendEventsToCalendar(cell));
}

