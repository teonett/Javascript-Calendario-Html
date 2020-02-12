function displayCalendar(){
 
    var htmlContent ="";
    var FebNumberOfDays ="";
    var counter = 1;
       
    var dateNow = new Date();
    var month = dateNow.getMonth();
   
    var nextMonth = month+1; //+1; //Used to match up the current month with the correct start date.
    var prevMonth = month -1;
    var day = dateNow.getDate();
    var year = dateNow.getFullYear();
    
    //Determing if February (28,or 29)  
    if (month == 1){
       if ( (year%100!=0) && (year%4==0) || (year%400==0)){
         FebNumberOfDays = 29;
       }else{
         FebNumberOfDays = 28;
       }
    }
    
    // names of months and week days.
    var monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var dayNames = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]
    
    // days in previous month and next one , and day of week.
    var nextDate = new Date(nextMonth +' 1 ,'+year);
    var weekdays= nextDate.getDay();
    var weekdays2 = weekdays
    var numOfDays = dayPerMonth[month];

    // this leave a white space for days of pervious month.
    while (weekdays>0){
       htmlContent += "<td class='monthPre'></td>";
    
    // used in next loop.
        weekdays--;
    }
    
    // loop to build the calander body.
    while (counter <= numOfDays){
    
        // When to start new line.
       if (weekdays2 > 6){
           weekdays2 = 0;
           htmlContent += "</tr><tr>";
       }
    
       // highlight current day using the CSS defined in header.
       if (counter == day){
           htmlContent +="<td class='dayNow'  onMouseOver='this.style.background=\"rgb(26, 25, 92)\"; this.style.color=\"#FFFFFF\"' onMouseOut='this.style.background=\"rgb(26, 25, 92)\"; this.style.color=\"#FFFFFF\"'>"+counter+"</td>";
       }else{
           htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"rgb(26, 25, 92)\"; this.style.color=\"#FFFFFF\"' onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"rgb(14, 14, 214)\"'>"+counter+"</td>"; 
       }
       
       weekdays2++;
       counter++;
    }
     
    // building the calendar html body.
    var calendarBody = "<table class='calendar' CELLSPACING='2' CELLPADDING='10'> <tr class='monthNow'><th colspan='7'>"
    +monthNames[month]+" "+ year +"</th></tr>";
    calendarBody +="<tr class='dayNames'>  <td>Domingo</td>  <td>Segunda</td> <td>Terça</td><td>Quarta</td> <td>Quinta</td> <td>Sexta</td> <td>Sábado</td> </tr>";
    calendarBody += "<tr>";
    calendarBody += htmlContent;
    calendarBody += "</tr></table>";

    // set the content of div .
    document.getElementById("calendar").innerHTML=calendarBody;
    
   }