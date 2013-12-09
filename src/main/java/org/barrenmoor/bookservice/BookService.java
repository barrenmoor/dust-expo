package org.barrenmoor.bookservice;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.barrenmoor.bookservice.beans.Book;

@Path("/books")
public class BookService {
	private static final Map<String, Book> books = new HashMap<String, Book>();
	
	static {
		books.put(UUID.randomUUID().toString(), new Book("A Farewell to Arms", "Ernest Hemingway"));
		books.put(UUID.randomUUID().toString(), new Book("No one writes to the colonel", "Gabriel Garcia Marquez"));
		books.put(UUID.randomUUID().toString(), new Book("The Plague", "Albert Camus"));
		books.put(UUID.randomUUID().toString(), new Book("Les Miserables", "Victor Hugo"));
		books.put(UUID.randomUUID().toString(), new Book("The Bridge on the Drina", "Ivo Andric"));
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response list() {
		System.out.println("received a call");
		return Response.status(Status.OK).entity(books).build();
	}
}
