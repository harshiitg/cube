interface Customer {
  id: number;
  name: string;
  title: string;
  address: string;
}

export const generateCustomers = (): Customer[] => {
  const titles = [
    "CEO",
    "CTO",
    "CFO",
    "COO",
    "Manager",
    "Engineer",
    "Designer",
    "Developer",
    "Analyst",
  ];
  const customers: Customer[] = [];

  for (let i = 1; i <= 500; i++) {
    customers.push({
      id: i,
      name: `Customer ${i.toString().padStart(3, "0")}`,
      title: titles[i % titles.length],
      address: `${i} Some Street, City, Country`,
    });
  }

  return customers;
};
