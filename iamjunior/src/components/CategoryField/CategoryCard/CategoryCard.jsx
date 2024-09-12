export function CategoryCard({ icon, header, cardClass, clickEvent }) {
  return (
    <div className={cardClass} onClick={clickEvent}>
      <img src={icon}></img>
      <h5>{header}</h5>
    </div>
  );
}
