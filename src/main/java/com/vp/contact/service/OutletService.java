package com.vp.contact.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vp.contact.model.Contact;
import com.vp.contact.repository.ContactRepository;

@Service("outletService")
public class OutletService {
	
	@Autowired
    private ContactRepository contactRepository;
	
	public List<Contact> findAllContactsByOutletId(Long outletId) {
		List<Contact> allcontacts = contactRepository.getContacts();
		List<Contact> contacts = allcontacts.stream().filter(c -> c.getOutletId() == outletId.longValue())
				.collect(Collectors.toList());

		return contacts;
	}
	
}
