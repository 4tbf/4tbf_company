# 4The BRIGHT Future
## Запуск приложения

- Установить Node.js версии
- Установить локально все пакеты через `yarn`
- Запустить сервер разработки: `yarn dev`
- Забилдить `yarn build`
- Запустить сервер `yarn start`

------
## Разработка

1. От ветки dev бранчуется ветка по номеру задачи, например `feature/510`
2. Изменения комитятся в соответствии с [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
с добавление номера задачи в самое начало, например: `510 feat: allow provided config object to extend other configs`.
До комита husky автоматический запускает next lint --fix, а до пуша next lint.
3. После завершения работы над задачей, ветка источник подмерживается в ветку задачи для решения возможных merge-конфликтов
4. Создаётся merge request через gitlab из ветки задачи в ветку dev, запрашивается код ревью
5. Для начала регресса dev заливается в main

------
## Зависимости

- `dependencies` ставятся всегда <b>конкретных версий</b> и обновляются только вручную
- `devDependencies` относящиеся к `babel` - всегда конкретных версий