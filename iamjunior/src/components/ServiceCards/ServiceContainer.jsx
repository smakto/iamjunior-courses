import { ServiceCard } from "./ServiceCard";
import styles from "./ServiceCards.module.scss";

const services = [
  {
    img: "https://www.bhg.com.au/wp-content/uploads/sites/12/media/21117/cleaner.jpg",
    title: "House cleaning",
    category: "Cleaning",
    name: "Amanda",
    surname: "Watts",
    address: "123 Fake str.",
  },
  {
    img: "https://media.istockphoto.com/id/2122076165/photo/air-conditioner-service-outdoor-checking-fix-repair-air-conditioner-cleaning-technician-he.jpg?s=612x612&w=0&k=20&c=SM-tKNDbCJZoTzbG-Ik-7Zc4H0sf3phR66cw__86tuU=",
    title: "Various repairs",
    category: "Repair",
    name: "John",
    surname: "Wick",
    address: "222 Repair str.",
  },
  {
    img: "https://previews.123rf.com/images/tverdohlib/tverdohlib1711/tverdohlib171102872/90081950-building-and-construction-working-and-repair-guy-with-repair-roller-on-pink-background-builder-man.jpg",
    title: "Room painting",
    category: "Painting",
    name: "Tom",
    surname: "Jerry",
    address: "321 Imaginary str.",
  },
  {
    img: "https://www.shiftingmovers.com/images/shiftingmovers/about-shifting-movers.jpg",
    title: "Moving services",
    category: "Shifting",
    name: "Mat",
    surname: "Mover",
    address: "333 Move str.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBDzvArpgiQP34h8ifpcNlRB6QHIajvt9_Pg&s",
    title: "Plumber services",
    category: "Plumbing",
    name: "Mario",
    surname: "Draghi",
    address: "213 Plumber str.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmn7NmFSp4eq7KhwI1bIzRed6-iSPu9s9RUQ&s",
    title: "Electric repairs",
    category: "Electric",
    name: "Luke",
    surname: "Cage",
    address: "12 Electro str.",
  },
];

export function ServiceContainer() {
  return (
    <div className={styles.serviceContainer}>
      {services.map((service, index) => {
        return (
          <ServiceCard
            key={index}
            imgSrc={service.img}
            imgAlt={service.imgAlt}
            title={service.title}
            category={service.category}
            name={service.name}
            surname={service.surname}
            address={service.address}
          />
        );
      })}
    </div>
  );
}
