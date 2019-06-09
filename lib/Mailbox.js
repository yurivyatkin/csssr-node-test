const mailboxRepository = {};

class Mailbox {
  constructor(name) {
    if (mailboxRepository[name]) {
      return mailboxRepository[name];
    }
    this.name = name;
    mailboxRepository[name] = this;
    return this;
  }
}

module.exports = Mailbox;
