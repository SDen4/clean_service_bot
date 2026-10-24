/** Генерация сообщения в чат (Перезвонить мне) */
export const createCallBackMessage = ({
  name,
  phone,
  checkbox,
  checkboxAgreement,
}) => {
  const text = `
Пользователь просит перезвонить
====================
<b>ФИО:</b> ${name}
<b>Tel:</b> ${phone}
<b>Согласие ПД:</b> ${checkbox ? 'ДА' : 'НЕТ'}
<b>Согласие Перезвонить:</b> ${checkboxAgreement ? 'ДА' : 'НЕТ'}
`;

  return text;
};
