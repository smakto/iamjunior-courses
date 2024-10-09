import { useParams } from "react-router-dom";
import styles from "./BusinessPage.module.scss";
import { useState } from "react";
import CalendarModal from "../../components/Bookings/Calendar/CalendarModal";
import ErrorPage from "../ErrorPage/ErrorPage";
import { useService } from "../../hooks/useServices";

const BusinessPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useService(params.id ?? "");

  const [calendarOpen, setCalendarOpen] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorPage />;

  console.log(data);

  return (
    <>
      {data && (
        <div className={styles.flexContainer}>
          <div className={styles.topArea}>
            <div className={styles.topLeft}>
              <img src={data.imageUrl[0].imgUrl} alt={data.name} />
              <div className={styles.topMainInfo}>
                <p className={styles.chip}>{data.category}</p>
                <h2>{data.name}</h2>
                <p>{data.address}</p>
                <p>{data.email}</p>
              </div>
            </div>
            <div className={styles.topRight}>
              <p className={styles.placeholder}>
                TODO: upload button / contact person / availability to be added
              </p>
            </div>
          </div>
          <div className={styles.mainArea}>
            <div className={styles.mainLeft}>
              <div className={styles.businessDescription}>
                <p className={styles.placeholder}>TODO: business description</p>
              </div>
              <div className={styles.galleryContainer}>
                <p className={styles.placeholder}>TODO: add gallery</p>
              </div>
            </div>
            <div className={styles.mainRight}>
              <button
                onClick={() => {
                  setCalendarOpen(!calendarOpen);
                }}
              >
                BOOK APPOINTMENT
              </button>
              <p className={styles.placeholder}>TODO: similar businesses</p>
            </div>
          </div>
        </div>
      )}
      <>
        <CalendarModal
          calendarOpen={calendarOpen}
          closeCalendar={() => {
            setCalendarOpen(false);
          }}
        />
      </>
    </>
  );
};

export default BusinessPage;
