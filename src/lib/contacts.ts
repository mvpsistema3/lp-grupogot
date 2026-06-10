// Contatos de WhatsApp do GRUPO GOT — número único por área.
// Victhor — Comercial | Matheus — Operações
export const COMMERCIAL_WHATSAPP = "5521989041735";
export const COMMERCIAL_WHATSAPP_DISPLAY = "+55 21 98904-1735";
export const OPERATIONS_WHATSAPP = "5521986486936";

export const waLink = (number: string, message?: string) =>
  `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
