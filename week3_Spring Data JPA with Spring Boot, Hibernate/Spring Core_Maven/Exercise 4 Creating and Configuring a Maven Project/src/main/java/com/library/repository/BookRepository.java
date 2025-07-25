package com.library.repository;
import com.library.model.Book;
import org.springframework.stereotype.Repository;
import java.util.ArrayList;
import java.util.List;
@Repository
public class BookRepository {
    private List<Book> books = new ArrayList<>();
    public void addBook(Book book) {
        books.add(book);
    }
    public List<Book> getAllBooks() {
        return books;
    }
}