var visitors = [
  {
    id: "001",
    age: getAge(this.birthDate),
    birthDate: new Date("1967-06-05").toISOString(),
    email: "Pete@" + accString + ".com",
    full_name: "Peter Gibbons",
    gender: "male",
    homeTown: "Cedar Rapids" + ", Iowa",
    jobTitle: "Programmer",
    role: "user",
    tags: [
      { age: ["age"] },
      { birthDate: ["birthDate"] },
      { email: ["email"] },
      { gender: ["gender"] },
      { homeTown: ["homeTown"] },
      { jobTitle: ["jobTitle"] },
      { role: ["role"] }
    ],
    groupId: "1001"
  }
];

var accounts = [
  {
    groupId: "1001",
    traits: {
      name: "Initech",
      industry: "Financial Technology",
      csmAssigned: "James W.",
      employees: 1502,
      location: "Austin, TX",
      plan: "Enterprise",
      contractStart: new Date("1999-02-19").toISOString(),
      contractEnd: new Date("2021-02-18").toISOString(),
      contractValue: 100000,
      monthly_value: this.contractValue / 12,
      tags: [
        { industry: ["industry"] },
        { csmAssigned: ["csmAssigned"] },
        { employees: ["employees"] },
        { plan: ["plan"] },
        { contractStart: ["contractStart"] },
        { contractEnd: ["contractEnd"] },
        { contractValue: ["contractValue"] }
      ]
    }
  },
  {
    groupId: "1002",
    traits: {
      name: "Initech",
      industry: "Financial Technology",
      csmAssigned: "James W.",
      employees: 1502,
      location: "Austin, TX",
      plan: "Enterprise",
      contractStart: new Date("1999-02-19").toISOString(),
      contractEnd: new Date("2021-02-18").toISOString(),
      contractValue: 100000,
      monthly_value: this.contractValue / 12,
      tags: [
        { industry: ["industry"] },
        { csmAssigned: ["csmAssigned"] },
        { employees: ["employees"] },
        { plan: ["plan"] },
        { contractStart: ["contractStart"] },
        { contractEnd: ["contractEnd"] },
        { contractValue: ["contractValue"] }
      ]
    }
  }
];

var visitorsAccount = accounts.filter(function(account) {
  return account.groupId === visitor.groupId;
});

if (visitorsAccount.length) {
  var account = visitorsAccount[0];
}

if (account.length) {
  analytics.group(visitor.groupId, {
    name: account.traits.name,
    industry: account.traits.industry,
    employees: account.traits.employees,
    plan: account.traits.plan,
    contractStart: account.traits.contractStart,
    contractEnd: account.traits.contractEnd,
    contractValue: account.traits.contractValue
  });
}

function setVisitor(randomNumber) {
  switch (randomNumber) {
    case randomNumber <= 4:
      getVisitor("001");
      break;
    case randomNumber <= 8:
        getVisitor("002");
        break;
    case randomNumber <= 12:
        getVisitor("003");
        break;
    default:
      break;
  }
}

function getVisitor(id) {
  return visitors.filter(function(visitor) {
    return visitor.id === id;
  });
}
