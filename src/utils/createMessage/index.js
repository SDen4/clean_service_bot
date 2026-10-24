import { masking } from '../masking/index.js';

/** Генерация сообщения в чат (Обратная связь) */
export const createMessage = ({
  name,
  email,
  phone,
  message,
  checkbox,
  href,
}) => {
  const text = `
ФИО: ${name}
Email: ${email}
Tel: ${masking(phone)}
Согласие ПД: ${checkbox ? 'ДА' : 'НЕТ'}
====================
Сообщение: ${masking(message)}
`;

  if (href) {
    return (
      text +
      `
====================
[ссылка на товар](${href})`
    );
  }

  return text;
};
