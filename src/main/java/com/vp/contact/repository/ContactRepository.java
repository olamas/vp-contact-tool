package com.vp.contact.repository;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.google.gson.Gson;
import com.google.gson.stream.JsonReader;
import com.vp.contact.model.Contact;

@Repository
public class ContactRepository {
	
	private List<Contact> contacts = new ArrayList<Contact>();
	
	public ContactRepository(){
		this.initContactsList(); 
		
	}

	public List<Contact> getContacts() {
		return contacts;
	}

	
	private  void initContactsList() {
        try {
        	Gson gson = new Gson();
        	InputStream in = getClass().getResourceAsStream("/static/data/Contacts.json");
            JsonReader reader = new JsonReader(new InputStreamReader(in, "UTF-8"));
            reader.beginArray();
            while (reader.hasNext()) {
                Contact contact = gson.fromJson(reader, Contact.class);
                this.contacts.add(contact);
            }
            reader.endArray();
            reader.close();
            
        } catch (IOException e) {
        	
        }
    }




	
	
	
}
