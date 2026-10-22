# Theory

1. **React Hooks:** Functions that let function components use React features such as state, effects, and context.
2. **useState():** Creates a state value and an update function. Updating it causes the component to render again.
3. **Normal variable vs state:** A normal variable is reset during rendering and does not trigger UI updates. State is retained by React and causes a re-render when changed.
4. **useEffect():** Runs side-effect code such as storage synchronization, subscriptions, or document updates.
5. **When useEffect executes:** After the component renders. Its dependency array determines whether it runs after every render, once, or when selected values change.
6. **Dependency array:** It tells React which values the effect uses. React reruns the effect when one of those values changes.
7. **useContext():** Reads a value supplied by a matching Context Provider without passing it through every intermediate component.
8. **Context API:** React’s mechanism for sharing values such as theme, language, or application state across a component tree.
9. **Prop drilling:** Passing props through components that do not need them only to reach a deeply nested child.
10. **Context and prop drilling:** A consumer reads shared data directly from context, reducing unnecessary intermediate props.
11. **State management:** The organization of changing application data, its update functions, and the components that depend on it.
12. **Local vs shared state:** Local state belongs to one component. Shared state is provided to multiple related components, such as registrations and their summary.
13. **Conditional rendering:** Showing different JSX depending on a condition, such as displaying `Registered` or `Register`.
14. **UI updates:** React schedules a re-render after a state update and applies the changed result to the DOM.
15. **Why Hooks are useful:** Hooks keep stateful logic in function components and allow reusable patterns without class components.
