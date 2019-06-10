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
  // eslint-disable-next-line class-methods-use-this
  sendMail() {}
  // eslint-disable-next-line class-methods-use-this
  pre() {}
  // eslint-disable-next-line class-methods-use-this
  notify() {}
}

module.exports = Mailbox;
