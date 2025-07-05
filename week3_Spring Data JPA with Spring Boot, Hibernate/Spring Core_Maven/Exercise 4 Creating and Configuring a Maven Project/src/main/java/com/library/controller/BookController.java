package com.library.controller;
import com.library.model.Book;
import com.library.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import javax.annotation.PostConstruct;
@Controller
public class BookController {
    @Autowired
    private BookService bookService;
    @PostConstruct
    public void init() {
        bookService.addBook(new Book("Effective Java", "Joshua Bloch"));
        bookService.addBook(new Book("Clean Code", "Robert C. Martin"));
        System.out.println("Books in Library:");
        for (Book book : bookService.listBooks()) {
            System.out.println(book.getTitle() + " by " + book.getAuthor());
        }
    }
}