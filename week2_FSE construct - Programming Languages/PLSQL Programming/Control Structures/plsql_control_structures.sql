
-- Scenario 1: Apply 1% Discount for Customers Above 60
BEGIN
  FOR cust_rec IN (SELECT CustomerID, Age, LoanInterestRate FROM Customers) LOOP
    IF cust_rec.Age > 60 THEN
      UPDATE Customers
      SET LoanInterestRate = LoanInterestRate - 1
      WHERE CustomerID = cust_rec.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
END;
/

-- Scenario 2: Set IsVIP Flag for Customers with Balance > $10,000
BEGIN
  FOR cust_rec IN (SELECT CustomerID, Balance FROM Customers) LOOP
    IF cust_rec.Balance > 10000 THEN
      UPDATE Customers
      SET IsVIP = 'TRUE'
      WHERE CustomerID = cust_rec.CustomerID;
    END IF;
  END LOOP;
  COMMIT;
END;
/

-- Scenario 3: Reminders for Loans Due in Next 30 Days
DECLARE
  v_due_date DATE := SYSDATE + 30;
BEGIN
  FOR loan_rec IN (
    SELECT CustomerID, LoanID, DueDate
    FROM Loans
    WHERE DueDate BETWEEN SYSDATE AND v_due_date
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan_rec.LoanID || 
                         ' for Customer ' || loan_rec.CustomerID || 
                         ' is due on ' || TO_CHAR(loan_rec.DueDate, 'DD-MON-YYYY'));
  END LOOP;
END;
/
