import { Individual, Joint, Custodial } from "./classes/owner-types";

export default function NewAccountInformation({
  accountType,
  owner,
  account,
}: {
  accountType?: string | undefined;
  owner: Individual | Joint | Custodial;
  account?: string;
}) {
  let ownerInfo: string;
  if (!owner) {
    ownerInfo = "no new accounts created";
  } else if (
    (accountType === "individual account" ||
      accountType === "corporate account") &&
    owner &&
    !Array.isArray(owner)
  ) {
    ownerInfo = `New account created, owner: ${owner.name} with tax ID: ${owner.taxId}`;
  } else if (accountType === "joint account" && owner && Array.isArray(owner)) {
    // Find out why this item can't be type Individual, error says taxId field is missing()
    ownerInfo = `New joint account created, owners: ${owner.map((item: any) => {
      return "name: " + item.name + " Tax ID: " + item.taxId;
    })}`;
  } else if (
    accountType === "custodial account" &&
    owner &&
    Array.isArray(owner)
  ) {
    ownerInfo = `New custodial account created, owners: ${owner.map(
      (item: { name: string }) => {
        return item.name;
      }
    )} with taxID ${owner[0].taxId}`;
  } else {
    ownerInfo = "no new accounts created";
  }

  return (
    <div>
      <h3>New Account Details</h3>
      <div>Type: {accountType}</div>
      <div>Account Number: {account}</div>
      <div>Status: {ownerInfo}</div>
    </div>
  );
}
