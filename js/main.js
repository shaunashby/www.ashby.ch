//____________________________________________________________________
// File: main.js
//____________________________________________________________________
//
// Author: Shaun Ashby <shaun@ashby.ch>
// Created: 2014-06-04 16:08:36+0200
// Revision: $Id$
// Description: This is the main JavaScript file for www.ashby.ch.
//
// Copyright (C) 2014 Shaun Ashby
//
//
//--------------------------------------------------------------------

$(function(){
	"use strict";
	$(".btn.btn-sm").click(function(){
		alert("This button isn't active yet. All it does is show this lousy popup....sorry!");
	});
	$("div#about,div#projects,div#interests").mouseenter(function(){
		$(this).addClass("myinfo");
	});
	$("div#about,div#projects,div#interests").mouseleave(function(){
		$(this).removeClass("myinfo");
	});
	
});