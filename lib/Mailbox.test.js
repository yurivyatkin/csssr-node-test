const Mailbox = require('./Mailbox');

describe('Mailbox', () => {
  it('given a name, creates a mailbox', () => {
    const mailbox = new Mailbox('name');
    expect(mailbox).toBeDefined();
  });
});
