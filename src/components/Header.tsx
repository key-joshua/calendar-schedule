import React from 'react';
import { Notification } from '../types/types';
import NotificationBell from './NotificationBell';

interface HeaderProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ notifications, onMarkAsRead }) => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center space-x-2">
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 text-[#00A99D]"
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h1 className="text-xl font-semibold text-gray-800">Meeting Scheduler</h1>
      </div>
      <NotificationBell notifications={notifications} onMarkAsRead={onMarkAsRead} />
    </header>
  );
};

export default Header;

