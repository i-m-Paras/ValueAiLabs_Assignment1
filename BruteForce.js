const events = [
  {
    event_id: "e1",
    source: "device1",
    type: "TEMPERATURE",
    generated_at: "2025-01-09T09:05:00",
    arrived_at: "2025-01-09T09:06:30",
    data: { temp: 22.5 }
  },
  {
    event_id: "e2",
    source: "device2",
    type: "HUMIDITY",
    generated_at: "2024-01-09T09:03:00",
    arrived_at: "2024-01-09T09:06:45",
    data: { humidity: 45 }
  }
];

events.sort((a, b) => {
  // Extract year, month, day, hour, minute, second for the first event
  let temp1 = a.generated_at;
  let year = parseInt(temp1.substring(0, 4));
  let mon = parseInt(temp1.substring(5, 7));
  let day = parseInt(temp1.substring(8, 10));
  let hour = parseInt(temp1.substring(11, 13));
  let min = parseInt(temp1.substring(14, 16));
  let sec = parseInt(temp1.substring(17, 19));

  // Extract year, month, day, hour, minute, second for the second event
  let temp2 = b.generated_at;
  let year2 = parseInt(temp2.substring(0, 4));
  let mon2 = parseInt(temp2.substring(5, 7));
  let day2 = parseInt(temp2.substring(8, 10));
  let hour2 = parseInt(temp2.substring(11, 13));
  let min2 = parseInt(temp2.substring(14, 16));
  let sec2 = parseInt(temp2.substring(17, 19));

  // Compare based on year, month, day, hour, minute, second
  if (year !== year2) return year - year2;
  if (mon !== mon2) return mon - mon2;
  if (day !== day2) return day - day2;
  if (hour !== hour2) return hour - hour2;
  if (min !== min2) return min - min2;
  return sec - sec2;
});

console.log(events);
