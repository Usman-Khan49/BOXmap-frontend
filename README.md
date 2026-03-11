# BOXmap Frontend Assessment

## Setup Instructions

**Requirements:** Node.js 18+

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

Other available scripts:

```bash
npm run build     # production build
npm run preview   # preview production build
npm run lint      # run ESLint
```

## APIs Used

**JSONPlaceholder** (`https://jsonplaceholder.typicode.com`) — public mock REST API, no authentication required.

| Endpoint                          | Used for                                        |
| --------------------------------- | ----------------------------------------------- |
| `GET /users`                      | Inbox sidebar user list, chat conversation list |
| `GET /users/:id`                  | Contact details in the details panel            |
| `GET /comments?postId=1&_limit=8` | Chat window messages                            |

## Assumptions

- **Navigation:** The brief did not specify what the navigation bar should do. Based on the visible UI context and comments in the design, the inbox view was assumed to be the active/default state, so it is displayed as the main content inside the loading screen placeholder.

- **Honeycomb-to-data mapping:** The brief did not specify which honeycomb should trigger which data. The following mapping was assumed based on icon semantics:
  - **Inbox** — loads the sidebar user list
  - **Frame** — loads the chat conversation list
  - **Workflow** — loads the chat window messages
  - **Campaign** — loads the contact details panel
  - **AI** — reveals the Notes and Contact Labels sections

- **Data content:** JSONPlaceholder returns Latin placeholder text for post/comment bodies. English strings were substituted to produce a realistic-looking inbox UI.

- **Loading state:** All panels start in a skeleton loading state and only fetch and render real data when their corresponding honeycomb is clicked. Clicking order does not matter — each honeycomb independently controls its own panel.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
