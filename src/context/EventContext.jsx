import { createContext, useContext, useEffect, useState } from 'react';
export const events = [
  { id: 'tech-fest', title: 'Tech Fest 2026', description: 'Explore student-built technology, demos, and ideas shaping tomorrow.', date: '18 April 2026', time: '10:00 AM – 4:00 PM', location: 'Mumbai', category: 'Showcase', tone: 'bg-teal-50 text-teal-700' },
  { id: 'react-workshop', title: 'React Workshop', description: 'Build a responsive interface with reusable components and modern React.', date: '25 April 2026', time: '11:00 AM – 1:30 PM', location: 'Pune', category: 'Hands-on', tone: 'bg-amber-50 text-amber-700' },
  { id: 'ai-conference', title: 'AI Conference', description: 'Learn how responsible artificial intelligence is changing every industry.', date: '02 May 2026', time: '9:30 AM – 5:00 PM', location: 'Bengaluru', category: 'Conference', tone: 'bg-sky-50 text-sky-700' },
];
const EventContext = createContext(null);
const STORAGE_KEY = 'pathlog-labs-registered-events';
export function EventProvider({ children }) {
  const validIds = new Set(events.map((event) => event.id));
  const [registeredEventIds, setRegisteredEventIds] = useState(() => { try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); return Array.isArray(saved) ? saved.filter((id) => validIds.has(id)) : []; } catch { return []; } });
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(registeredEventIds)); }, [registeredEventIds]);
  const registerForEvent = (id) => setRegisteredEventIds((current) => current.includes(id) ? current : [...current, id]);
  const unregisterFromEvent = (id) => setRegisteredEventIds((current) => current.filter((eventId) => eventId !== id));
  return <EventContext.Provider value={{ events, registeredEventIds, registerForEvent, unregisterFromEvent, isRegistered: (id) => registeredEventIds.includes(id), registrationCount: registeredEventIds.length }}>{children}</EventContext.Provider>;
}
export function useEvents() { const context = useContext(EventContext); if (!context) throw new Error('useEvents must be used inside EventProvider'); return context; }
