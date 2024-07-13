# InterViewCode
InterViewCode is a real-time code collaboration web application that allows multiple users to collaborate on code in the same virtual room. It's built using the Express.js, React, Node.js, Bootstrap and Socket.IO for real-time communication.

## Features
- Create or join a virtual "room" by entering a room ID.
- Set your username to identify yourself in the room.
- Real-time code collaboration with other users in the same room.
- Changes made by one user are instantly reflected on all connected clients.
- Code highlighting and editor customization options.


## Technologies Used
- Express.js: Handling API requests.
- React: Building the front-end interface.
- Node.js: Running the server.
- Socket.IO: Enabling real-time communication.
- uuid: Generating unique room IDs.
- CodeMirror: Providing the code editor.


## Usage
1. Open the CodeCast live demo.
2. Enter a Room ID or generate a new one.
3. Set your username.
4. Start collaborating with others in the same room.

## Video

https://github.com/user-attachments/assets/b34ea2ba-e500-47a9-9f21-5a55f3ea8954


## Run Locally

Clone the project

```bash
  git clone https://github.com/YOUR-USERNAME/InterViewCode.git
```

Go to the project directory

```bash
  cd InterViewCode-main
```

Install dependencies

```bash
  cd client
  npm install
```

```bash
  cd server
  npm install
```

Start Application

Backend:
```bash
  cd server
  npm start
```

Frontend:
```bash
  cd client
  npm start
```

