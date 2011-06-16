Modernizr.load([{
	test: window.jQuery,
	nope: 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js'
},{
	test: window.jQuery && window.jQuery.tmpl,
	nope: 'http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.min.js'
}, '/src/github.js', {
	load: 'src/hubrace.js',
	callback: function(){ hubrace('#hubrace'); }
}]);