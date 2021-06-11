const colorize = require('json-colorizer');
const chalk = require('chalk');

const timestamp = () => new Date().toISOString();

const colorObj = (txt) => {
  let newTxt = ''; // this means I'm not showing undefineds :/
  if (typeof txt === 'string') {
    newTxt = ` ${txt}`;
  } else if (txt === null) {
    newTxt = ` ${chalk.gray(txt)}`;
  } else if (typeof txt === 'object') {
    newTxt = `\n${colorize(JSON.stringify(txt, null, 2))}`;
  }
  return newTxt;
};

const formatter = (type, color, ts, txt, msg, msgRaw = false) => {
  /* eslint-disable-next-line no-console */
  console.log(`${
    ts ? `${timestamp()} - ` : ''
  }${
    chalk[color](`${type}:`)
  }${
    colorObj(txt)
  }${
    msgRaw ? `\n${msg}` : colorObj(msg)
  }`);
};

const showRawMsgForError = true;
const log = (ts = false) => ({
  error: (txt, msg) => formatter('error', 'red', ts, txt, msg, showRawMsgForError),
  info: (txt, msg) => formatter('info', 'green', ts, txt, msg),
  warn: (txt, msg) => formatter('warn', 'yellow', ts, txt, msg),
  debug: (txt, msg) => formatter('debug', 'blue', ts, txt, msg),
});

exports.logger = log();
exports.loggerTS = log(true);
