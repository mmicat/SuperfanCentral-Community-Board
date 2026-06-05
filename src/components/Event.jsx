const Event = ({ image, category, name, date, venue, link }) => {
  const hasRealLink = link && link !== "#";

  return (
    <article className="event-card">
      <img className="event-image" src={image} alt={name} />

      <div className="event-body">
        <span className="event-category">{category}</span>
        <h3 className="event-name">{name}</h3>

        <p className="event-date">📅 {date}</p>
        <p className="event-venue">📍 {venue}</p>

        <a
          className="event-link"
          href={link}
          target={hasRealLink ? "_blank" : undefined}
          rel={hasRealLink ? "noopener noreferrer" : undefined}
        >
          More info →
        </a>
      </div>
    </article>
  );
};

export default Event;