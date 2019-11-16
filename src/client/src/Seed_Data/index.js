export const Account_Seed = {
      "UserId": 1,
      "User": {
        "RoleId": 1,
        "Role": {
          "Role": "Administrator",
          "Id": 1
        },
        "FirstName": "Anthony",
        "MiddleName": "Patrick",
        "LastName": "Pancerella",
        "Email": "test@test.com",
        "ModifiedDate": null,
        "ModifiedBy": null,
        "DateOfBirth": "1900-01-01T00:00:00",
        "Phone": "7031231234",
        "Id": 1
      },
      "Salary": 50000,
      "Job": "Software Developer",
      "Company": "National Rural Electric Cooperative Association",
      "Id": 1
    };

export const ExpenseTypes_Seed = [
    {
      "ExpenseType": "Transportation",
      "Id": 1
    },
    {
      "ExpenseType": "Food",
      "Id": 2
    },
    {
      "ExpenseType": "Utilities",
      "Id": 3
    },
    {
      "ExpenseType": "Clothing",
      "Id": 4
    },
    {
      "ExpenseType": "Medical/Healthcare",
      "Id": 5
    },
    {
      "ExpenseType": "Insurance",
      "Id": 6
    },
    {
      "ExpenseType": "Household Items/Supplies",
      "Id": 7
    },
    {
      "ExpenseType": "Personal",
      "Id": 8
    },
    {
      "ExpenseType": "Debt",
      "Id": 9
    },
    {
      "ExpenseType": "Retirement",
      "Id": 10
    },
    {
      "ExpenseType": "Education",
      "Id": 11
    },
    {
      "ExpenseType": "Savings",
      "Id": 12
    },
    {
      "ExpenseType": "Gifts/Donations",
      "Id": 13
    },
    {
      "ExpenseType": "Entertainment ",
      "Id": 14
    },
    {
      "ExpenseType": "Housing",
      "Id": 15
    }
  ];

export const IncomeTypes_Seed = [
    {
      "IncomeType": "Stocks",
      "Id": 1
    },
    {
      "IncomeType": "Salary",
      "Id": 2
    }
  ];

export const MonthlyExpenses_Seed = [
    {
      "ExpenseTypeId": 14,
      "ExpenseType": {
        "ExpenseType": "Entertainment ",
        "Id": 14
      },
      "Name": "Netflix",
      "Amount": 11.99,
      "Description": "",
      "Id": 2008
    },
    {
      "ExpenseTypeId": 14,
      "ExpenseType": {
        "ExpenseType": "Entertainment ",
        "Id": 14
      },
      "Name": "Hulu",
      "Amount": 45,
      "Description": "",
      "Id": 2009
    },
    {
      "ExpenseTypeId": 15,
      "ExpenseType": {
        "ExpenseType": "Housing",
        "Id": 15
      },
      "Name": "Apartment Rent",
      "Amount": 1210,
      "Description": "",
      "Id": 2010
    },
    {
      "ExpenseTypeId": 12,
      "ExpenseType": {
        "ExpenseType": "Savings",
        "Id": 12
      },
      "Name": "Roth IRA",
      "Amount": 50,
      "Description": "",
      "Id": 2011
    },
    {
      "ExpenseTypeId": 3,
      "ExpenseType": {
        "ExpenseType": "Utilities",
        "Id": 3
      },
      "Name": "Utilities",
      "Amount": 130,
      "Description": "",
      "Id": 2012
    },
    {
      "ExpenseTypeId": 14,
      "ExpenseType": {
        "ExpenseType": "Entertainment ",
        "Id": 14
      },
      "Name": "HBO",
      "Amount": 15,
      "Description": "",
      "Id": 2013
    },
    {
      "ExpenseTypeId": 8,
      "ExpenseType": {
        "ExpenseType": "Personal",
        "Id": 8
      },
      "Name": "Gym Membership",
      "Amount": 49.99,
      "Description": "",
      "Id": 2014
    }
  ];

export const MonthlyIncomes_Seed = [
    {
      "IncomeTypeId": 2,
      "IncomeType": {
        "IncomeType": "Salary",
        "Id": 2
      },
      "Name": "Monthly Salary",
      "Amount": 2100,
      "Description": "",
      "Id": 3002
    },
    {
      "IncomeTypeId": 2,
      "IncomeType": {
        "IncomeType": "Salary",
        "Id": 2
      },
      "Name": "Fixed Account Interest",
      "Amount": 200,
      "Description": "",
      "Id": 3003
    },
    {
      "IncomeTypeId": 2,
      "IncomeType": {
        "IncomeType": "Salary",
        "Id": 2
      },
      "Name": "Transport Allowance",
      "Amount": 50,
      "Description": "",
      "Id": 3004
    },
    {
      "IncomeTypeId": 2,
      "IncomeType": {
        "IncomeType": "Salary",
        "Id": 2
      },
      "Name": "Sub-Leasing Profits",
      "Amount": 3500,
      "Description": "",
      "Id": 3005
    }
  ];