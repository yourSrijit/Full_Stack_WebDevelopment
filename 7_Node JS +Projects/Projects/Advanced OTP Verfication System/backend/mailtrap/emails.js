import {
	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplate.js";

import { mailtrapClient, sender } from "./mailtrapConfig.js";


export const sendVerificationEmail=async(email,otp)=>{

    const recipients=[{email}];

    try{
    const response=await mailtrapClient.send({
    from: sender,
    to: recipients,
    subject: "Please verify your email ",
    html:  VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",otp),
    category: "Email Verification",
  })
  console.log("Email sent successfully",response);
    }catch(error){
        console.error(`Error sending verification`,error);
        throw new Error(`Error sending verification email: ${error}`)

    }
}


export const sendWelcomeEmail=async(email,name)=>{

  const recipients=[{email}];

    try{
    const response=await mailtrapClient.send({
    from: sender,
    to: recipients,
    // subject: `Welcome ${name} 😍 Thanks for joining with us`,
    template_uuid: "258dc8af-be15-4bda-bf50-8e1bd6ad746b",
    template_variables: {
      name: name,
      company_info_name:"Srijit Bera",
    }
  })
  console.log("Welcome mail sent successfully",response);
    }catch(error){
        console.error(`Error sending welcome mail`,error);
        throw new Error(`Error sending welcome email: ${error}`)
    }
}