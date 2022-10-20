export default function NewAccountInformation({
  accountType,
  owner,
  account,
}: {
  accountType?: string | undefined;
  owner?: any;
  account?: string;
}) {
  let ownerInfo: string;

  if (
    accountType === "individual account" ||
    accountType === "corporate account"
  ) {
    ownerInfo = `New account created, owner: ${owner.name} with tax ID: ${owner.taxId}`;
  } else if (accountType === "joint account") {
    ownerInfo = `New joint account created, owners: ${owner.map(
      (item: { name: string; taxId: string }) => {
        return "name: " + item.name + " Tax ID: " + item.taxId;
      }
    )}`;
  } else if (accountType === "custodial account") {
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
