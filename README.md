## HTML5

No self closing tags

## New Tags
`header` `footer` `aside` `nav` `article` `section`

`header` & `footer` are not specifically for the page header and footer, they can be used anywhere; e.g. blog posts pagination results.

Using classes as opposed to IDs can avoid mucky CSS by applying CSS specificity rules on element classes VS ID's.

#### Crap Tags
`details` & `summary` - Built in show/hide accordion

`figure` - Attach a caption to an image

	<figure>
		<img src="img/image.jpg" alt="">
		<figcaption>
			Lorem Ipsum Caption
			<br>
			<small><a href="" target="_blank">Lorem Ipsum Link</a></small>
		</figcaption>
	</figure>

	<figure>
		<img src="img/image-1.jpg" alt="">
		<img src="img/image-2.jpg" alt="">
		<img src="img/image-3.jpg" alt="">
		<figcaption>
			Lorem Ipsum Caption
			<br>
			<small><a href="" target="_blank">Lorem Ipsum Link</a></small>
		</figcaption>
	</figure>

## Forms

##### The Current State of HTML5 Forms - What the various browsers support
http://www.wufoo.com/html5/ 

##### Custom input types - Better HTML to describe the content & useful for mobile browsers
	<input type="email">
	<input type="url">
	<input type="tel" pattern="\d{3}-\d{3}-\d{4}"> (telephone - 555-555-5555)
	<input type="color"> - Only works in Opera
	<input type="search" results> - Hard to style
	<input type="number"> - Puts in little up/down arrows after the input
	<input type="range" min="0" max="255" value="0" step="10"> - Slider for values
	<progress min="0" max="100" value="20"> - Progress indicator
	<meter min="0" max="100" value="50">

##### New attributes
	placeholder="enter your name"
	required
	pattern (RegEx) - The required attribute is also necessary with pattern as empty values are accepted
	formnovalidate
	- Disables the built-in browser validation
	- Can be applied to an individual form element or the form tag

Inbuilt browser validation but support is limited & || varied:  
* Browser error display messages are displayed differently  
* Browser RegEx on the field are different and not at all dependable  
* Empty form elements are classed as valid unless "required" is also an attribute
* Browser validation is not secure as older browsers just display as a text field and there is no validation
* Should be used in conjunction with server-side validation 

## Feature Detection

**Modernizr**  
Implements the HTML5 Shim so don't include as well  
Place in the head section after stylesheets  
	
Polyfills can be used to gain all modern browser features if not present in the user's browser:    

	Modernizr.load({
		test: Modernizr.localstorage,
		nope 'localstorage.js // A polyfill available on the modernizr website
	});
	
