import React from 'react';
import { Meeting } from '../types/types';

interface MeetingsListProps {
  viewedMeeting: Meeting;
  onDelete: (id: string) => void;
}

const MeetingsList: React.FC<MeetingsListProps> = ({ viewedMeeting, onDelete }) => {
  return (
    <div className={`h-80 rounded-lg ${Object.keys(viewedMeeting).length === 0 ? 'bg-transparent' : 'bg-white shadow'}`}>
      <div className="px-6 py-4 border-b bg-white">
        <h2 className="text-lg font-semibold text-gray-800">Scheduled Meetings</h2>
      </div>

      { Object.keys(viewedMeeting).length !== 0 && (
        <div className="divide-y divide-gray-100">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{viewedMeeting.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{viewedMeeting.description}</p>
                <div className="mt-2 space-y-1">
                  <p className="text-sm text-gray-600"> <span className="font-medium">Date:</span> {viewedMeeting.date} </p>
                  <p className="text-sm text-gray-600"> <span className="font-medium">Time:</span> {viewedMeeting.time} </p>
                  <p className="text-sm text-gray-600"> <span className="font-medium">Duration:</span> {viewedMeeting.duration} minutes </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-600">Invitees:</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {viewedMeeting.invitees.map((email, index) => ( <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00A99D] text-white" > {email} </span> ))}
                  </div>
                </div>
              </div>
              <button onClick={() => onDelete(viewedMeeting.id)} className="text-red-600 hover:text-red-800" > <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /> </svg> </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetingsList;
