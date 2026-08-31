import { ContactFormData } from '../types';

/**
 * Centralized Studio Contact Information & Utilities
 * All contact details across the website are sourced from here.
 * You can also override via environment variables if desired.
 */
export const STUDIO_CONFIG = {
  name: 'Agentic Vision',
  // WhatsApp International format without '+', spaces, '-', or parentheses
  whatsappNumber: (import.meta as unknown as { env?: { VITE_WHATSAPP_NUMBER?: string; VITE_CONTACT_EMAIL?: string } }).env?.VITE_WHATSAPP_NUMBER || '923157477618',
  whatsappDisplay: '+92 315 7477618',
  email: (import.meta as unknown as { env?: { VITE_WHATSAPP_NUMBER?: string; VITE_CONTACT_EMAIL?: string } }).env?.VITE_CONTACT_EMAIL || 'agenticvision01@gmail.com',
  emailSubject: 'New Project Inquiry — Agentic Vision',
  responseTime: 'Under 12 Hours (Guaranteed)',
  coverage: 'Global / Pakistan, EMEA, APAC',
  status: 'Accepting select client projects for Q2/Q3 2026'
};

/**
 * Generates the standardized, professionally formatted inquiry message
 * used for both WhatsApp and Email pre-fills.
 */
export function formatInquiryMessage(formData: ContactFormData): string {
  const name = formData.name?.trim() || '';
  const email = formData.email?.trim() || '';
  const service = formData.service?.trim() || '';
  const details = formData.projectDetails?.trim() || '';
  const nda = formData.ndaRequired ? '\nNDA Requested: Yes' : '';

  return `Hello Agentic Vision,

I would like to discuss a project.

Name: ${name}
Email: ${email}
Service: ${service}

Project Details:
${details}${nda}

Thank you.`;
}

/**
 * Prepares the WhatsApp direct-open link with the pre-filled message.
 */
export function getWhatsAppUrl(formData: ContactFormData): string {
  const text = formatInquiryMessage(formData);
  const cleanNumber = STUDIO_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Prepares the mailto link with destination, subject, and pre-filled body.
 */
export function getMailtoUrl(formData: ContactFormData): string {
  const body = formatInquiryMessage(formData);
  const subject = encodeURIComponent(STUDIO_CONFIG.emailSubject);
  const encodedBody = encodeURIComponent(body);
  return `mailto:${STUDIO_CONFIG.email}?subject=${subject}&body=${encodedBody}`;
}
