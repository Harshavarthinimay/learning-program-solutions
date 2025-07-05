package com.library.service;
import com.library.model.Book;
import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;
    public void addBook(Book book) {
        bookRepository.addBook(book);
    }
    public List<Book> listBooks() {
        return bookRepository.getAllBooks();
    }
}