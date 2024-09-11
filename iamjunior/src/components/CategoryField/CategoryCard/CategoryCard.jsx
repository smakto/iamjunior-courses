export function CategoryCard({ icon, header, cardClass }) {
  return (
    <div className={cardClass}>
      <img src={icon}></img>
      <h5>{header}</h5>
    </div>
  );
}
