// @ts-check

import fs from 'fs/promises';
import _ from 'lodash';

import makeServer from './server.js';

export default async (port, callback = () => {}) => {
  const data = await fs.readFile('phonebook.txt');
  const users = data.toString()
    .trim()
    .split('\n')
    .map((value) => value.split('|').map((item) => item.trim()));
  const usersIds = users.map(([id]) => id);
  const usersData = users.map(([, name, phone]) => ({ name, phone }));
  const usersById = _.zipObject(usersIds, usersData);

  const server = makeServer(usersById);
  server.listen(port, callback.bind(null, server));
};
