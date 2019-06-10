const mailboxRepository = {};

class Mailbox {
  constructor(name) {
    if (mailboxRepository[name]) {
      return mailboxRepository[name];
    }
    this.name = name;
    this.notifyHooks = [];
    mailboxRepository[name] = this;
    return this;
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
