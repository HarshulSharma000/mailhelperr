const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (recipients) => {
    const invalidEmails = recipients.split(';').map(
        recipient => recipient.trim())
        .filter(recipient => re.test(recipient) === false);
    
    if(invalidEmails.length)
        return `Invalid emails are:-${invalidEmails}`;
}