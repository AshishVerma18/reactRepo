class Rules {
    minBal = 1500;
    constructor() {
      console.log(
        "First - Parent class Object created automcaticalyy const will execute"
      );
    }
    bankRules() {}
  }
  
  class BankCustomer extends Rules {
    constructor(acc_No, acc_Name, acc_Moble) {
      super();
      this.acc_No = acc_No;
      this.acc_Name = acc_Name;
      this.acc_Moble = acc_Moble;
      console.log("Object is created and constustror will execute automatically");
    }
  }
  
  let c = new BankCustomer(101, "Ashish", 7768575988);
  console.log(c);
  console.log(c.minBal);
  console.log(c.bankRules());