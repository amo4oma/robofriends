# lognographer
Super simple logger that adds colorizing and beautifying of objects.

---

Works similarly to Winston and other loggers.

```javascript
const { logger } = require('lognographer');
...
logger.debug('Super critical message', objectOfLogging);
```

And to add a time stamp to your log output, just grab `loggerTS`:

```javascript
const { loggerTS } = require('lognographer');
...
loggerTS.info('Time sensitive message', objectOfLogging);
```

Supports two arguments (for now) and `warn`, `info`, `debug` and `error` log types (yellow, green, blue and red respectively).
