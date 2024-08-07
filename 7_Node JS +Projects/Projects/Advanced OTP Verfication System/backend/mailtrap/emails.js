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
    subject: "Pleae verify your email ",
    html:  VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}",otp),
    category: "Email Verification",
  })
  console.log("Email sent successfully",response);
    }catch(error){
        console.error(`Error sending verification`,error);
        throw new Error(`Error sending verification email: ${error}`)

    }
}