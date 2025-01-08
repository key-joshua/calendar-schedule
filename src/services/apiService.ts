import { Meeting, Notification } from '../types/types';

export let meetings: Meeting[] = [
  {
    id: '1',
    title: 'Project Discussion',
    description: 'Discuss project requirements and timeline',
    date: '2023-06-15',
    time: '10:00',
    duration: 60,
    invitees: ['josue@gmail.com', 'jane@example.com'],
    status: 'scheduled'
  },
  {
    id: '2',
    title: 'Team Sync',
    description: 'Weekly sync to align on tasks and priorities',
    date: '2023-06-16',
    time: '14:00',
    duration: 45,
    invitees: ['josue@gmail.com', 'susan@example.com', 'alex@example.com'],
    status: 'scheduled'
  },
  {
    id: '3',
    title: 'Client Feedback',
    description: 'Review client feedback and discuss improvements',
    date: '2023-06-18',
    time: '09:30',
    duration: 30,
    invitees: ['lisa@example.com', 'david@example.com'],
    status: 'scheduled'
  },
  {
    id: '4',
    title: 'Marketing Strategy',
    description: 'Discuss strategies for upcoming marketing campaigns',
    date: '2023-06-20',
    time: '16:00',
    duration: 90,
    invitees: ['josue@gmail.com', 'emily@example.com', 'james@example.com'],
    status: 'scheduled'
  }
];

export let notifications: Notification[] = [
  {
    id: '1',
    message: 'New meeting scheduled: Project Discussion',
    timestamp: '2023-06-14T12:00:00Z',
    isRead: false,
  },
];

export const addMeeting = (meeting: Omit<Meeting, 'id' | 'status'>): Meeting => {
  const newMeeting: Meeting = { ...meeting, id: String(meetings.length + 1), status: 'scheduled', };
  meetings.push(newMeeting);
  return newMeeting;
};

export const updateMeeting = (id: string, updates: Partial<Meeting>): Meeting | undefined => {
  const index = meetings.findIndex(m => m.id === id);
  if (index !== -1) {
    meetings[index] = { ...meetings[index], ...updates };
    return meetings[index];
  }
  return undefined;
};

export const deleteMeeting = (id: string): boolean => {
  const initialLength = meetings.length;
  meetings = meetings.filter(m => m.id !== id);
  return meetings.length < initialLength;
};

export const addNotification = (message: string): Notification => {
  const newNotification = {
    id: String(notifications.length + 1),
    message,
    timestamp: new Date().toISOString(),
    isRead: false,
  };
  notifications.push(newNotification);
  return newNotification;
};

export const markNotificationAsRead = (id: string): boolean => {
  const notification = notifications.find(n => n.id === id);
  if (notification) {
    notification.isRead = true;
    return true;
  }
  return false;
};
