import http from 'http';

export default (usersById) => http.createServer((request, response) => {
  request.on('end', () => {
    if (request.url === '/') {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(usersById).length}`,
      ];
      response.end(messages.join('\n'));
    } else if (request.url.startsWith('/search')) {
      // BEGIN (write your solution here)

      // Моё решение
      const q = request.url.split('=').at(-1).toLowerCase();
      const result = [];
      Object.values(usersById).forEach((user) => {
        if (user.name.toLowerCase().includes(q)) {
          result.push(`${user.name}, ${user.phone}`);
        }
      });
      response.end(result.join('\n'));

      // Решение учителя
      // const url = new URL(request.url, `http://${request.headers.host}`);
      // const q = url.searchParams.get('q');

      // if (!q) {
      //   response.end();
      //   return;
      // }

      // const normalizedSearch = q.trim().toLowerCase();

      // const result = Object.values(usersById)
      //   .filter((user) => user.name.toLowerCase().includes(normalizedSearch))
      //   .map((user) => `${user.name}, ${user.phone}`)
      //   .join('\n');
      // response.end(result);

      // END
    }
  });

  request.resume();
});
