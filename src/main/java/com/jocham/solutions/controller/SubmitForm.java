package com.jocham.solutions.controller;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.jocham.solutions.model.FormModel;

@RestController
public class SubmitForm {
	
	@RequestMapping(value = "/sendForm", method = RequestMethod.POST)
	String submitForm(@ModelAttribute FormModel formModel) {
		
		return "";
	
	}
	
}
