import { useParams } from "react-router-dom";
import styles from "./BusinessPage.module.scss";
import { useState } from "react";
import CalendarModal from "../../components/Bookings/Calendar/CalendarModal";
import ErrorPage from "../ErrorPage/ErrorPage";
import { useService } from "../../hooks/useServices";
import {
  FaLocationDot,
  FaEnvelope,
  FaUpload,
  FaUserLarge,
  FaClock,
  FaCalendarDays,
} from "react-icons/fa6";

const BusinessPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useService(params.id ?? "");

  const [calendarOpen, setCalendarOpen] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <ErrorPage />;

  // let testDate = new Date(2025, 5, 30);
  // console.log(testDate);

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
                <p>
                  <FaLocationDot />
                  <span /> {data.address}
                </p>
                <p>
                  <FaEnvelope /> <span />
                  {data.email}
                </p>
              </div>
            </div>
            <div className={styles.topRight}>
              <div>
                <button>
                  <FaUpload />
                </button>
                <p>
                  <FaUserLarge />
                  {data.contactPerson}
                </p>
                <p>
                  <FaClock />
                  Available from
                  <span style={{ color: "red" }}> INSERT TIME</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mainArea}>
            <div className={styles.mainLeft}>
              <div className={styles.businessDescription}>
                <h3>Description</h3>
                <p>{data.about}</p>
              </div>
              <div className={styles.galleryContainer}>
                <h3>Gallery</h3>
              </div>
            </div>
            <div className={styles.mainRight}>
              <div>
                <button
                  onClick={() => {
                    setCalendarOpen(!calendarOpen);
                  }}
                >
                  <FaCalendarDays /> <span />
                  BOOK APPOINTMENT
                </button>
              </div>
              <div>
                <h3>Similar services</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <>
        {data && (
          <CalendarModal
            businessId={data._id}
            userEmail={data.email}
            userName={data.contactPerson}
            calendarOpen={calendarOpen}
            closeCalendar={() => {
              setCalendarOpen(false);
            }}
          />
        )}
      </>
    </>
  );
};

export default BusinessPage;
