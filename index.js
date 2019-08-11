const { exec } = require('child_process');
exec("date | md5sum | sed -r 's/(..){3}/\\1:/g;s/\\s+-$//'", (err, stdout) => {
  if (err) {
    return;
  }

  console.log(stdout);
});