import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, html, text }) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('Resend is not configured: missing RESEND_API_KEY');

    return {
      ok: false,
      skipped: true,
      reason: 'Resend API key not configured',
    };
  }

  try {
    console.log('Sending email via Resend to:', to);

    const { data, error } = await resend.emails.send({
      from: 'Vypax Technologies <onboarding@resend.dev>',
      to: [to],
      subject,
      html,
      text,
    });

    if (error) {
      console.error('Resend email failed:', error);

      return {
        ok: false,
        error: error.message || String(error),
      };
    }

    console.log('Resend email sent successfully:', data?.id);

    return {
      ok: true,
      messageId: data?.id,
    };
  } catch (error) {
    console.error('Resend email exception:', error);

    return {
      ok: false,
      error: error.message,
    };
  }
}

export default { sendEmail };