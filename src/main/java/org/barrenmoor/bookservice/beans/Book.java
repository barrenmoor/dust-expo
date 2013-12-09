package org.barrenmoor.bookservice.beans;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Book {
	private String name;
	private String author;
	
	public Book() {
		//do nothing
	}
	
	public Book(String name, String author) {
		this.name = name;
		this.author = author;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	
	@Override
	public String toString() {
		return "[" + name + ", " + author + "]";
	}
}
