export const convertToBRL = number => `R$${number.toFixed(2).replace(/[.]/g, ',')}`;
