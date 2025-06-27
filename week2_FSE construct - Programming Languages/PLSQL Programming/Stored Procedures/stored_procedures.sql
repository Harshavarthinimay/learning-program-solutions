
-- Scenario 1: ProcessMonthlyInterest - Apply 1% interest to all savings accounts
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  FOR acc IN (SELECT AccountID, Balance FROM Accounts WHERE AccountType = 'Savings') LOOP
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountID = acc.AccountID;
  END LOOP;
  COMMIT;
END;
/

-- Scenario 2: UpdateEmployeeBonus - Update salary with bonus for a department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(p_dept_id IN NUMBER, p_bonus_pct IN NUMBER) AS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * p_bonus_pct / 100)
  WHERE DepartmentID = p_dept_id;
  COMMIT;
END;
/

-- Scenario 3: TransferFunds - Transfer funds between accounts
CREATE OR REPLACE PROCEDURE TransferFunds(
  p_from_account IN NUMBER,
  p_to_account IN NUMBER,
  p_amount IN NUMBER
) AS
  v_balance NUMBER;
BEGIN
  SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = p_from_account FOR UPDATE;
  
  IF v_balance >= p_amount THEN
    UPDATE Accounts SET Balance = Balance - p_amount WHERE AccountID = p_from_account;
    UPDATE Accounts SET Balance = Balance + p_amount WHERE AccountID = p_to_account;
    COMMIT;
  ELSE
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
  END IF;
END;
/  
