/*
 * jpsRest
 * 
 *
 * Copyright (c) 2014 Jonnie Spratley
 * Licensed under the MIT license.
 */
(function ($) {

	// Static method.
	$.jpsRest = function (options) {

		// Override default options with passed-in options.
		options = $.extend({}, $.jpsRest.options, options);

		// Return something awesome.
		return options;
	};

	// Static method default options.
	$.jpsRest.options = {
		endpoint: '',
		version: '2',
		debug: true
	};


	/**
	 * jQuery RESTful methods for accessing a backend API.
	 * @returns {*}
	 */







	// Collection method.
	$.fn.awesome = function () {
		return this.each(function (i) {
			// Do something awesome to each selected element.
			$(this).html('awesome' + i);
		});
	};





	// Static method.
	$.awesome = function (options) {

		// Override default options with passed-in options.
		options = $.extend({}, $.awesome.options, options);

		// Return something awesome.
		return 'awesome' + options.punctuation;
	};







	$.awesome.options = {
		punctuation: '.'
	};



	// Custom selector.
	$.expr[':'].awesome = function (elem) {
		// Is this element awesome?
		return $(elem).text().indexOf('awesome') !== -1;
	};





}(jQuery));
