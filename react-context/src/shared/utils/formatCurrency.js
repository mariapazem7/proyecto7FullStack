export const formatCurrency = ( 
    amount,
    { 
        currency, 
        locale, 
        minimumFractionDigits = 0, 
        maximumFractionDigits = 0 
    }
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount);
};