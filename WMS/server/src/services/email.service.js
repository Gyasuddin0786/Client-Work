import axios from "axios";

import {
  userIcon,
  emailIcon,
  phoneIcon,
  serviceIcon,
  locationIcon,
  dimensionIcon,
  materialIcon,
  contactIcon,
  descriptionIcon,
  subjectIcon,
  messageIcon,
} from "../utils/icons.js";

const companyName = "SK 1 Welding Workshop";
const sendBrevoEmail = async ({ to, subject, html }) => {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: companyName,
          email: process.env.COMPANY_EMAIL,
        },

        to: [
          {
            email: to,
          },
        ],

        subject,

        htmlContent: html,
      },

      {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "api-key": process.env.BREVO_API_KEY,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error("Brevo Email Error:");

    console.error(error.response?.data || error.message);

    throw error;
  }
};
const companyWebsite = "https://sk1-welding-workshop.vercel.app";

const primaryColor = "#ea580c";
const darkColor = "#111827";
const lightBg = "#f3f4f6";

const emailLayout = (title, subtitle, body) => `
<!DOCTYPE html>

<html>

<head>

<meta charset="UTF-8">

<meta
name="viewport"
content="width=device-width, initial-scale=1.0">

<title>${title}</title>

</head>

<body
style="
margin:0;
padding:0;
background:${lightBg};
font-family:Arial,Helvetica,sans-serif;
">

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="padding:30px 15px;">

<tr>

<td align="center">

<table
width="100%"
style="
max-width:650px;
background:#fff;
border-radius:14px;
overflow:hidden;
">

<tr>

<td
style="
background:${darkColor};
padding:35px;
text-align:center;
">

<img
src="https://res.cloudinary.com/xrvsqb8z/image/upload/v1785586753/qz4jjppxlxmrzcyverxz.png"
alt="${companyName}"
width="120"
style="
display:block;
margin:0 auto 15px;
">

<h1
style="
margin:0;
color:${primaryColor};
font-size:30px;
">

${companyName}

</h1>

<p
style="
margin-top:10px;
color:#d1d5db;
font-size:16px;
">

Design Your Vision. Our Strength.

</p>

</td>

</tr>

<tr>

<td style="padding:35px;">

<h2
style="
margin-top:0;
color:${darkColor};
">

${title}

</h2>

<p
style="
color:#6b7280;
font-size:16px;
line-height:1.7;
">

${subtitle}

</p>

${body}

</td>

</tr>

<tr>

<td
style="
background:#f9fafb;
padding:25px;
text-align:center;
border-top:1px solid #e5e7eb;
">

<p
style="
margin:0;
color:#6b7280;
font-size:14px;
">

Thank you for choosing

<strong>${companyName}</strong>

</p>

<p style="margin-top:10px;">

<a
href="${companyWebsite}"

style="
display:inline-block;
padding:12px 24px;
background:${primaryColor};
color:#fff;
text-decoration:none;
border-radius:8px;
font-weight:bold;
">

Visit Our Website

</a>

</p>

<p
style="
margin-top:20px;
color:#9ca3af;
font-size:13px;
">

© ${new Date().getFullYear()}
${companyName}

</p>

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`;

export const sendContactNotification = async (data) => {
  const { fullName, phone, email, subject, message } = data;

  return sendBrevoEmail({
    to: process.env.COMPANY_EMAIL,

    subject: `📩 New Contact Enquiry from ${fullName}`,

    html: emailLayout(
      "New Contact Enquiry",

      "A visitor has submitted the contact form from your website.",

      `
<table width="100%" style="border-collapse:collapse;">

<tr>
<td style="padding:12px;font-weight:600;">
${userIcon} Full Name
</td>
<td>${fullName}</td>
</tr>

<tr>
<td style="padding:12px;font-weight:600;">
${phoneIcon} Phone
</td>
<td>${phone}</td>
</tr>

<tr>
<td style="padding:12px;font-weight:600;">
${emailIcon} Email
</td>
<td>${email}</td>
</tr>

<tr>
<td style="padding:12px;font-weight:600;">
${subjectIcon} Subject
</td>
<td>${subject || "-"}</td>
</tr>

<tr>
<td style="padding:12px;font-weight:600;">
${messageIcon} Message
</td>
<td>${message}</td>
</tr>

</table>

`,
    ),
  });
};

export const sendQuoteNotification = async (data) => {
  return sendBrevoEmail({
    to: process.env.COMPANY_EMAIL,

    subject: `📩 New Quote Request - ${data.fullName}`,

    html: emailLayout(
      "New Quote Request",

      "A customer has requested a quotation from your website.",

      `

<table width="100%" style="border-collapse:collapse;">

<tr>
<td style="padding:12px;font-weight:600;">
${userIcon} Full Name
</td>
<td>${data.fullName}</td>
</tr>

<tr>
<td style="padding:12px;font-weight:600;">
${phoneIcon} Phone
</td>
<td>${data.phone}</td>
</tr>

<tr>
<td style="padding:12px;font-weight:600;">
${emailIcon} Email
</td>
<td>${data.email}</td>
</tr>

<tr>
<td style="padding:12px;font-weight:600;">
${serviceIcon} Service
</td>
<td>${data.service}</td>
</tr>

<tr>
<td style="padding:12px;font-weight:600;">
${locationIcon} Location
</td>
<td>${data.location}</td>
</tr>

<tr>
<td style="padding:12px;font-weight:600;">
${dimensionIcon} Dimensions
</td>
<td>${data.dimensions || "-"}</td>
</tr>

<tr>
<td style="padding:12px;font-weight:600;">
${materialIcon} Material
</td>
<td>${data.material || "-"}</td>
</tr>

<tr>
<td style="padding:12px;font-weight:600;">
${contactIcon} Preferred Contact
</td>
<td>${data.contactMethod}</td>
</tr>

<tr>
<td style="padding:12px;font-weight:600;">
${descriptionIcon} Description
</td>
<td>${data.description}</td>
</tr>

</table>

${
  data.images?.length
    ? `
<div style="margin-top:25px;">

<strong>Project Images</strong>

<br><br>

${data.images
  .map(
    (img) => `
<div style="margin-bottom:20px;">

<img
src="${img.url}"
width="250"
style="
border-radius:8px;
border:1px solid #ddd;
">

<br><br>

<a href="${img.url}">
View Full Image
</a>

</div>
`,
  )
  .join("")}

</div>
`
    : ""
}

`,
    ),
  });
};
export const sendAutoReply = async (data) => {
  return sendBrevoEmail({
    to: data.email,

    subject: "✅ We've Received Your Request",

    html: emailLayout(
      `Thank You, ${data.fullName}!`,

      `We appreciate your interest in SK 1 Welding Workshop.`,

      `

<p
style="
font-size:16px;
line-height:1.8;
color:#4b5563;
">

Your request has been successfully received.

<br><br>

Our engineering team will carefully review your requirements and contact you shortly.

</p>

<div
style="
background:#fff7ed;
border-left:5px solid #ea580c;
padding:18px;
margin-top:30px;
">

<h3
style="
margin-top:0;
color:#ea580c;
">

What happens next?

</h3>

<ul
style="
padding-left:20px;
line-height:1.8;
">

<li>✔ We review your requirements.</li>

<li>✔ Our expert prepares the quotation.</li>

<li>✔ We contact you within 24 hours.</li>

<li>✔ Final discussion before project starts.</li>

</ul>

</div>

<p
style="
margin-top:35px;
font-size:16px;
">

Thank you for trusting

<strong>SK 1 Welding Workshop</strong>.

</p>

`,
    ),
  });
};
