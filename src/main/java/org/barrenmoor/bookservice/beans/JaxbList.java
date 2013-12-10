package org.barrenmoor.bookservice.beans;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class JaxbList<T> {
	private List<T> values = new ArrayList<T>();

	public JaxbList() {
		//do nothing;
	}
	
	public JaxbList(List<T> values) {
		this.values = values;
	}
	
	public List<T> getValues() {
		return values;
	}

	public void setValues(List<T> values) {
		this.values = values;
	}
}
