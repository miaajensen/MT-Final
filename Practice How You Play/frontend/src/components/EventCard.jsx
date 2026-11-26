function EventCard({ title, date, time, type }) {
  return (
    <div className="event-card">
      <span className="event-type">{type}</span>

      <h3>{title}</h3>

      <p>{date}</p>
      <p>{time}</p>
    </div>
  );
}

export default EventCard;
