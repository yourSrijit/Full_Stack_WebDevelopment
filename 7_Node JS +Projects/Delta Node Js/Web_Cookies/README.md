## Using Signed Cookies in Node.js with Express.js

### Overview

Signed cookies in Express.js provide a way to store session data on the client-side while ensuring its integrity. This means that the data stored in the cookie is signed with a secret key, preventing tampering by the client.

### Prerequisites

- Make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

- First, initialize a new Node.js project:

```
npm init -y
```
- Next, install Express.js and cookie-parser:

```
npm install express cookie-parser
```
## Server-side Code (Node.js)
- Create a new file named server.js:

```
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const secretKey = 'your-secret-key';

app.use(cookieParser(secretKey));

app.get('/', (req, res) => {
  // Set a signed cookie
  res.cookie('user', 'john', { signed: true });

  res.send('Cookie has been set');
});

app.get('/verify', (req, res) => {
  // Retrieve and verify the signed cookie
  const user = req.signedCookies.user;

  if (user) {
    res.send(`Welcome back, ${user}!`);
  } else {
    res.send('Cookie verification failed');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```
##  Client-side Code (JavaScript)
You can use JavaScript on the client-side to send requests to the server and retrieve the signed cookie. Here's a simple example using the Fetch API:

```
fetch('/verify')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  ```