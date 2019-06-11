// const MailboxRepository = require('./MailboxRepository');

// const mailboxRepository = new MailboxRepository();

class Mailbox {
  constructor(name) {
    if (this.repository.getByName(name)) {
      return this.repository.getByName(name);
    }
    this.name = name;
    this.notifyHooks = [];
    this.repository.addByName(name, this);
    return this;
  }

  static setRepository(repository) {
    this.repository = repository;
  }

  sendMail(mail) {
    this.notifyHooks.forEach(hook => hook(mail));
  }
  // eslint-disable-next-line class-methods-use-this
  pre() {}
  notify(hook) {
    this.notifyHooks.push(hook);
  }
}

module.exports = Mailbox;
