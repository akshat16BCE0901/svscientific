package com.svscientific.datamanagement.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.*;
import java.io.IOException;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Properties;

@Service
public class MailService {

    private static final Logger logger = LoggerFactory.getLogger(MailService.class);
    private static final String SMTP_HOST = "smtp.gmail.com";
    private static final String SMTP_PORT = "465";
    private static final String USERNAME="akshat.yash.singhal@gmail.com";
    private static final String PASSWORD = "akshat_71";

    private static final String POP3_HOST = "imap.gmail.com";
    private static final String POP3_PORT = "993";
    private static final String MAIL_STORE_TYPE = "pop3";

    public Properties setupPropertiesForSendingEmail(){
        Properties properties = new Properties();
        properties.put("mail.smtp.host",SMTP_HOST);
        properties.put("mail.smtp.port",SMTP_PORT);
        properties.put("mail.smtp.ssl.enable","true");
        properties.put("mail.smtp.auth","true");
        return properties;
    }

    public Properties setupPropertiesForReadingMessages(){
        Properties properties = new Properties();
//        properties.put("mail.imap.host",POP3_HOST);
//        properties.put("mail.imap.port",POP3_PORT);
//        properties.put("mail.imap.starttls.enable","true");

        properties.put("mail.store.protocol","imaps");
        return properties;
    }

    public String sendMessage(String from,String to,String subject,String body){
        Properties properties = setupPropertiesForSendingEmail();
        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(USERNAME,PASSWORD);
            }
        });
        try{
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));
            message.setSubject(subject);
            Multipart multipart = new MimeMultipart();
            MimeBodyPart textPart = new MimeBodyPart();
            textPart.setText(body);
            multipart.addBodyPart(textPart);
            message.setContent(multipart);
            logger.info("Sending message {}",message.toString());
            Transport.send(message);
            logger.info("Message sent successfully...!!!");
        } catch (AddressException e) {
            e.printStackTrace();
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        logger.info("Send Message service called !!!");
        return "Send Message Service";
    }

    public String readMessageFromInbox() throws MessagingException, IOException {
        try{
            Properties properties = setupPropertiesForReadingMessages();
            Session session = Session.getDefaultInstance(properties,null);
            Store store = session.getStore("imaps");
            store.connect(POP3_HOST,USERNAME,PASSWORD);

            Folder inbox = store.getFolder("INBOX");
            inbox.open(Folder.READ_ONLY);

            Message[] emails  = inbox.getMessages();
            Arrays.sort(emails, (message, t1) -> {
                try {
                    return t1.getSentDate().compareTo(message.getSentDate());
                } catch (MessagingException e) {
                    e.printStackTrace();
                }
                return 0;
            });
            logger.info("Total messages in inbox are ---- {}",emails.length);
            logger.info("Reading message from Inbox !!!");
            int i=0;
            for(Message message : emails){
                logger.info("------------------------------");
                logger.info("Email Number --- {}",i+1);
                logger.info("Subject --- {}",message.getSubject());
                logger.info("date received --- {}",message.getSentDate());
                logger.info("From --- {}",message.getFrom()[0]);
                logger.info("To --- {}",message.getAllRecipients().toString());
                logger.info("Email Content --- {}",message.getContent().toString());
                logger.info("------------------------------");
                i++;
            }
            inbox.close(false);
            store.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "Reading Message from Inbox";
    }

    public String forwardMessage(){
        logger.info("Forwarding Message !!!");
        return "Forwarding Message";
    }

    public String replyToMessage(){
        logger.info("Replying to message !!!");
        return "Replying to Message";
    }

    public String readMessageFromOtherFolder(){
        logger.info("Reading messages from other folder!!!");
        return "Reading Message from Other Folder";
    }
}
