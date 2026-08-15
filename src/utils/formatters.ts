/**
 * Prende un numero e lo restituisce formattato con il simbolo dell'Euro (€)
 */
export function formatPrice(price: number): string {
  return `${price.toFixed(2)} €`; // Trasforma es. 89 in "89.00 €"
}