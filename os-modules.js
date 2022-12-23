// OS Module
const os = require("os");
console.log(os.userInfo());
console.log(os.uptime());

// {
//     uid: -1,
//     gid: -1,
//     username: 'mikej',
//     homedir: 'C:\\Users\\mikej',
//     shell: null
//   }
//   2846404

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
// {
//     name: 'Windows_NT',
//     release: '10.0.19041',
//     totalMem: 17104592896,
//     freeMem: 8357883904
//   }
