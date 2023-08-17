import React from 'react';
import styles from "@/components/Reserve/Rent/Calendar/Calendar.module.css";

const CalendarBack = () => {
    return (
        <div className={styles.back}>
            <input placeholder="What's the event?" />
            <div className={styles.info}>
                <div className={styles.date}>
                    <p className={styles.infoDate}>
                        Date: <span>Jan 15th, 2016</span>
                    </p>
                    <p className={styles.infoTime}>
                        Time: <span>6:35 PM</span>
                    </p>
                </div>
                <div className={styles.address}>
                    <p>
                        Address: <span>129 W 81st St, New York, NY</span>
                    </p>
                </div>
                <div className={styles.observations}>
                    <p>
                        Observations: <span>Be there 15 minutes earlier</span>
                    </p>
                </div>
            </div>

            <div className={styles.actions}>
                <button className={styles.save}>
                    Save <i className="ion-checkmark"></i>
                </button>
                <button className={styles.dismiss}>
                    Dismiss <i className="ion-android-close"></i>
                </button>
            </div>
        </div>
    );
};

export default CalendarBack;