import { Individual, Joint, Custodial, Corporate } from "./owner-types";
abstract class Account {
  account: string = "";
  ownerType: string = "";

  constructor(account: string) {
    this.account = account;
  }
}
export class individualAccount extends Account {
  owner: Individual;
  constructor(data: Individual, account: string) {
    super(account);

    this.owner = data;
    this.ownerType = "individual account";
  }
}
export class jointAccount extends Account {
  owner: Joint;
  constructor(data: Joint, account: string) {
    super(account);
    this.owner = data;
    this.ownerType = "joint account";
  }
}
export class custodialAccount extends Account {
  owner: Custodial;
  constructor(data: Custodial, account: string) {
    super(account);
    this.owner = data;
    this.ownerType = "custodial account";
  }
}
export class corporateAccount extends Account {
  owner: Corporate;
  constructor(data: Corporate, account: string) {
    super(account);
    this.owner = data;
    this.ownerType = "corporate account";
  }
}
