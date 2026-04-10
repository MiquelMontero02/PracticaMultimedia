function addCalendarFilters(currentMonth,currentYear){ 
    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const YEARS_RANGE = 2;
    const calendarFilterContainer=document.createElement('div');
    const monthSelect=document.createElement('select');
    const yearSelect=document.createElement('select');
    calendarFilterContainer.classList.add('month');
    
    monthSelect.id='months';
    monthSelect.setAttribute('aria-label','Selecciona un mes');
    
    yearSelect.id='years';
    yearSelect.setAttribute('aria-label','Selecciona un año');
    
    monthNames.forEach((month, index) => {
        const option=document.createElement('option');
        option.value=index;
        option.textContent=month;
        if(index===currentMonth){
            option.selected=true;
        }
        monthSelect.appendChild(option);
    });

    for(let y=YEARS_RANGE; y>0; y--){
        const option=document.createElement('option');
        option.value=currentYear-y;
        option.textContent=currentYear- y;
        if(y===1){
            option.selected=true;
        }
        yearSelect.appendChild(option);
    }

    monthSelect.addEventListener('change', (e)=>{
        const selectedMonth=parseInt(e.target.value);
        createCalendarTable(selectedMonth,currentYear);
    });

    yearSelect.addEventListener('change', (e)=>{
        const selectedYear=parseInt(e.target.value);
        createCalendarTable(currentMonth,selectedYear);
    });

    calendarFilterContainer.appendChild(monthSelect);
    calendarFilterContainer.appendChild(yearSelect);

    return calendarFilterContainer;
    
    }
