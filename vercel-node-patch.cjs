const os = require("os");

os.hostname = () => "arai-note";
os.userInfo = () => ({
  uid: -1,
  gid: -1,
  username: "arai",
  homedir: "C:\\Users\\arai",
  shell: null,
});
