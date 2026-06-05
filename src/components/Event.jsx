const Event = ({ image, category, name, date, venue }) => {
  return (
    <article className="event-card">
      <img className="event-image" src={image} alt={name} />

      <div className="event-body">
        <span className="event-category">{category}</span>
        <h3 className="event-name">{name}</h3>

        <p className="event-date">📅 {date}</p>
        <p className="event-venue">📍 {venue}</p>
      </div>
    </article>
  );
};

export default Event;