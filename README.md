### README - THIS IS THE PRACTICE BRANCH

**Goal**: understand how the components are built and interact with the backend and attempt to replicate building one for yourself

### **Front-End**

The front-end of your application is built using React and Next.js. It includes the user interface components, pages, and client-side logic.

Key Components and Pages

1.  **Pages**:

    *   **Dynamic Routes**: Your application uses dynamic routes to handle different document IDs, such as `/documents/[documentId]` and `/preview/[documentId]`.
    *   **Static Pages**: You may have static pages for home, about, etc.

2.  **Components**:

    *   **Editor**: A rich text editor component for editing document content.
    *   **Toolbar**: A toolbar component for document actions (e.g., saving, publishing).
    *   **Cover**: A component for displaying the document cover image.
    *   **Spinner**: A loading spinner component.
    *   **Skeleton**: A skeleton loader component for loading states.

3.  **Hooks**:

    *   **useCoverImage**: A custom hook for handling cover image logic.
    *   **useEdgeStore**: A custom hook for interacting with the Edge Store.

4.  **Providers**:

    *   **ThemeProvider**: A provider for managing themes (light/dark mode).
    *   **ConvexClientProvider**: A provider for managing Convex client state.
    *   **ModalProvider**: A provider for managing modal state.

### **Back-End**

The back-end of your application is powered by Convex, which handles data storage, authentication, and server-side logic.

Key Back-End Components

1.  **Convex Functions**:

    *   **Mutations**: Functions that modify data in the database (e.g., `update` mutation for updating document content).
    *   **Queries**: Functions that retrieve data from the database (e.g., `getById` query for fetching a document by ID).

2.  **API Endpoints**:

    *   **documents.ts**: Defines API endpoints for document-related operations, such as creating, reading, updating, and deleting documents.

3.  **Environment Variables**:

    *   **Development**: [.env.local](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) file for development environment variables.
    *   **Production**: Environment variables set up in the deployment platform (e.g., Vercel, Netlify).

### **How the Application Runs**

1.  **Initialization**:

    *   The application initializes by loading the necessary environment variables and setting up providers (e.g., `ThemeProvider`, `ConvexClientProvider`).

2.  **Routing**:

    *   Next.js handles routing based on the file structure in the `pages` directory. Dynamic routes are used to handle different document IDs.

3.  **Data Fetching**:

    *   The front-end components use hooks like `useQuery` and `useMutation` to interact with Convex functions for data fetching and updating.

4.  **Rendering**:

    *   The application renders the appropriate components based on the route and data fetched from the back-end. Components like `Editor`, `Toolbar`, and `Cover` are used to display and interact with document content.

5.  **User Interaction**:

    *   Users interact with the application through the UI components. Actions like editing a document, uploading a cover image, and saving changes trigger mutations to update the data in the back-end.

6.  **State Management**:

    *   State management is handled using React hooks and context providers. The `ConvexClientProvider` manages the state of the Convex client, while the `ThemeProvider` manages the theme state.
