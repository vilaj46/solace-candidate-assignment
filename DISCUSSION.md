# Front-End
\* Heading - Requires options/props for more customization. Currently only size (1-6).
\* SearchForm - The types require refinement. The props for the label, icon, input and button should be organized with options (ie. `isDisabled`). `onChange` also needs a debouncer.
\* Table - Bare bones, would require way more customization + Suspense.
\* Hooks, services - Normally would pull in react-query to be handled in the service file which would eliminate the useEffect in the hook. The hook would then be used for any shared functions / data massaging regarding the GET advocates. 
\* General - This was not done mobile first, there is limited accessibility and no testing.

# Back-end 
\* Migrated and seeded DB. Since advocates would likely reach a large number, pagination and infinite scrolling / loading for filtering out results.

Thanks for the assignment, this was fun!