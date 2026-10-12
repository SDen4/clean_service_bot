/** Генерация сообщения в чат */
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
Tel: ${phone}
Согласие ПД: ${checkbox ? 'ДА' : 'НЕТ'}
==========
Сообщение: ${message}
`;

  if (href) {
    return (
      text +
      `
==========
(ссылка на товар)[${href}] 
`
    );
  }

  return text;
};
