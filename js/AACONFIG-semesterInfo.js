
var semesterInfo = {
    // The dates for the first and last day of classes (not including finals week).
    // Set the time to 4 AM ... because why not.
    firstDayOfSemester: new Date("05/13/2024 4:00:00"),
    lastDayOfSemester:  new Date("08/08/2024 4:00:00"),

    // Specify days on which there are no classes held at the college.
    // Each break is specified by a startDate and an endDate.
    // For single-day breaks, the startDate and endDate are the same.
    vacationDates: [
        new VacationDays("Memorial Day", new Date("05/27/2024"), new Date("05/27/2024")),
        new VacationDays("Break Week", new Date("06/22/2024"), new Date("06/30/2024")),
        new VacationDays("4th Holiday", new Date("07/04/2024"), new Date("07/04/2024")),
    ]
};
