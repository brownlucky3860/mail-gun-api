Sending-An-Email-with-MailGun

Mailgun along with body-parser(though I have not included it as a dependency, nor have I created a form),
can be used to create a basic form and submit the user-data to your back-end, and eventually send an email.

A) First of all:
1)Set up a mailgun account
2)Please do generate your api key, and get your domain name from mailgun's official website.
3)also create a list of authorized recipients.

B) Then add all that info in the code (i.e. YOUR_API_KEY, YOUR_DOMAIN, THE_AUTHORIZED_RECIPIENT, Sender can be any)

So Behind the scenes, What actually happens in through this code is:
1)Mailgun assembles a MIME message.
2)Adds the log entries to Mailgun's full text search index.
3)Delivers the email.

I hope this helps you and saves you a lot of time and energy... 
