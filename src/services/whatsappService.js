import { business } from '../config/business'

export function buildWhatsAppOrderUrl(plant, quantity = 1) {
  const message = [
    `Hello ${business.name},`,
    '',
    'I would like to enquire about this plant:',
    `Plant: ${plant.name}`,
    `Quantity: ${quantity}`,
    `Price: Please share the current price.`,
    '',
    'Please confirm availability and delivery options.',
    'Customer name:',
    'Location:',
  ].join('\n')

  return `https://wa.me/${business.whatsappDigits}?text=${encodeURIComponent(message)}`
}

export function buildWhatsAppOrderFormUrl(order) {
  const message = [
    `Hello ${business.name},`,
    '',
    'I would like to place an order:',
    `Name: ${order.name}`,
    `Phone: ${order.phone}`,
    `Plant / item: ${order.plant === 'Other' ? order.otherPlant : order.plant}`,
    `Quantity: ${order.quantity}`,
    `Delivery or pickup: ${order.fulfilment}`,
    `${order.fulfilment === 'Delivery' ? 'Delivery address' : 'Pickup notes'}: ${order.address || 'Not provided'}`,
    `Additional notes: ${order.notes || 'None'}`,
    '',
    'Please confirm availability, price and next steps.',
  ].join('\n')

  return `https://wa.me/${business.whatsappDigits}?${new URLSearchParams({ text: message })}`
}

export function buildWhatsAppGardeningUrl(requirements) {
  const message = [
    `Hello ${business.name},`,
    '',
    'I would like help with a gardening project.',
    `My gardening requirements: ${requirements}`,
    '',
    'Please suggest suitable plants and next steps.',
  ].join('\n')

  return `https://wa.me/${business.whatsappDigits}?text=${encodeURIComponent(message)}`
}

export function buildWhatsAppSupportUrl() {
  const message = [
    `Hello ${business.name},`,
    '',
    'I have a question about your plants, orders or nursery services.',
    'Please help me with my enquiry.',
  ].join('\n')

  return `https://wa.me/${business.whatsappDigits}?text=${encodeURIComponent(message)}`
}

export function buildWhatsAppBlogUrl(articleTitle) {
  const message = [
    `Hello ${business.name},`,
    '',
    `I have a question about your gardening article: ${articleTitle}`,
    'Please help me with my plant or gardening enquiry.',
  ].join('\n')

  return `https://wa.me/${business.whatsappDigits}?text=${encodeURIComponent(message)}`
}

export function getCallUrl() {
  return `tel:+${business.whatsappDigits}`
}
