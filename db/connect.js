const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://Aymen:dRYVBc9sUtBKpBo1@nodeexpressprojects.dgpg94f.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority';

mongoose
  .connect(connectionString)
  .then(() => console.log('CONNECTED TO THE DB...'))
  .catch((err) => console.log(err));
