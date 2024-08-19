# Help Center Frontend

This is the frontend part of the Help Center application built using React and Tailwind CSS. It includes components like the Header, Footer, Card, CardList, and CardForm. Users can create new help center cards, view existing cards, search for specific cards, and more.

## Features
- Responsive UI design with Tailwind CSS
- Dynamic card creation with popup form
- Search functionality to filter cards
- React Toastify notifications for success and error messages
- No data found message if no cards match the search query

## Getting Started
### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd frontend

2. **Install the dependencies:**
    ### `npm install`

3. **Set up environment variables:**
- REACT_APP_API="http://localhost:8000"

3. **Run the server:**
    ### `npm start`



---

### **Backend `README.md`**

```markdown
# Help Center Backend

This is the backend part of the Help Center application built using Node.js and Express.js. It provides a RESTful API for managing Help Center cards.

## Features
- RESTful API for creating, retrieving, and searching help center cards
- Proper MVC structure for scalability and maintainability
- CORS enabled for cross-origin requests

## Getting Started
### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd backend

2. **Install the dependencies:**
    ### `npm install`

3. **Set up environment variables:**
- PORT=8000
- DATABASE_URL=<your-mongodb-database-url>

4. **Run the server:**
    ### `nodemon index.js`

