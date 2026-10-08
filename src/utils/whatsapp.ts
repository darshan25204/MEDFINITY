import { CartItem, ClientEnquiry, Product } from '../types';

export function formatProductWhatsAppMessage(product: Product, intent: string = 'Purchase or Rental Quote'): string {
  const specsSummary = product.keySpecs.slice(0, 3).map(s => `  • ${s}`).join('\n');

  return `Hello *MEDFINITY Surgical Equipment*,

I would like to enquire about the following equipment:

📌 *Product:* ${product.name}
🆔 *Model Code:* ${product.code}
📁 *Category:* ${product.categoryLabel}
⚙️ *Mechanism:* ${product.mechanism || 'Standard'}
🏷️ *Enquiry Type:* ${intent}

*Key Specifications:*
${specsSummary}

📍 *Delivery Area:* Bengaluru / Karnataka

Please share:
1. Current pricing / Quotation
2. Stock availability & delivery time
3. Technical brochure & warranty terms

Looking forward to your response. Thank you!`;
}

export function formatCartWhatsAppMessage(
  items: CartItem[],
  client: ClientEnquiry,
  businessName: string = 'MEDFINITY Surgical Equipment'
): string {
  const itemListText = items.map((item, idx) => {
    return `${idx + 1}. *[${item.product.code}]* ${item.product.name}
   • Qty: ${item.quantity} unit(s)
   • Requirement: ${item.intent}${item.notes ? `\n   • Note: ${item.notes}` : ''}`;
  }).join('\n\n');

  const clientInfo = `*CLIENT & CONTACT DETAILS:*
• Name: ${client.name || 'Healthcare Professional / Customer'}
• Phone: ${client.phone}
${client.email ? `• Email: ${client.email}\n` : ''}• Client Type: ${client.clientType}
${client.organization ? `• Facility / Hospital: ${client.organization}\n` : ''}• Location / City: ${client.city || 'Bengaluru'}
${client.address ? `• Delivery Address: ${client.address}\n` : ''}`;

  const notesSection = client.additionalNotes 
    ? `\n*SPECIAL REQUIREMENTS & NOTES:*\n"${client.additionalNotes}"\n` 
    : '';

  return `📋 *EQUIPMENT QUOTE REQUEST*
*To: ${businessName}*

${clientInfo}
*REQUESTED ITEMS (${items.length} Product${items.length > 1 ? 's' : ''}):*
${itemListText}
${notesSection}
Please provide an official quotation with best commercial rates, tax details, and delivery lead time. Thank you!`;
}

export function getWhatsAppUrl(phoneNumber: string, messageText: string): string {
  // Clean phone number: remove all non-digits
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const encoded = encodeURIComponent(messageText);
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

export function getEmailQuoteUrl(
  items: CartItem[],
  client: ClientEnquiry,
  recipientEmail: string = 'medfinitysurgical@gmail.com'
): string {
  const subject = encodeURIComponent(`[Quote Request] MEDFINITY Surgical Equipment - ${client.name || 'Client RFQ'}`);
  const body = encodeURIComponent(formatCartWhatsAppMessage(items, client, 'MEDFINITY Surgical Equipment'));
  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}
