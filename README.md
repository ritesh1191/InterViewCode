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
1. Open the InterViewCode Application Home Page.
2. Enter a Room ID or generate a new one.
3. Set your username.
4. Start collaborating with others in the same room.

## Video

https://github.com/user-attachments/assets/c99dc3bf-0161-46ad-8736-300cd3eb5fe1

## Photos

- Home Page

![image](https://github.com/user-attachments/assets/e092c578-ea83-4ca0-9beb-eec1500cdc53)


- Editor Page

![image](https://github.com/user-attachments/assets/7dcef189-b242-4880-98e6-7667bcfe0a56)


## Run Locally

Clone the project

```bash
  git clone https://github.com/YOUR-USERNAME/InterViewCode.git
```

Go to the project directory

```bash
  cd InterViewCode
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

