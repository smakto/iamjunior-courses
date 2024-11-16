import { useState } from "react";
import styles from "./CalendarModal.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Booking } from "@/types/type-booking";

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

const timeRanges = [
  "08:00-09:00",
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "14:00-15:00",
  "16:00-17:00",
  "17:00-18:00",
  "18:00-19:00",
  "19:00-20:00",
];

type CalendarModalProps = {
  calendarOpen: boolean;
  closeCalendar: () => void;
  businessId: string;
  userEmail: string;
  userName: string;
};

const CalendarModal: React.FC<CalendarModalProps> = ({
  calendarOpen,
  closeCalendar,
  businessId,
  userEmail,
  userName,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");

  const [newBooking, setNewBooking] = useState<Booking>({
    businessId: businessId,
    date: selectedDate,
    time: selectedTime,
    userEmail: userEmail,
    userName: userName,
    status: "New",
  });

  function onDateChange(nextDate: Date) {
    setSelectedDate(nextDate);
    setNewBooking((prevBooking) => ({
      ...prevBooking,
      date: nextDate,
    }));
  }

  function onTimeChange(nextTime: string) {
    setSelectedTime(nextTime);
    setNewBooking((prevBooking) => ({
      ...prevBooking,
      time: nextTime,
    }));
  }

  function confirmBooking() {
    console.log(newBooking);
  }

  return (
    calendarOpen && (
      <div className={styles.calendarModalContainer} onClick={closeCalendar}>
        <div
          className={styles.calendarModal}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Calendar
            className={styles.calendar}
            onClickDay={(value) => {
              onDateChange(value);
            }}
            value={selectedDate}
            minDate={new Date()}
          />
          <div className={styles.availableSlots}>
            <h5>Availablity</h5>
            <div className={styles.timeRanges}>
              {timeRanges.map((range) => {
                return (
                  <button
                    key={range}
                    onClick={() => {
                      onTimeChange(range);
                    }}
                  >
                    {range}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            onClick={() => {
              confirmBooking();
            }}
          >
            Confirm
          </button>

          <button onClick={closeCalendar}>Close</button>
        </div>
      </div>
    )
  );
};

export default CalendarModal;
