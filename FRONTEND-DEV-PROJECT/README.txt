Student Result App - Quick Start
--------------------------------
This project is a minimal React app that uses useState only (no useEffect). Data is stored in JSON Server (db.json).

1. Install dependencies (if you want to run the React app):
   npm install

2. Start JSON Server (important: port should match studentService.js which uses port 4000):
   npx json-server --watch db.json --port 4000

3. Start React dev server:
   npm start

Notes:
- Data fetching is manual: click "Load Students" to GET the list.
- After Add/Edit/Delete you'll see an alert; click "Load Students" to refresh the view.
- All API calls are done in button handlers and form submit handlers only.
