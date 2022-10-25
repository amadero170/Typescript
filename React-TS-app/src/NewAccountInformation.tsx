import { Individual, Joint, Custodial } from "./classes/owner-types";

export default function NewAccountInformation({
  newAccountData,
}: {
  newAccountData: {
    ownerType: string;
    owner: Individual | Joint | Custodial;
    account: string;
  };
}) {
  let ownerInfo: string = "";
  if (!newAccountData.owner) {
    ownerInfo = "no new accounts created";
  }
  if (
    (newAccountData.ownerType === "individual account" ||
      newAccountData.ownerType === "corporate account") &&
    !Array.isArray(newAccountData.owner)
  ) {
    ownerInfo = `New account created, owner: ${newAccountData.owner.name} with tax ID: ${newAccountData.owner.taxId}`;
  }
  if (
    newAccountData.ownerType === "joint account" &&
    Array.isArray(newAccountData.owner)
  ) {
    // Find out why this item can't be type Individual, error says taxId field is missing()
    ownerInfo = `New joint account created, owners: ${newAccountData.owner.map(
      (i: any) => {
        return "name: " + i.name + " Tax ID: " + i.taxId;
      }
    )}`;
  }
  if (
    newAccountData.ownerType === "custodial account" &&
    Array.isArray(newAccountData.owner)
  ) {
    ownerInfo = `New custodial account created, owners: ${newAccountData.owner.map(
      (item: { name: string }) => {
        return item.name;
      }
    )} with taxID ${newAccountData.owner[0].taxId}`;
  }

  return (
    <div>
      <h3>New Account Details</h3>
      <div>Type: {newAccountData.ownerType}</div>
      <div>Account Number: {newAccountData.account}</div>
      <div>Status: {ownerInfo}</div>
    </div>
  );
}
