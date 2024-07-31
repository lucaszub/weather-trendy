// src/components/DatePicker.tsx
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type DatePickerProps = {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
};

const DatePicker: React.FC<DatePickerProps> = ({ selectedDate, onDateChange }) => {
  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={onDateChange}
      dateFormat="dd/MM/yyyy"
      className="border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring w-full"
    />
  );
};

export default DatePicker;
