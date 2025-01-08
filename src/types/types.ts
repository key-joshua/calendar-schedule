export interface Meeting {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: number;
  invitees: string[];
  status: 'scheduled' | 'cancelled' | 'completed';
}

export interface Notification {
  id: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}
