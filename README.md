Это - бэкенд составляющая проекта по фильтрации списка пользователей
Фильтрации происходит по именам-фамилиям пользователей, которые содержат строку* символов вводимую пользователем.
Строка приходит с фронтенд составляющей.
Фильтрации не зависит от регистра.

Например, есть список пользователей:
1 | Chelsie Eichmann | 1-466-807-1978
2 | Liam Wiegand | 1-327-988-3382
3 | Miss Ewald Dickinson | 699-653-9379
4 | Mrs. Celia Leannon | 428.801.9231

Согласно фильтрующей строке "li" будет отдано на response:
1. Liam Wiegand | 1-327-988-3382
2. Mrs. Celia Leannon | 428.801.9231

Перед тем работать необходимо инициализировать зависимости командой
npm i
Затем запустить локально сервер:
make start
