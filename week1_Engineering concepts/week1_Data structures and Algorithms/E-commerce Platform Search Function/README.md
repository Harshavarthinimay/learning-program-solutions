# E-commerce Search Function (Java)

This project demonstrates how to implement **search functionality** in an e-commerce platform using Java.

---

## 📘 1. Understanding Time Complexity

### ➤ Big O Notation
Big O notation is used to describe the **performance or complexity** of an algorithm:

| Operation       | Time Complexity |
|----------------|------------------|
| Linear Search   | O(n)             |
| Binary Search   | O(log n)         |

### ➤ Best, Average, and Worst Case

| Algorithm       | Best    | Average | Worst   |
|----------------|---------|---------|---------|
| Linear Search   | O(1)    | O(n)    | O(n)    |
| Binary Search   | O(1)    | O(log n)| O(log n)|

---

## ⚙️ 2. Implementation Overview

### Classes:
- `Product`: Represents an item with ID, name, and category.
- `SearchUtil`: Provides static methods for Linear and Binary Search.
- `Main`: Runs a sample test.

### Search Algorithms:
- **Linear Search**: Checks each item. No sorting needed.
- **Binary Search**: Requires sorted list by product name. Very fast on large datasets.

---

## 📊 3. Search Algorithm Analysis

| Feature                  | Linear Search   | Binary Search   |
|--------------------------|------------------|------------------|
| Time Complexity           | O(n)             | O(log n)         |
| Requires Sorting?         | ❌ No            | ✅ Yes           |
| Use Case                  | Small datasets   | Large datasets   |
| Real-time Insertion       | ✅ Easy          | ❌ Expensive     |

### ✅ Recommendation:
- Use **Linear Search** for real-time, dynamic product lists.
- Use **Binary Search** for **large, mostly static** and sorted product catalogs.

---

## ▶️ Running the Code

Compile and run using:

```bash
javac Product.java SearchUtil.java Main.java
java Main
```

---

## 📁 Files Included
- `Product.java`
- `SearchUtil.java`
- `Main.java`
- `README.md`