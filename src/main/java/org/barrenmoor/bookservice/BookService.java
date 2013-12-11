package org.barrenmoor.bookservice;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
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
	
	@DELETE
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response delete(@PathParam("id") String id) {
		System.out.println("delete: " + id);
		if(books.containsKey(id)) {
			Book b = books.remove(id);
			return Response.status(Status.OK).entity(b).build();
		}
		
		throw new WebApplicationException(Status.NOT_FOUND);
	}

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response get(@PathParam("id") String id) {
		System.out.println("get: " + id);
		if(books.containsKey(id)) {
			Book b = books.get(id);
			return Response.status(Status.OK).entity(b).build();
		}
		
		throw new WebApplicationException(Status.NOT_FOUND);
	}

	@PUT
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response update(@PathParam("id") String id, Book book) {
		System.out.println("update: " + id);
		if(books.containsKey(id)) {
			book.setId(id);
			books.put(id, book);
			return Response.status(Status.OK).entity(book).build();
		}
		
		throw new WebApplicationException(Status.NOT_FOUND);
	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(Book book) {
		System.out.println("create: " + book);
		String id = UUID.randomUUID().toString();
		book.setId(id);
		books.put(id, book);
		return Response.status(Status.CREATED).header("Location", id).entity(book).build();
	}
}
