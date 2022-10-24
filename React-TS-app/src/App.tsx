import { useState } from "react";
import "./App.css";
import {
  individualAccount,
  corporateAccount,
  custodialAccount,
  jointAccount,
} from "./classes/classes";
import { Individual, Joint, Custodial } from "./classes/owner-types";
import NewAccountInformation from "./NewAccountInformation";

export default function App() {
  const [accType, setAccType] = useState("individual");
  const [name1, setName1] = useState("");
  const [taxid1, setTaxid1] = useState("");
  const [name2, setName2] = useState("");
  const [taxid2, setTaxid2] = useState("");
  const [newAccount, setNewAccount] = useState<{
    ownerType: string;
    owner: Individual | Joint | Custodial;
    account: string;
  }>({ ownerType: "", owner: { name: "", taxId: "" }, account: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (accType) {
      case "individual":
        setNewAccount(
          new individualAccount({ name: name1, taxId: taxid1 }, name1 + taxid1)
        );

        break;
      case "corporate":
        setNewAccount(
          new corporateAccount({ name: name1, taxId: taxid1 }, name1 + taxid1)
        );
        break;
      case "custodial":
        setNewAccount(
          new custodialAccount(
            [{ name: name1, taxId: taxid1 }, { name: name2 }],
            name1 + taxid1
          )
        );
        break;
      case "joint":
        setNewAccount(
          new jointAccount(
            [
              { name: name1, taxId: taxid1 },
              { name: name2, taxId: taxid2 },
            ],
            name1 + taxid1
          )
        );
        break;
    }
    setName1("");
    setTaxid1("");
    setName2("");
    setTaxid2("");
    setAccType("individual");
  };
  return (
    <div className="create">
      <h1>Form</h1>
      <p>Create new account - B1 </p>
      <form onSubmit={onSubmit}>
        <label>Account owner type</label>

        <select value={accType} onChange={(e) => setAccType(e.target.value)}>
          <option value="individual">Individual</option>
          <option value="joint">Joint</option>
          <option value="custodial">Custodial</option>
          <option value="corporate">Corporate</option>
        </select>

        <label>Name1</label>

        <input
          type="text"
          id="name1"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />

        <label>Tax ID 1</label>

        <input
          type="text"
          id="taxid1"
          value={taxid1}
          onChange={(e) => setTaxid1(e.target.value)}
        />
        <label>Name2</label>

        <input
          type="text"
          id="name2"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />

        <label>Tax ID 2</label>

        <input
          type="text"
          id="taxid2"
          value={taxid2}
          onChange={(e) => setTaxid2(e.target.value)}
        />

        <button type="submit">Submit new account</button>
      </form>

      <NewAccountInformation
        accountType={newAccount.ownerType}
        owner={newAccount?.owner}
        account={newAccount.account}
      />
    </div>
  );
}
