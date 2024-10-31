# 🚀 Infinite Scroll App with GitHub API

**Live Demo**: [🔗 Посмотреть приложение на GitHub Pages](https://ulaista.github.io/vk_test_inifinity_list_element)

![GitHub last commit](https://img.shields.io/github/last-commit/ulaista.github.io/vk_test_inifinity_list_element) ![GitHub repo size](https://img.shields.io/github/repo-size/ulaista.github.io/vk_test_inifinity_list_element) ![GitHub issues](https://img.shields.io/github/issues/ulaista.github.io/vk_test_inifinity_list_element)

## 📌 О проекте

Проект представляет собой приложение для поиска репозиториев с GitHub с поддержкой:
- 🔄 **Бесконечного скролла** — подгрузка данных происходит по мере прокрутки страницы.
- 📝 **Редактирования и удаления элементов** — каждый элемент списка можно изменить локально.
- 💻 **UI на базе Ant Design** — для создания современных и удобных компонентов.
- 🚀 **Деплоя через GitHub Actions** — автоматический деплой обновлений на GitHub Pages при каждом изменении в основной ветке.

## 🔧 Технологии

- **TypeScript** — надежная типизация
- **React** — создание интерфейсов
- **MobX** — управление состоянием
- **Ant Design** — UI-компоненты
- **GitHub Actions** — автоматический деплой

## 📋 Как развернуть проект локально

1. Установите зависимости:

   ```bash
   yarn install
   ```

2. Добавьте `.env` файл и укажите GitHub API токен:

   ```plaintext
   REACT_APP_GITHUB_TOKEN=your_github_token
   ```

3. Запустите проект:

   ```bash
   yarn start
   ```

---