class MailboxRepository {
  constructor() {
    this.storage = {};
  }
  create(name, mailbox) {
    this.storage[name] = mailbox;
  }
  find(name) {
    return this.storage[name];
  }
}

module.exports = MailboxRepository;
