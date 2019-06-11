const MailboxRepository = require('./MailboxRepository');

let repository;

describe('MailboxRepository', () => {
  beforeEach(() => {
    repository = new MailboxRepository();
  });
  it('can save a mailbox', () => {
    const mailbox = { something: 'something' };
    expect(() => {
      repository.save('name', mailbox);
    }).not.toThrow();
  });
  it('can find a mailbox', () => {
    const mailbox = { something: 'something' };
    repository.create('name', mailbox);
    expect(() => {
      repository.find('name');
    }).not.toThrow();
  });
  it('finds the same mailbox as it was saved', () => {});
});
