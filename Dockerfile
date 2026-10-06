# Используем официальный образ Node.js (LTS версия)
FROM node:24.13.1-slim

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /src

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Ставим только production-зависимости
RUN npm install --omit=dev

# Копируем остальные файлы проекта
COPY . .

ENV NODE_ENV=production
EXPOSE 8080

# Запускаем от непривилегированного пользователя
USER node

# Команда запуска
CMD ["npm", "start"]
