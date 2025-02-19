### README

## Other tasks
- Add in custom images 
- Make website a bit prettier
- Making it so you can access other Potions from one potion
- Adding a home page showing recently visited document
- Adding in stuff and seeing if this is showing up on github

## API Endpoints

API Endpoints are specific URL or functions that allow the front-end to interact with the backend.  They handle requests such as:
- Creating data `POST`
- Reading data `GET`
- Updating data `PATCH/PUT`
- Deleting data `DELETE`

### documents.ts
`documents.ts` defines API endpoints by setting up mutations and queries:
- Mutations `mutation()` → Modify database records (Create, Update, Delete).
- Queries `query()` → Retrieve data from the database.

Each function in `documents.ts` acts as an **API endpoint that the frontend can call**.

