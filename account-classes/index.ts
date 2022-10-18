import { Individual, Joint, Custodial, Corporate } from "./types";
class Account {
  account: string = "";
  ownerType: string;
  owner: Individual | Joint | Custodial | Corporate;

  constructor(account: string, data) {
    this.account = account;
    this.owner = data;
  }
}
class individualAccount extends Account {
  owner: Individual;
  constructor(data: Individual, account: string) {
    super(account, data);

    this.ownerType = "individual owner";
  }
}
class jointAccount extends Account {
  owner: Joint;
  constructor(data: Joint, account: string) {
    super(account, data);
    this.owner = data;
    this.ownerType = "joint ownership";
  }
}
class custodialAccount extends Account {
  owner: Custodial;
  constructor(data: Custodial, account: string) {
    super(account, data);
    this.owner = data;
    this.ownerType = "custodial ownership";
  }
}
class corporateAccount extends Account {
  owner: Corporate;
  constructor(data: Corporate, account: string) {
    super(account, data);
    this.owner = data;
    this.ownerType = "corporate ownership";
  }
}

const lolo = new individualAccount({ name: "oli", taxId: "h42n3" }, "acc46282");
console.log(lolo);
const lolo2 = new jointAccount(
  [
    { name: "oli", taxId: "h42n3" },
    { name: "mariana", taxId: "uuuuu" },
  ],
  "acc46282"
);
console.log(lolo2);
