var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var dt = new Date();
var month = dt.getMonth();
var year = dt.getFullYear();

for (a = 0; a <= 11; a++) {
    document.write("<br/><h2>" + monthNames[a] + "</h2><br/>");
    
    var dt = new Date(2023, monthNums[a], 1);

    //Get first day of the month
    var first_day = dt.getDay();
    
    //Get last day of the month
    dt.setMonth(monthNums[a] + 1, 0);
    var last_date = dt.getDate();
        
    //Displaying the months calendar
    var dy = 1;
    document.write("<table><tr><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr><tr>");

    for (i = 0; i <= 41; i++) {
        if ((i % 7) === 0) {document.write("</tr><tr>"); } //if week is over start a new line
        if ((i >= first_day) && (dy <= last_date)) {
            var cname = monthNames[a] + dy; //classname assignment
            document.write("<td class=" + cname + ">" + dy + "</td>");
            dy = dy + 1;
        } else {document.write("<td></td>"); } //blank dates
    };

    document.write("</tr></table>");
};

var mybday = document.getElementsByClassName("September20");
mybday.setAttribute("style", "position: relative;");
