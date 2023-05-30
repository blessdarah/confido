# confido

manage package delivery through people travelling around the world.

# Naming conventions

- All dirs are in lowercase
- filenames are in kebab case (lowercase and separated with a dash)
- All files end with main module dir name extenstion and proper file extention name. For example: in the `Pages` dir, a new
  page should be named as `page-name.page.tsx` and within the page component, we should have something like this:

  ```js
  const PageNamePage: React.FC = () => {
    return <div>Page details</div>;
  };
  export default PageNamePage;
  ```

- It's recommended to use default exports for all pages
- Variable and function names should be descriptive as much as possible
- Within components, there should be the following hierachy:
  - All hooks import come first
  - Local states with `useState` function
  - Locally generated values and functions
  - All `useEffects` should come last before the render function. See example below
  - Each section is separated from the other with an empty line to improve on readability of components

```js
const HomePage: React.FC = () => {
  /* Hook imports */
  const { users } = useUser();

  /* Local states */
  const [isActive, setIsActive] = useSate(false);

  /* Locally generated variables */
  const filteredUsers = users.filter((user) => user.isActive);

  /* Effects */
  useEffect(() => {
    console.log("effect when component loads");
  });

  return <div>Page details</div>;
};

export default PageNamePage;
```
