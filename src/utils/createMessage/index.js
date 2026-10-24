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
<b>ФИО:</b> ${name}
<b>Email:</b> ${email}
<b>Tel:</b> ${phone}
<b>Согласие ПД:</b> ${checkbox ? 'ДА' : 'НЕТ'}
====================
<b>Сообщение:</b> ${message}
`;

  if (href) {
    return (
      text +
      `
====================
<a href="${href}">ссылка на товар</a>`
    );
  }

  return text;
};
