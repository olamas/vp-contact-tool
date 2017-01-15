package com.vp.contact.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class AppController {

   @RequestMapping("/partials/{page}")
   String partialHandler(@PathVariable("page") final String page) {
        return  page;
   }
	
    @RequestMapping(value="/")
	public String home() {
    	return "index"; 
	}	
}
