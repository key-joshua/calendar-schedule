import React from 'react';
import { Meeting } from '../types/types';

interface CalendarProps {
  meetings: Meeting[];
  onSelectMeeting: (meeting: Meeting) => void;
}

const Calendar: React.FC<CalendarProps> = ({ meetings, onSelectMeeting }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-900">Calendar</h2>
      </div>

      <div className="p-6">
        {meetings.length === 0 && (<div className="text-center text-gray-500">No meetings scheduled</div>)}

        {meetings.map((meeting, index) => (
          <div key={index} className="mb-4 p-4 bg-[#00A99D]/10 rounded-md cursor-pointer hover:bg-[#00A99D]/20 transition-colors" onClick={() => onSelectMeeting(meeting)} >
            <h3 className="font-semibold text-[#00A99D]">{meeting.title}</h3>
            <p className="text-sm text-[#00A99D]/80">{`${meeting.date} at ${meeting.time}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

