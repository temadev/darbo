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

### Configure `pm2` boot on startup

Install `pm2`:
```
npm install pm2 -g
```

Start and Daemonize application:

```
cd ~/darbo
pm2 start index.js --name="darbo" --watch
pm2 save
pm2 startup
```

Execute the command from output, reboot, open client at `<your_raspberry_ip>:3000` and enjoy.

## Trouble Shooting

If the above didn't work as expected, make sure that StandardFirmataPlus is installed on the board:

- Download Arduino IDE
- Plug in your Arduino or Arduino compatible microcontroller via USB
- Open the Arduino IDE, select: File > Examples > Firmata > StandardFirmataPlus
- Click the "Upload" button.
- If the upload was successful, the board is now prepared and you can close the Arduino IDE.

## Useful links
Setting up the Hardware: https://www.sitepoint.com/controlling-a-motorbot-using-arduino-and-node-js/
