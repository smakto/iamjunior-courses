import styles from "./CalendarModal.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type CalendarModalProps = {
  calendarOpen: boolean;
  closeCalendar: () => void;
};

const CalendarModal: React.FC<CalendarModalProps> = ({
  calendarOpen,
  closeCalendar,
}) => {
  return (
    calendarOpen && (
      <div className={styles.calendarModalContainer}>
        <div className={styles.calendarModal}>
          <Calendar className={styles.calendar} />
          <button onClick={closeCalendar}>Close</button>
        </div>
      </div>
    )
  );
};

export default CalendarModal;
