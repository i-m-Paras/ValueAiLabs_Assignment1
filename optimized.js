function sortEvents(events) {
  return events.sort(
    (a, b) => new Date(a.generated_at) - new Date(b.generated_at)
  );
}

const events = [
  {
    event_id: "e1",
    source: "device1",
    type: "TEMPERATURE",
    generated_at: "2025-01-09T09:05:00",
    arrived_at: "2025-01-09T09:06:30",
    data: { temp: 22.5 },
  },
  {
    event_id: "e2",
    source: "device2",
    type: "HUMIDITY",
    generated_at: "2024-01-09T09:03:00",
    arrived_at: "2024-01-09T09:06:45",
    data: { humidity: 45 },
  },
];

const sortedEvents = sortEvents(events);
console.log(sortedEvents);
