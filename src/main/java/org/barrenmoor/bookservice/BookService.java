package org.barrenmoor.bookservice;

import java.util.ArrayList;
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
import org.barrenmoor.bookservice.beans.JaxbList;

@Path("/books")
public class BookService {
	private static final Map<String, Book> books = new HashMap<String, Book>();
	
	static {
		String[] ids = new String[5];
		for(int i = 0; i < ids.length; i++) {
			ids[i] = UUID.randomUUID().toString();
		}

		books.put(ids[0], new Book(ids[0], "A Farewell to Arms", "Ernest Hemingway"));
		books.put(ids[1], new Book(ids[1], "No one writes to the colonel", "Gabriel Garcia Marquez"));
		books.put(ids[2], new Book(ids[2], "The Plague", "Albert Camus"));
		books.put(ids[3], new Book(ids[3], "Les Miserables", "Victor Hugo"));
		books.put(ids[4], new Book(ids[4], "The Bridge on the Drina", "Ivo Andric"));
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response list() {
		System.out.println("received a call");
		return Response.status(Status.OK).entity(new JaxbList<Book>(new ArrayList<Book>(books.values()))).build();
	}
}
