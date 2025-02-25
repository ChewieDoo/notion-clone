### README - this is the UPDATE branch

## Home Page
1. Create route (/home -> first page we log in) (DONE)
2. Create a new page component representing home page (DONE)
3. Create a recent document box (holding document image, icon, title, last edited)
4. Functionality 1: Clicking in allows you to quickly access the document
5. Functionality 2: Creating and accessing the document puts it at the top of the list of document displayed

## Other tasks
- Make it table to sign in using Google accounts (DONE)
- Make website a bit prettier
    1. Sidebar - make the dropdown arrow appear when user hovers over it (DONE)
    2. Make the margins a bit wider (DONE)
    3. Add in Home Page section
    4. Add in dividers (DONE)
    5. Add in tool-tip
- Making it so you can access other Potions from one potion
- Adding a home page showing recently visited document
- Adding in stuff and seeing if this is showing up on github

## API Endpoints

API Endpoints are specific URL or functions that allow the front-end to interact with the backend.  They handle requests such as:
- Creating data `POST`
- Reading data `GET`
- Updating data `PATCH/PUT`
- Deleting data `DELEdTE`

### documents.ts
`documents.ts` defines API endpoints by setting up mutations and queries:
- Mutations `mutation()` → Modify database records (Create, Update, Delete).
- Queries `query()` → Retrieve data from the database.

Each function in `documents.ts` acts as an **API endpoint that the frontend can call**.

### Journal

Feb 19 2025 - had an issue with my push, got ```error: RPC failed; HTTP 400 curl 22 The requested URL returned error: 400 fatal: the remote end hung up unexpectedly```

Fixed it with the command ```git config --global http.postBuffer 157286400``` by increasing the size of my commit.

