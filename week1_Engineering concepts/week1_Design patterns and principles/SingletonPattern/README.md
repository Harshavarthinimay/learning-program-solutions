# SingletonPatternExample

### 📌 Purpose
Demonstrate the Singleton Design Pattern by creating a logging utility that has only one instance across the application lifecycle.

---

### 💡 Key Concepts
- Private static instance
- Private constructor
- Public static `getInstance()` method

---

### 📁 Files
- `Logger.java`: Singleton Logger implementation.
- `LoggerTest.java`: Verifies that only one Logger instance is created.

---

### ✅ Output Example
```
Logger initialized.
LOG: Starting the application...
LOG: Application running.
Both logger instances are the same (Singleton works).
```
