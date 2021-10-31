# App Metadology
Excel Form Builder (EFB) intends to work in pure vanila javascript html and css to deliver a form that works without internet. (ergo not working with bootstrap/ ajax). The terminals of which these form would be used from are extremely regulated with no access to the internet.

## Loading the page
In order to diseminate the form page easily, a factor of size becomes a problem. Therefore, the page would consist of as little content as possible while still performing its intended function. 
<br>
The form html would store, in within its base html:
<ol>
	<li> Javascript render function
	<li> <b>Required</b>
		<ol>
		<li> Html templates
		<li> Styles
		<li> Functions
		<li> Validators
		<li> List
		<li> The form data to render (form manifest)
</ol>
