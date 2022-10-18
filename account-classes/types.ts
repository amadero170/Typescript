export type Individual = {
  name: string;
  taxId: string;
};
export type Joint = Individual[];

export type Custodial = [Individual, { name: string }];

export type Corporate = Individual;
