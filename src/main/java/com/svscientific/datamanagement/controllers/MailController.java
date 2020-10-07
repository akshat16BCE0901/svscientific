package com.svscientific.datamanagement.controllers;

import com.svscientific.datamanagement.services.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;
import java.io.IOException;

@RestController
@RequestMapping("/api/mail")
public class MailController {

    @Autowired private MailService mailService;

    @RequestMapping(value = "/send")
    public String sendEmail(){
        String from = "akshat.yash.singhal@gmail.com";
        String to = "akshat.singhal2016@vitstudent.ac.in";
        String subject = "Test Message";
        String body = "Message Body - Hi, My name is Akshat Singhal !!";
        return mailService.sendMessage(from,to,subject,body);
    }

    @RequestMapping(value = "/read")
    public String readMessagesFromInbox() throws IOException, MessagingException {
        try {
            return mailService.readMessageFromInbox();
        } catch (MessagingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    @RequestMapping(value = "/reply")
    public String replyToMessage(){
        return mailService.replyToMessage();
    }

    @RequestMapping(value = "/forward")
    public String forwardMessage(){
        return mailService.forwardMessage();
    }

    @RequestMapping(value = "/readothers")
    public String readMessagesFromOtherFolders(){
        return mailService.readMessageFromOtherFolder();
    }
}
