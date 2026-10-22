# Theory Questions

## 1. What is a React component?
A React component is a reusable piece of user-interface code. It is usually a JavaScript function that returns JSX describing what should appear on the screen. Components can receive changing values through props and manage local interaction through state. For example, `EventCard` receives one event object and renders its title, details, and registration button. Breaking a page into components makes its structure easier to understand and maintain.

## 2. What are the advantages of reusable components?
Reusable components avoid duplicating the same markup and behavior. A fix or design improvement can be made in one component and automatically used everywhere that component appears. Components also create clear boundaries, make testing easier, and keep large pages understandable. In this experiment, one `EventCard` component displays three different event objects, so the data changes while the presentation and interaction remain consistent.

## 3. What is Flexbox? What does flex do?
Flexbox is a CSS layout system for arranging elements along one main axis. Tailwind’s `flex` utility sets an element to `display: flex`, allowing child elements to be aligned and distributed. Utilities such as `items-center` control cross-axis alignment, while `justify-between` distributes remaining space. Flexbox is useful for navigation bars, button rows, and responsive sections where content needs to align without fixed positions.

## 4. What is the difference between flex-row and flex-col?
`flex-row` places flex children horizontally from left to right, while `flex-col` places them vertically from top to bottom. A row is useful for desktop navigation or a horizontal hero layout. A column is useful on narrow screens where content needs more vertical space. A responsive design can use `flex-col md:flex-row` so the same section stacks on mobile and becomes horizontal at the medium breakpoint.

## 5. What is responsive design?
Responsive design is the practice of making an interface adapt to different screen sizes and input conditions. Instead of creating a separate page for every device, the layout, type, spacing, and controls change fluidly. In this page, cards use one column on mobile, two on medium screens, and three on large screens. Buttons and navigation also adapt so the primary content remains readable without horizontal scrolling.

## 6. What are responsive breakpoints in Tailwind CSS?
Responsive breakpoints are screen-width thresholds at which Tailwind applies a prefixed utility. For example, `md:p-6` applies padding at the medium breakpoint and above, while an unprefixed `p-4` applies by default. Tailwind’s common mobile-first prefixes include `sm`, `md`, `lg`, `xl`, and `2xl`. The browser starts with the base mobile style, then progressively adds larger-screen rules.

## 7. What is CSS Grid? What does grid-cols-2 do?
CSS Grid is a two-dimensional layout system that arranges items in rows and columns. It is well suited to repeated cards because it controls both directions at once. Tailwind’s `grid` enables Grid layout, and `grid-cols-2` creates two equal columns. The cards then flow into those columns automatically, with the gap utility controlling the space between rows and columns.

## 8. What is the purpose of md:grid-cols-2?
`md:grid-cols-2` changes the grid to two columns when the viewport reaches Tailwind’s medium breakpoint. Because Tailwind is mobile-first, a class such as `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` means one column by default, two on tablets, and three on large screens. This allows the same event data to create an appropriate layout without JavaScript screen-size detection.

## 9. What is the difference between w-full and md:w-auto?
`w-full` makes an element fill the available width of its parent. This is useful for mobile buttons because it creates a large, easy-to-tap target. `md:w-auto` changes the width back to the element’s natural content width from the medium breakpoint onward. Together, `w-full md:w-auto` gives a full-width mobile button while allowing a compact button on tablet and desktop layouts.
