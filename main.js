function displayCalendar(){
 
    var htmlContent ="";
    var FebNumberOfDays ="";
    var counter = 1;
       
    var dateNow = new Date();
    var month = dateNow.getMonth();
   
    var nextMonth = month+1; 
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
    
    //Month Names 
    var ptMonthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var enMonthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
    var esMonthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    //Week Day Names
    var ptDayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    var enDayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
    var esDayNames = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado"];

    var monthNames = ptMonthNames;
    var dayNames = ptDayNames;

    document.getElementById('my-select').addEventListener('change', function() {
        
        var lng = this.value;

         if(lng == 1){
             monthNames = ptMonthNames;
             dayNames = ptDayNames;
         }

         if(lng == 2){
             monthNames = enMonthNames;
             dayNames = enDayNames;
         }
        
         if(lng == 3){
             monthNames = esMonthNames;
             dayNames = esDayNames;
         }

         buildCalendarBody()

      });

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
           htmlContent +="<td class='dayNow'  onMouseOver='this.style.background=\"rgb(26, 25, 92)\"; this.style.color=\"#FFFFFF\"' onMouseOut='this.style.background=\"rgb(26, 25, 92)\"; this.style.color=\"#FFFFFF\" style==\"rgb(26, 25, 92)\"'>"+counter+"</td>";
       }else{
           htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"rgb(26, 25, 92)\"; this.style.color=\"#FFFFFF\"' onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"rgb(14, 14, 214)\"'>"+counter+"</td>"; 
       }

       weekdays2++;
       counter++;
    }
     
    // building the calendar html body.
    function buildCalendarBody() {

        var calendarBody = "<table class='calendar' CELLSPACING='2' CELLPADDING='10'>" + 
                        "<tr class='monthNow'><th colspan='7'>" +
                        "<a id='btnPrevYr' href='#' title='Previous Year'><span><<  </span></a>" +
                        "<a id='btnPrev' href='#' title='Previous Month'><span> <  </span></a>"
                        + monthNames[month]+" "+ year +
                        "<a id='btnNextYr' href='#' title='Next Year'><span>  >> </span></a>" +
                        "<a id='btnNext' href='#' title='Next Month'><span>  > </span></a></th></tr>";
        calendarBody += "<tr class='dayNames'>";
        for(var i=0; i < 7;i++) { calendarBody += '<td>' + dayNames[i] + '</td>'; }
        calendarBody += "</tr>";
        calendarBody += "<tr>";
        calendarBody += htmlContent;
        calendarBody += "</tr></table>";

        // set the content of div .
        document.getElementById("calendar").innerHTML=calendarBody;

    }
    
    window.onload = this.buildCalendarBody();

   }
