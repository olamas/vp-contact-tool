package com.vp.contact.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vp.contact.model.Contact;
import com.vp.contact.service.OutletService;

@RestController
@RequestMapping("/api")
public class AppRestController {
		
	@Autowired
	private OutletService outletService; 
 
    	@SuppressWarnings("rawtypes")
		@RequestMapping(value = "/outlet/{id}/contacts", method = RequestMethod.GET)
	    	public ResponseEntity<List<Contact>> findAllContacts(@PathVariable("id") final String id ) {
    		List<Contact> contacts = outletService.findAllContactsByOutletId(Long.valueOf(id));
	            if (contacts.isEmpty()) {
	                return new ResponseEntity(HttpStatus.NO_CONTENT);
	            }
	            return new ResponseEntity<List<Contact>>(contacts, HttpStatus.OK);
	        }	    	
	  
}
