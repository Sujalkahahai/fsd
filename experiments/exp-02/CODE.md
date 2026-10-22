# Experiment 2 — Relevant Source Code

The complete implementation is kept in the root Vite app so the laboratory module does not create a second application. The main source file is [`src/main.jsx`](../../src/main.jsx), and styling is in [`src/styles.css`](../../src/styles.css). It contains the reusable `EventCard`, demo event array, responsive page layout, and frontend-only registration state.

## Key implementation

```jsx
function EventCard({ event }) {
  const [registered, setRegistered] = useState(false);
  return <article className="flex h-full flex-col rounded-2xl ...">
    {/* event details */}
    <button disabled={registered} onClick={() => setRegistered(true)}>
      {registered ? 'Registered' : 'Register'}
    </button>
  </article>;
}

<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
  {events.map(event => <EventCard key={event.id} event={event} />)}
</div>
```

See the linked source for the complete, runnable code rather than a duplicated excerpt that could become stale.
