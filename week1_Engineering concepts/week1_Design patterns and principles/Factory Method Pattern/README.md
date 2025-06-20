# FactoryMethodPatternExample

### 📌 Purpose
Demonstrate the Factory Method Design Pattern by dynamically creating different types of documents (Word, PDF, Excel).

---

### 💡 Key Concepts
- Interface: `Document`
- Concrete classes: `WordDocument`, `PdfDocument`, `ExcelDocument`
- Abstract factory: `DocumentFactory`
- Concrete factories: `WordFactory`, `PdfFactory`, `ExcelFactory`

---

### 📁 Files
- `Document.java`: Common interface for all document types.
- `WordDocument.java`, `PdfDocument.java`, `ExcelDocument.java`: Implementations of document types.
- `DocumentFactory.java`: Abstract factory definition.
- `WordFactory.java`, `PdfFactory.java`, `ExcelFactory.java`: Concrete factories.
- `FactoryTest.java`: Demonstrates the usage of Factory Method Pattern.

---

### ✅ Output Example
```
Opening a Word document.
Opening a PDF document.
Opening an Excel document.


