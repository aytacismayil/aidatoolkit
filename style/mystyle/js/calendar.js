let calendarSettings = {
    date: moment().set('date', 1),
    today: moment()
  }
  
  const incrementMonth = () => {
    calendarSettings.date.add(1, 'Months')
    console.log(`incremented to ${calendarSettings.date}`)
    displayCalendar(calendarSettings)
  }
  
  const decrementMonth = () => {
    calendarSettings.date.subtract(1, 'Months')
    console.log(`decremented to ${calendarSettings.date}`)
    displayCalendar(calendarSettings)
  }
  
  const displayCalendar = (calendarSettings) => {
  
    const calendar = document.querySelector('.calendar-grid')
    
    const calendarTitle = calendarSettings.date.format('MMMM YYYY')
    const calendarTitl = calendarSettings.date.format('MMMM')
    const daysInMonth = calendarSettings.date.endOf('Month').date()
    const firstDay = calendarSettings.date.startOf('Month').isoWeekday()
  
    calendar.innerHTML = ''
    calendar.innerHTML = `
                          <div class="calendar-nav"><a onClick="decrementMonth()">&lt; </a></div>
                          <div class="calendar-title">${calendarTitle}</div>
                          <div class="calendar-nav calendar-nav__right"><a onClick="incrementMonth()"> &gt;</a></div>
                          <div class="calendar-dayname">Monday</div>
                          <div class="calendar-dayname">Tuesday</div>
                          <div class="calendar-dayname">Wednesday</div>
                          <div class="calendar-dayname">Thursday</div>
                          <div class="calendar-dayname">Friday</div>
                          <div class="calendar-dayname">Saturday</div>
                          <div class="calendar-dayname">Sunday</div>
                          `
    
    for (let day = 1; day <= daysInMonth; day++) {

      let calendarDay = document.createElement('div')
      let row = document.createElement('div')
      let col3 = document.createElement('div')
      let col9 = document.createElement('div')
      let color = document.createElement('div')
      let red = document.createElement('div')
      let green = document.createElement('div')
      let blue = document.createElement('div')
      let month = document.createElement('div')
      let week = document.createElement('div')
      let plan = document.createElement('div')
      let saveplan = document.createElement('div')
      var yuxarda=document.querySelector('.calendar-timme');
      yuxarda.innerHTML=calendarTitle;
      
      

      if (day === 1) {
        calendarDay.setAttribute('style', `grid-column-start:${firstDay}`)
        console.log(`firstDay = ${firstDay}`)
      }
      
      calendarDay.classList.add('calendar-table')
      row.classList.add('row')
      col3.classList.add("col-3", "col-md-3", "col-lg-3", "col-xl-3")
      col9.classList.add("col-9", "col-md-9", "col-lg-9", "col-xl-9", "mt-2")
      color.classList.add('calendar-color')
      red.classList.add('calendar-red')
      green.classList.add('calendar-green')
      blue.classList.add('calendar-blue')
      month.classList.add('month-week')
      week.classList.add('week-month')
      plan.classList.add('div-calendar-plan')
      saveplan.classList.add('save-plan')

      if (calendarSettings.today.month() == calendarSettings.date.month() && calendarSettings.today.year() == calendarSettings.date.year()) {
        if (calendarSettings.today.date() == day) {
          calendarDay.classList.add('current-day')
        }
      }
      
      month.innerHTML = calendarTitl+ day
    
      plan.innerHTML = 'Plans'
      saveplan.innerHTML = 'Repo12'
      
      calendarDay.appendChild(row)
      row.appendChild(col3)
      row.appendChild(col9)
      col3.appendChild(color)
      color.appendChild(red)
      color.appendChild(green)
      color.appendChild(blue)
      col9.appendChild(month)
      col9.appendChild(week)
      col9.appendChild(plan)
      col9.appendChild(saveplan)
      col9.appendChild(saveplan)
      calendar.appendChild(calendarDay)
     
    }

  }
  
  displayCalendar(calendarSettings);
  
  
