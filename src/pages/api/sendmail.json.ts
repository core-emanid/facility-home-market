import type { APIRoute } from 'astro';
import { transporter as mailTransporter } from '../../config/email/emailConfig';
import { Form, getEmailDetail, getHtmlTemplate } from '../../utils/mail';
import * as dotenv from 'dotenv';

dotenv.config();

// TODO: perform validation and front feedbacks

export const POST: APIRoute = async ({ request }) => {

  if (request.headers.get('Content-Type') === 'application/json') {
    const formData = await request.json();
    let form = Object.assign(new Form(), formData) as Form;

    const html = getHtmlTemplate(form);
    const mailDetails = getEmailDetail(html);

    let mailresult;
    
    try {
      mailresult = await mailTransporter.sendMail(mailDetails)
      
    } catch (error) {
      
      console.error('******* Error: ', error)
    }
    console.log('Message sent: %s', mailresult?.messageId)

    return new Response(JSON.stringify(mailDetails), {
      status: 200,
    });
  }
  return new Response(null, { status: 400 });
}