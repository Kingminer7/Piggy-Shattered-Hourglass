const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"))
})

app.listen(port, () => {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  console.log(`[${dateTime}] Listening on port ${port}`)
  fs.readFile("OnlineTimes.txt", "utf-8", (err, data) => {
    if (err) console.log(err);
    fs.writeFile("OnlineTimes.txt", data + `\n${dateTime}`, (err) => {
      if (err) console.log(err);
    });
  });
})
