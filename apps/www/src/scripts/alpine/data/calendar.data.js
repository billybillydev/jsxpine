// import { CalendarType, DateFormatType } from "../../../common/types";
// import { calendarTypeMap } from "$scripts/alpine/utils/calendar";

// export function calendarData(inputs: {
//   date?: string;
//   format?: DateFormatType;
//   calendarType?: CalendarType;
//   disabledDates?: string[];
//   minYear?: number | undefined;
//   maxYear?: number | undefined;
// }) {
//   return {
//     async init() {
//       if (this.minYear && this.maxYear && this.maxYear < this.maxYear) {
//         throw new Error("max year cannot be lesser than min year");
//       }
//       this.dateRegulation(this.fullDate);

//       this.$watch("fullDate", (fullDateValue) => {
//         this.dateRegulation(fullDateValue);
//       });
//       this.$watch("selectedMonth", () => {
//         this.dispatchDate("select-month");
//         this.calculateDaysInMonth();
//       });
//       this.$watch("selectedYear", () => {
//         this.dispatchDate("select-year");
//         this.calculateDaysInMonth();
//       });
//     },
//     type: inputs?.calendarType ?? "gregorian",
//     format: inputs?.format ?? "MMMM d, YYYY",
//     selectedMonth: -1,
//     selectedYear: 0,
//     selectedDay: "",
//     minYear: inputs?.minYear,
//     maxYear: inputs?.maxYear,
//     fullDate: inputs?.date || new Date().toDateString(),
//     daysInMonth: [],
//     blankDaysInMonth: [],
//     disabledDates: inputs?.disabledDates ?? [],
//     months: inputs?.calendarType
//       ? calendarTypeMap.get(inputs?.calendarType).months
//       : calendarTypeMap.get("gregorian").months,
//     weekDays: inputs?.calendarType
//       ? calendarTypeMap.get(inputs?.calendarType).weekDays
//       : calendarTypeMap.get("gregorian").weekDays,
//     weekDayNamesShorten() {
//       return this.weekDays.map((day) => day.slice(0, 3));
//     },
//     selectDay(day: number) {
//       let selectedDate = new Date(this.selectedYear, this.selectedMonth, day);
//       this.selectedDay = day;
//       this.fullDate = selectedDate;
//     },
//     selectMonth(monthName: string) {
//       this.selectedMonth = this.months.findIndex(
//         (month) => month === monthName
//       );
//       if (this.selectedMonth < 0) {
//         this.selectedMonth = 1;
//       }
//     },
//     selectPreviousMonth() {
//       if (this.selectedMonth === 0) {
//         this.selectedYear--;
//         this.selectedMonth = 12;
//       }
//       this.selectedMonth--;
//     },
//     selectNextMonth() {
//       if (this.selectedMonth == 11) {
//         this.selectedMonth = 0;
//         this.selectedYear++;
//       } else {
//         this.selectedMonth++;
//       }
//     },
//     selectYear(year: number) {
//       this.selectedYear = String(year);
//     },
//     selectTodayAsDate() {
//       this.fullDate = new Date().toISOString();
//     },
//     isSelectedDay(day: number) {
//       const d = new Date(this.selectedYear, this.selectedMonth, day);
//       return (
//         this.$formatDate(this.fullDate, this.format, this.type) ===
//         this.$formatDate(d, this.format, this.type)
//       );
//     },
//     isToday(day: number) {
//       const today = new Date();
//       const d = new Date(this.selectedYear, this.selectedMonth, day);
//       return today.toDateString() === d.toDateString();
//     },
//     isDisabledDay(day: number) {
//       const date = new Date(this.selectedYear, this.selectedMonth, day);
//       if (this.minYear && this.minYear > -1) {
//         return this.selectedYear < this.minYear;
//       }
//       if (this.maxYear && this.maxYear > -1) {
//         return this.selectedYear > this.maxYear;
//       }
//       return this.disabledDates.some((d) => {
//         return new Date(d).toDateString() === date.toDateString();
//       });
//     },
//     isDisabledPreviousMonth() {
//       return this.selectedMonth === 0 && this.selectedYear <= this.minYear;
//     },
//     isDisabledNextMonth() {
//       return this.selectedMonth === 11 && this.selectedYear >= this.maxYear;
//     },
//     calculateDaysInMonth() {
//       let daysInMonth = new Date(
//         this.selectedYear,
//         this.selectedMonth + 1,
//         0
//       ).getDate();
//       // find where to start calendar day of week
//       let dayOfWeek = new Date(this.selectedYear, this.selectedMonth).getDay();
//       let blankdaysArray = [];
//       for (var i = 1; i <= dayOfWeek; i++) {
//         blankdaysArray.push(i);
//       }
//       let daysArray = [];
//       for (var i = 1; i <= daysInMonth; i++) {
//         daysArray.push(i);
//       }
//       this.blankDaysInMonth = blankdaysArray;
//       this.daysInMonth = daysArray;
//     },
//     dispatchDate(dispatchName: string) {
//       const date = new Date(
//         this.selectedYear,
//         this.selectedMonth,
//         this.selectedDay
//       );
//       this.$dispatch(dispatchName, {
//         formattedDate: this.$formatDate(
//           date.toDateString(),
//           this.format,
//           this.type
//         ),
//         date,
//         dateInMilliseconds: Date.parse(date.toDateString()),
//       });
//     },
//     dateRegulation(fullDate: string) {
//       this.$dispatch("select-date", {
//         formattedDate: this.$formatDate(fullDate, this.format, this.type),
//         date: new Date(fullDate),
//         dateInMilliseconds: Date.parse(this.fullDate),
//       });
//       const currentDate: Date = new Date(fullDate);
//       this.selectedMonth = currentDate.getMonth();
//       this.selectedYear = currentDate.getFullYear();
//       this.selectedDay = currentDate.getDate();
//       this.calculateDaysInMonth();
//     },
//   };
// }
