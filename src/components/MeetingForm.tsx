import React, { useState } from 'react';
import { Meeting } from '../types/types';

interface MeetingFormProps {
  onSubmit: (meeting: Omit<Meeting, 'id' | 'status'>) => void;
  onCancel: () => void;
}

const MeetingForm: React.FC<MeetingFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({ title: '', description: '', date: '', time: '', duration: 30, invitees: [''], });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); onSubmit({ ...formData, invitees: formData.invitees.filter(email => email.trim() !== '') });
  
  setFormData({ title: '', description: '', date: '', time: '', duration: 30, invitees: [''], }); };
  const handleInviteeChange = (index: number, value: string) => {
    const newInvitees = [...formData.invitees];
    newInvitees[index] = value;
    if (index === newInvitees.length - 1 && value !== '') {
      newInvitees.push('');
    }
    setFormData({ ...formData, invitees: newInvitees });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Schedule New Meeting</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#00A99D] focus:ring-[#00A99D] px-3 py-2" required />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#00A99D] focus:ring-[#00A99D] px-3 py-2" rows={3} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#00A99D] focus:ring-[#00A99D] px-3 py-2" required />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input type="time" value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#00A99D] focus:ring-[#00A99D] px-3 py-2" required />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
        <input type="number" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })} className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#00A99D] focus:ring-[#00A99D] px-3 py-2" min="15" step="15" required />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Invitees</label>
        <div className="space-y-2"> {formData.invitees.map((email, index) => ( <input key={index} type="email" value={email} onChange={(e) => handleInviteeChange(index, e.target.value)} placeholder="Enter email address" className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#00A99D] focus:ring-[#00A99D] px-3 py-2" /> ))} </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button type="button" onClick={onCancel} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A99D]" > Cancel </button>
        <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-[#00A99D] border border-transparent rounded-md hover:bg-[#008F84] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00A99D]" > Schedule Meeting </button>
      </div>
    </form>
  );
};

export default MeetingForm;

