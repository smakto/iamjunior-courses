export function CategoryCard({ icon, header, cardClass, clickEvent, iconAlt }) {
  return (
    <div className={cardClass} onClick={clickEvent}>
      <img src={icon} alt={iconAlt}></img>
      <h5>{header}</h5>
    </div>
  );
}
