import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './PaymentPage.css';
import PaymentForm from './PaymentForm';  // Correct reference to PaymentForm

const PaymentPage = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [interviewType, setInterviewType] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [showPaymentForm, setShowPaymentForm] = useState(false);  // State to toggle payment form visibility
    const [paymentDetails, setPaymentDetails] = useState(null);  // State to store payment details

    // Function to handle the payment process
    const handlePayment = () => {
        if (paymentMethod && interviewType && selectedDate && selectedTime) {
            // Set the payment details and show the payment form
            const amount = interviewType === 'online' ? 2000 : 1000;  // Set the amount based on interview type
            setPaymentDetails({
                amount, 
                interviewType, 
                date: selectedDate,
                time: selectedTime
            });
            setShowPaymentForm(true);  // Show the payment form
        } else {
            alert('Please complete all fields to proceed with the payment');
        }
    };

    // Generate specific time slots (9:00 AM to 3:00 PM at one-hour intervals)
    const generateTimeSlots = () => {
        const times = [];
        const startHour = 9;
        const endHour = 15; // 3:00 PM in 24-hour format
        for (let hour = startHour; hour <= endHour; hour++) {
            times.push(new Date().setHours(hour, 0, 0, 0));
        }
        return times;
    };

    const handlePaymentSuccess = () => {
        // Handle success and return to a previous page or reset the form
        alert('Payment successful!');
        // Optionally reset the form state or redirect
    };

    return (
        <div className="payment-page">
            <h1>Payment Page</h1>

            {!showPaymentForm ? (
                <>
                    <div className="form-group">
                        <label>Select Payment Method</label>
                        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="payment-select">
                            <option value="">Choose a payment method</option>
                            <option value="paypal">PayPal</option>
                            <option value="mpesa">M-Pesa</option>
                            <option value="airtel">Airtel Money</option>
                            <option value="bank">Bank Transfer</option>
                        </select>
                    </div>
                    <div className="form-group interview-options">
                        <label>Select Interview Type</label>
                        <label>
                            <input
                                type="radio"
                                name="interviewType"
                                value="online"
                                onChange={(e) => setInterviewType(e.target.value)}
                            />
                            Online (2000 KSH)
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="interviewType"
                                value="physical"
                                onChange={(e) => setInterviewType(e.target.value)}
                            />
                            Physical (1000 KSH)
                        </label>
                    </div>
                    <div className="form-group">
                        <label>Select Interview Date</label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            filterDate={(date) => date.getDay() !== 0} // Exclude Sundays
                            placeholderText="Select a date"
                            className="date-picker"
                            minDate={new Date()} // Disable past dates
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>
                    <div className="form-group">
                        <label>Select Interview Time</label>
                        <DatePicker
                            selected={selectedTime}
                            onChange={(time) => setSelectedTime(time)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={60} // 1-hour intervals
                            includeTimes={generateTimeSlots()}
                            placeholderText="Select a time"
                            className="date-picker"
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                        />
                    </div>
                    <button onClick={handlePayment} className="proceed-button">Proceed to Payment</button>
                </>
            ) : (
                // If the form is submitted, show the payment form
                <PaymentForm paymentDetails={paymentDetails} onPaymentSuccess={handlePaymentSuccess} />
            )}
        </div>
    );
};

export default PaymentPage;
