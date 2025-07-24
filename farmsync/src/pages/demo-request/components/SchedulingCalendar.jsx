import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SchedulingCalendar = ({ selectedDate, selectedTime, onDateSelect, onTimeSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isPast = date < today;
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isSelected = selectedDate && 
        date.toDateString() === new Date(selectedDate).toDateString();

      days.push({
        date,
        day: date.getDate(),
        isCurrentMonth,
        isPast,
        isWeekend,
        isSelected,
        isAvailable: isCurrentMonth && !isPast && !isWeekend
      });
    }

    return days;
  };

  const availableTimeSlots = [
    { time: '6:00 AM', value: '06:00', label: 'Early Morning - Before field work' },
    { time: '7:00 AM', value: '07:00', label: 'Early Morning - Before field work' },
    { time: '8:00 AM', value: '08:00', label: 'Morning - Office hours' },
    { time: '9:00 AM', value: '09:00', label: 'Morning - Office hours' },
    { time: '10:00 AM', value: '10:00', label: 'Morning - Office hours' },
    { time: '11:00 AM', value: '11:00', label: 'Morning - Office hours' },
    { time: '1:00 PM', value: '13:00', label: 'Afternoon - Lunch break' },
    { time: '2:00 PM', value: '14:00', label: 'Afternoon - Office hours' },
    { time: '3:00 PM', value: '15:00', label: 'Afternoon - Office hours' },
    { time: '4:00 PM', value: '16:00', label: 'Afternoon - Office hours' },
    { time: '6:00 PM', value: '18:00', label: 'Evening - After field work' },
    { time: '7:00 PM', value: '19:00', label: 'Evening - After field work' }
  ];

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">Schedule Your Demo</h2>
        <p className="text-muted-foreground">Choose a date and time that works with your farming schedule</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="bg-card rounded-lg p-6 agricultural-shadow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateMonth(-1)}
                iconName="ChevronLeft"
                iconSize={16}
              >
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigateMonth(1)}
                iconName="ChevronRight"
                iconSize={16}
              >
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day) => (
              <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {generateCalendarDays().map((day, index) => (
              <button
                key={index}
                onClick={() => day.isAvailable && onDateSelect(day.date)}
                disabled={!day.isAvailable}
                className={`p-2 text-sm rounded-lg seasonal-transition ${
                  day.isSelected
                    ? 'bg-primary text-primary-foreground'
                    : day.isAvailable
                    ? 'hover:bg-muted text-foreground'
                    : 'text-muted-foreground cursor-not-allowed'
                } ${!day.isCurrentMonth ? 'opacity-30' : ''}`}
              >
                {day.day}
              </button>
            ))}
          </div>

          <div className="mt-4 text-xs text-muted-foreground space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded"></div>
              <span>Selected date</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-muted rounded"></div>
              <span>Available (weekdays only)</span>
            </div>
            <p className="mt-2">* Weekend demos available by special request</p>
          </div>
        </div>

        {/* Time Slots */}
        <div className="bg-card rounded-lg p-6 agricultural-shadow">
          <h3 className="text-lg font-semibold text-foreground mb-4">Available Time Slots</h3>
          
          {selectedDate ? (
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground mb-4">
                Selected date: {new Date(selectedDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>

              <div className="space-y-2 max-h-96 overflow-y-auto">
                {availableTimeSlots.map((slot) => (
                  <button
                    key={slot.value}
                    onClick={() => onTimeSelect(slot.value)}
                    className={`w-full p-3 rounded-lg text-left seasonal-transition growth-hover ${
                      selectedTime === slot.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{slot.time}</div>
                        <div className="text-sm opacity-80">{slot.label}</div>
                      </div>
                      {selectedTime === slot.value && (
                        <Icon name="Check" size={20} />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Please select a date to view available time slots</p>
            </div>
          )}
        </div>
      </div>

      {selectedDate && selectedTime && (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Clock" size={20} className="text-accent mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground">Demo Scheduled</h4>
              <p className="text-sm text-muted-foreground">
                {new Date(selectedDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })} at {availableTimeSlots.find(slot => slot.value === selectedTime)?.time}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Duration: 45 minutes • You'll receive a calendar invite with meeting details
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchedulingCalendar;