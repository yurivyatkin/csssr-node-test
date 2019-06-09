const Mailbox = require('./Mailbox');

describe('Mailbox', () => {
  it('given a name, creates a mailbox', () => {
    const mailbox = new Mailbox('name');
    expect(mailbox).toBeDefined();
  });
  it('given the same name, creates the same mailbox', () => {
    const mailbox = new Mailbox('name');
    const sameMailbox = new Mailbox('name');
    expect(sameMailbox === mailbox).toBe(true);
  });
  it('given different names, creates different mailboxes', () => {
    const mailbox = new Mailbox('name');
    const newMailbox = new Mailbox('newName');
    expect(newMailbox !== mailbox).toBe(true);
  });
});
