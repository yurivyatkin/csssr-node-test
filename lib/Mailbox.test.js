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
  it('has sendMail method', () => {
    const mailbox = new Mailbox('name');
    expect(() => {
      mailbox.sendMail('some mail');
    }).not.toThrow();
  });
  it('has pre method', () => {
    const mailbox = new Mailbox('name');
    expect(() => {
      mailbox.pre(() => {});
    }).not.toThrow();
  });
  it('has notify method', () => {
    const mailbox = new Mailbox('name');
    expect(() => {
      mailbox.pre(() => {});
    }).not.toThrow();
  });
  it('calls each notify hook only once when sendMail is called', () => {
    const mailbox = new Mailbox('name');
    const nHook1 = jest.fn();
    const nHook2 = jest.fn();
    mailbox.notify(nHook1);
    mailbox.notify(nHook2);
    mailbox.sendMail();
    expect(nHook1).toBeCalledTimes(1);
    expect(nHook2).toBeCalledTimes(1);
  });
});
