# Experiment 3 Code Snippets

## 1. `useState()` — Local State
From `src/App.jsx`:
```jsx
const [searchQuery, setSearchQuery] = useState('');
const [selectedCategory, setSelectedCategory] = useState('All');
<input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
```

## 2. `useEffect()` — Side Effects
From `src/context/EventContext.jsx`:
```jsx
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registeredEventIds));
}, [registeredEventIds]);
```

## 3. `createContext()` — Shared Context
```jsx
const EventContext = createContext(null);
return <EventContext.Provider value={{ events, registeredEventIds, registerForEvent, unregisterFromEvent, isRegistered, registrationCount }}>
  {children}
</EventContext.Provider>;
```

## 4. `useContext()` — Consumer Hook
```jsx
export function useEvents() {
  const context = useContext(EventContext);
  if (!context) throw new Error('useEvents must be used inside EventProvider');
  return context;
}
```

## 5. State Update Functions
```jsx
const registerForEvent = (id) => setRegisteredEventIds((current) =>
  current.includes(id) ? current : [...current, id]
);
const unregisterFromEvent = (id) => setRegisteredEventIds((current) =>
  current.filter((eventId) => eventId !== id)
);
```

## 6. Search and Category Filtering
```jsx
const filteredEvents = events.filter((event) =>
  [event.title, event.description, event.location]
    .some((field) => field.toLowerCase().includes(query)) &&
  (selectedCategory === 'All' || event.category === selectedCategory)
);
```

## 7. Event Registration
```jsx
const registered = isRegistered(event.id);
<button onClick={() => registered
  ? unregisterFromEvent(event.id)
  : registerForEvent(event.id)}>
  {registered ? 'Registered' : 'Register'}
</button>
```

## 8. Component Integration
```jsx
export default function App() {
  return <EventProvider><EventsPage /></EventProvider>;
}
```
