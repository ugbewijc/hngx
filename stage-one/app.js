const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  const { slack_name, track } = req.query;

  /*
   * Get the current day of the week
   */
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];

  /*
   * Get the current UTC time in the format "2023-09-07T22:00:10Z"
   */
  const currentUTC = new Date().toISOString().split('.')[0] + 'Z';

  /*
   * JSON response
   */
  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: currentUTC,
    track,
    github_file_url: 'https://github.com/ugbewijc/hngx/blob/master/stage-one/app.js',
    github_repo_url: 'https://github.com/ugbewijc/hngx',
    status_code: 200,
  };

  res.json(response);
  res.end();
});

/*
 * Start the server
 */

/*app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/

module.exports = app;
