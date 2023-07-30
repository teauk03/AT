import {ChangeEvent, FC} from 'react';
import { years, months, days } from "@/util/date";

import styles from '@/components/Auth/Join.module.scss';

interface DateOfBirthFieldProps {
    year: string | number;
    month: string | number;
    day: string | number;
    years: number[];
    months: number[];
    days: number[];
    handleYearChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleMonthChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleDayChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const DateOfBirthField: FC<DateOfBirthFieldProps> = ({year, month, day, handleYearChange, handleMonthChange, handleDayChange}) => (
    <fieldset className={styles['form-fieldset']}>
        <label htmlFor="nameForm" className={styles['input-label']}>
            Day of Birth
            <div className={styles['date-input']}>
                <select
                    className={styles['select-box']}
                    name="year"
                    defaultValue={year}
                    onChange={handleYearChange}
                >
                    <option value="년" disabled>년</option>
                    {
                        years.map((year: number) => {
                            return (
                                <option
                                    defaultValue={year}
                                    key={year}
                                >
                                    {year}
                                </option>
                            )
                        })
                    }
                </select>


                <select
                    className={styles['select-box']}
                    name="month"
                    defaultValue={month}
                    onChange={handleMonthChange}
                >
                    <option value="월" disabled>월</option>
                    {
                        months.map((month: number) => {
                            return (
                                <option
                                    defaultValue={month}
                                    key={month}
                                >
                                    {month}
                                </option>
                            )
                        })
                    }
                </select>

                <select
                    className={styles['select-box']}
                    name="day"
                    defaultValue={day}
                    onChange={handleDayChange}
                >
                    <option value="일" disabled>일</option>
                    {
                        days.map((day: number) => {
                            return (
                                <option
                                    defaultValue={day}
                                    key={day}
                                >
                                    {day}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </label>
    </fieldset>
);

export {DateOfBirthField};