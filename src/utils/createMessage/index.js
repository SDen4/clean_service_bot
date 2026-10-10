/** Генерация сообщения в чат */
export const createMessage = ({ name, email, phone, message }) => {
  return `
ФИО: ${name}
Email: ${email}
Tel: ${phone}
==========
Сообщение: ${message}
`;
};
