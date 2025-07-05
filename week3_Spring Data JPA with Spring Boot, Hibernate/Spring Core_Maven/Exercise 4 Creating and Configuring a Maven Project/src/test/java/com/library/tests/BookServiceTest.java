package com.library.tests;
import com.library.model.Book;
import com.library.service.BookService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
public class BookServiceTest {
    private BookService bookService;
    @Before
    public void setup() {
        bookService = new BookService();
    }
    @Test
    public void testAddBook() {
        Book book = new Book("Test Book", "Test Author");
        bookService.addBook(book);
        Assert.assertEquals(1, bookService.listBooks().size());
    }
}