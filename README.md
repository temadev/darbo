# darbo

We are to create a new super smart bot and starting from scratch here.

We’ll be using the following hardware for this project:

- Arduino
- 2 Motors
- L298 Motor controller
- A cord connecting Arduino to the computer

The server code relies on Node.js and Express. We are using Socket.IO to maintain a realtime connection between the client and the server by harnessing the power of WebSockets and johnny-five to help Arduino in communicating with the server.
The client side implementation involves the creation of the interface where the user can select the different motions of the motors and control other sensors.

## Getting Started

Go to your Raspberry:

```
ssh pi@<your_raspberry_ip>
```

Install or update `nvm`:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
```

Install `nodejs`:

```
nvm install node v6.9.5
```

Clone repository and install dependencies via `npm`:

```
git clone https://github.com/temadev/darbo.git
cd darbo
npm install
```

Start the server:

```
node index.js
```

Open `<your_raspberry_ip>:3000` to take control on your bot.


## Useful links
Starting tutorial: https://www.sitepoint.com/controlling-a-motorbot-using-arduino-and-node-js/
