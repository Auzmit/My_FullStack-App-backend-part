import fs from 'fs/promises';
import _ from 'lodash';

import makeServer from './server.js';

export default async (port, callback = () => {}) => {
  const data = await fs.readFile('phonebook.txt', 'utf-8');

  // BEGIN (write your solution here)

  // Моё решение
  const usersById = {};
  data.trim().split('\n').forEach((string) => {
    const stringData = string.split(' | ');
    usersById[stringData[0]] = {
      name: stringData[1],
      phone: stringData[2],
    };
  });

  // Решение учителя
  // const users = data
  //   .trim()
  //   .split('\n')
  //   .map((value) => value.split('|').map((item) => item.trim()));
  // const usersIds = users.map(([id]) => id);
  // const usersData = users.map(([, name, phone]) => ({ name, phone }));
  // const usersById = _.zipObject(usersIds, usersData);

  // END

  const server = makeServer(usersById);
  server.listen(port, () => callback(server));
};
