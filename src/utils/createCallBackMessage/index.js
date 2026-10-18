/** Генерация сообщения в чат (Перезвонить мне) */
export const createCallBackMessage = ({
  name,
  phone,
  checkbox,
  checkboxAgreement,
}) => {
  const text = `
Пользователь просит перезвонить ему
====================
ФИО: ${name}
Tel: ${phone}
Согласие ПД: ${checkbox ? 'ДА' : 'НЕТ'}
Согласие Перезвонить: ${checkboxAgreement ? 'ДА' : 'НЕТ'}
`;

  return text;
};
