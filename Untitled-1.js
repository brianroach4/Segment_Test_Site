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
      name: "Dunder Mifflin Paper Company, Inc.",
      industry: "Paper Supply",
      csmAssigned: "Beth G.",
      employees: 22,
      location: "Scranton, PA",
      plan: "Corporate",
      contractStart: new Date("2005-03-24").toISOString(),
      contractEnd: new Date("2021-03-23").toISOString(),
      contractValue: 25000,
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
    groupId: "1003",
    traits: {
      name: "InGen",
      industry: "Genetic Engineering",
      csmAssigned: "Erin W.",
      employees: 6117,
      location: "Isla Nublar, Costa Rica",
      plan: "Strategic",
      contractStart: new Date("1993-06-11").toISOString(),
      contractEnd: new Date("2021-06-10").toISOString(),
      contractValue: 350000,
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
    groupId: "1004",
    traits: {
      name: "Ghost Busters",
      industry: "Paranormal Research",
      csmAssigned: "Erica A.",
      employees: 6,
      location: "New York, NY",
      plan: "Self-Service",
      contractStart: new Date("1984-06-07").toISOString(),
      contractEnd: new Date("2021-06-06").toISOString(),
      contractValue: 12000,
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
    groupId: "1005",
    traits: {
      name: "Genco Olive Oil Company",
      industry: "Agricultural Shipping and Distribution",
      csmAssigned: "Ryan W.",
      employees: 89,
      location: "New York, NY",
      plan: "Mid-Market",
      contractStart: new Date("1922-03-21").toISOString(),
      contractEnd: new Date("2021-03-20").toISOString(),
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
