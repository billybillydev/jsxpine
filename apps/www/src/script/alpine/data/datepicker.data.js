// import { CalendarType, DateFormatType } from "$common/types";

// export function datepickerData(
//   date: string,
//   format: DateFormatType,
//   calendarType: CalendarType = "gregorian"
// ) {
//   return {
//     datePickerOpen: false,
//     datePickerValue: date
//       ? format
//         ? this.$formatDate(date, format, calendarType)
//         : date
//       : "",
//     open() {
//       this.datePickerOpen = true;
//     },
//     close() {
//       this.datePickerOpen = false;
//     },
//     toggle() {
//       this.datePickerOpen = !this.datePickerOpen;
//     },
//     pickDate(selectedDate) {
//       this.datePickerValue = selectedDate;
//       this.datePickerOpen = false;
//     },
//   };
// }
