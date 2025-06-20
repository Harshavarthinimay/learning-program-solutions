import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Smartphone", "Electronics"),
            new Product(103, "Book", "Education"),
            new Product(104, "Shoes", "Fashion")
        };

        // Linear Search
        System.out.println(" Linear Search for 'Book':");
        Product result1 = SearchUtil.linearSearch(products, "Book");
        System.out.println(result1 != null ? result1 : "Product not found");

        // Binary Search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase())); // Sort before binary search
        System.out.println("\n Binary Search for 'Book':");
        Product result2 = SearchUtil.binarySearch(products, "Book");
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}