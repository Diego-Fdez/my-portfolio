import { Mailer } from 'nodemailer-react';

const transport = {
  host: process.env.EMAIL_HOST,
  secure: true,
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
};

export const WelcomeEmail = ({ name, email, message }) => ({
  subject: `👋 ${email}`,
  body: (
    <div>
      <p>Hello {name}!</p>
      <p>{message}</p>
    </div>
  ),
});

// export const PasswordEmail =
// export const ReminderEmail =

export const mailer = Mailer({ transport }, { WelcomeEmail });

mailer.send(
  'WelcomeEmail',
  { firstName: 'Mathieu' },
  {
    to: 'my@email.com',
  }
);
