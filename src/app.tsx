'use client'

import React, { useState } from 'react';

import Modal from './components/Modal';
import Header from './components/Header';
import Calendar from './components/Calendar';
import MeetingForm from './components/MeetingForm';
import MeetingsList from './components/MeetingsList';
import { Meeting, Notification } from './types/types';
import ScheduleMeetingButton from './components/ScheduleMeetingButton';
import { meetings, notifications, addMeeting, deleteMeeting, addNotification, markNotificationAsRead } from './services/apiService';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewedMeeting, setViewedMeeting] = useState({} as Meeting);
  const [meetingsData, setMeetingsData] = useState<Meeting[]>(meetings);
  const [notificationsData, setNotificationsData] = useState<Notification[]>(notifications);

  const handleAddMeeting = (meeting: Omit<Meeting, 'id' | 'status'>) => {
    const newNotification = addNotification(`New meeting scheduled: ${meeting.title}`);
    setNotificationsData(prevNotifications => [...prevNotifications, newNotification]);
    setIsModalOpen(false);
    addMeeting(meeting);
  };

  const handleDeleteMeeting = (id: string) => {
    if (deleteMeeting(id)) {
      setViewedMeeting({} as Meeting);
      setMeetingsData(meetingsData.filter(m => m.id !== id));

      const newNotification = addNotification(`Meeting deleted: ${meetingsData.find(m => m.id === id)?.title}`);
      setNotificationsData([...notificationsData, newNotification]);
    }
  };

  const handleMarkAsRead = (id: string) => {
    if (markNotificationAsRead(id)) {
      setNotificationsData(notificationsData.map(n => n.id === id ? { ...n, isRead: true } : n));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header notifications={notificationsData} onMarkAsRead={handleMarkAsRead} />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Calendar meetings={meetingsData} onSelectMeeting={(meeting) => setViewedMeeting(meeting) } />
          <MeetingsList viewedMeeting={viewedMeeting} onDelete={handleDeleteMeeting} />
        </div>
      </main>
      <ScheduleMeetingButton onClick={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <MeetingForm onSubmit={handleAddMeeting} onCancel={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}
