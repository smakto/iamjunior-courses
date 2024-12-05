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
import { useBusinessBookings } from "@/hooks/useBookings";

const BusinessPage = () => {
  const params = useParams();
  const {
    data: serviceData,
    isLoading: isServiceLoading,
    error: serviceError,
  } = useService(params.id ?? "");

  const { data: bookingsData } = useBusinessBookings(params.id ?? "");
  console.log(bookingsData);

  const [calendarOpen, setCalendarOpen] = useState(false);

  if (isServiceLoading) return <div>Loading...</div>;
  if (serviceError) return <ErrorPage />;

  return (
    <>
      {serviceData && (
        <div className={styles.flexContainer}>
          <div className={styles.topArea}>
            <div className={styles.topLeft}>
              <img
                src={serviceData.imageUrl[0].imgUrl}
                alt={serviceData.name}
              />
              <div className={styles.topMainInfo}>
                <p className={styles.chip}>{serviceData.category}</p>
                <h2>{serviceData.name}</h2>
                <p>
                  <FaLocationDot />
                  <span /> {serviceData.address}
                </p>
                <p>
                  <FaEnvelope /> <span />
                  {serviceData.email}
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
                  {serviceData.contactPerson}
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
                <p>{serviceData.about}</p>
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
        {serviceData && (
          <CalendarModal
            businessId={serviceData._id}
            userEmail={serviceData.email}
            userName={serviceData.contactPerson}
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
