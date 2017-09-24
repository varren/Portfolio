package com.jocham.solutions.model;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Email;
import org.springframework.beans.factory.annotation.Required;

public class FormModel {
	
	
	private String name;
	
	@Email
	private String email;
	@Size(min=2, max=200)
	private String description;
	
	public String getName() {
		return name;
	}
	
	@Required
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail() {
		return email;
	}
	
	@Required
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getDescription() {
		return description;
	}
	
	@Required
	public void setDescription(String description) {
		this.description = description;
	}
}
