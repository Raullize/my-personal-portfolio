/**
 * Formata uma data para o formato brasileiro (DD/MM/YYYY)
 * @param {Date|string} date - Data a ser formatada
 * @returns {string} Data formatada no padrão brasileiro
 */
export function formatDateBR(date) {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  return dateObj.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

/**
 * Formata uma data para o formato longo (Ex: 12 de Janeiro de 2023)
 * @param {Date|string} date - Data a ser formatada
 * @returns {string} Data formatada no padrão longo
 */
export function formatDateLong(date) {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  return dateObj.toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
} 