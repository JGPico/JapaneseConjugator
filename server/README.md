# Start

node required

```
npm run dev to start

# Environment Variables

## Setting the PORT

You can set the `PORT` environment variable to specify which port the Express server should listen on.

### Windows (Command Prompt)

```

set PORT=5000 && node index.js

```

### Windows (PowerShell)

```

$env:PORT=5000; node index.js

```

### Unix/Linux/macOS

```

PORT=5000 node index.js

```

If `PORT` is not set, the server will default to port 3000.
```
