/** Генерация сообщения в чат */
export const createMessage = ({ name, email, phone, message, checkbox }) => {
  return `
ФИО: ${name}
Email: ${email}
Tel: ${phone}
Согласие ПД: ${checkbox ? 'ДА' : 'НЕТ'}
==========
Сообщение: ${message}
`;
};
