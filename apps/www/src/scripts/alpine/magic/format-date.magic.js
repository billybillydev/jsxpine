export function formatDateMagic() {
  // return (
  //   fullDate: string,
  //   format: DateFormatType = "DDDD d MMMM YYYY",
  //   calendarType: CalendarType = "gregorian",
  //   months: string[],
  //   weekDays: string[]
  // ) => {
  //   let monthNames = months?.length
  //     ? months
  //     : calendarTypeMap.get(calendarType).months;
  //   let weekDaysNames = weekDays?.length
  //     ? weekDays
  //     : calendarTypeMap.get(calendarType).weekDays;
  //   const date = new Date(fullDate);
  //   const formattedDay = weekDaysNames[date.getDay()];
  //   const formattedDayShortName = weekDaysNames[date.getDay()].slice(0, 3);
  //   const formattedDate = ("0" + date.getDate()).slice(-2); // appends 0 (zero) in single digit date
  //   const formattedMonth = monthNames[date.getMonth()];
  //   const formattedMonthShortName = monthNames[date.getMonth()].substring(0, 3);
  //   const formattedMonthInNumber = ("0" + (date.getMonth() + 1)).slice(-2);
  //   const formattedYear = date.getFullYear();
    // const formattedDay = new Intl.DateTimeFormat(locale, {
    //   weekday: "long",
    // }).format(date);
    // const formattedDayShortName = new Intl.DateTimeFormat(locale, {
    //   weekday: "short",
    // }).format(date);
    // const formattedDate = ("0" + date.getDate()).slice(-2); // appends 0 (zero) in single digit date
    // const formattedMonth = new Intl.DateTimeFormat(locale, {
    //   month: "long",
    // }).format(date);
    // const formattedMonthShortName = new Intl.DateTimeFormat(locale, {
    //   month: "short",
    // }).format(date);
    // const formattedMonthInNumber = new Intl.DateTimeFormat(locale, {
    //   month: "numeric",
    // }).format(date);
    // const formattedYear = new Intl.DateTimeFormat(locale, {
    //   year: "numeric",
    // }).format(date);

  //   const dateFormatMap = new Map<DateFormatType, string>([
  //     [
  //       "M d, YYYY",
  //       `${formattedMonthShortName} ${formattedDate}, ${formattedYear}`,
  //     ],
  //     [
  //       "MM-dd-YYYY",
  //       `${formattedMonthInNumber}-${formattedDate}-${formattedYear}`,
  //     ],
  //     [
  //       "dd-MM-YYYY",
  //       `${formattedDate}-${formattedMonthInNumber}-${formattedYear}`,
  //     ],
  //     [
  //       "YYYY-MM-dd",
  //       `${formattedYear}-${formattedMonthInNumber}-${formattedDate}`,
  //     ],
  //     [
  //       "MM/dd/YYYY",
  //       `${formattedMonthInNumber}/${formattedDate}/${formattedYear}`,
  //     ],
  //     [
  //       "dd/MM/YYYY",
  //       `${formattedDate}/${formattedMonthInNumber}/${formattedYear}`,
  //     ],
  //     [
  //       "YYYY/MM/dd",
  //       `${formattedYear}/${formattedMonthInNumber}/${formattedDate}`,
  //     ],
  //     [
  //       "D d M YYYY",
  //       `${formattedDayShortName} ${formattedDate} ${formattedMonthShortName} ${formattedYear}`,
  //     ],
  //     ["MMMM d, YYYY", `${formattedMonth} ${formattedDate}, ${formattedYear}`],
  //     [
  //       "DDDD d MMMM YYYY",
  //       `${formattedDay} ${formattedDate} ${formattedMonth} ${formattedYear}`,
  //     ],
  //     [
  //       "DDDD d M YYYY",
  //       `${formattedDay} ${formattedDate} ${formattedMonthShortName} ${formattedYear}`,
  //     ],
  //   ]);
  //   return dateFormatMap.get(format);
  // };
}
