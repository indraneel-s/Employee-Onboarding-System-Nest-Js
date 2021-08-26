import { MailerService } from '@nest-modules/mailer'; 
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserMail(toEmail:string,subject:string,message:string) {
   

    await this.mailerService.sendMail({
      to: toEmail,
    
      subject: subject,
      template: './structure', 
      context: { 
        message: message,
        
      },
    });
  }
}