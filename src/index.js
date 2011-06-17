(function($){ 
	
	var user, repository, branch, hubrace;
	
	function addOptions(parent, textProperty, valueProperty) {
		valueProperty = valueProperty || textProperty;
		return function(elements){
			parent.append(
				$.tmpl(
					'{{each(i,element) elements}}<option value="${element.' + valueProperty + '}">${element.' + textProperty + '}</option>{{/each}}', 
					{ elements: elements }
				)
			);
		}
	}
	
	function updateRepositories() {
		GitHub.getRepositoryList(user.val(), addOptions(repository.empty(), 'name'));
	}
	
	function updateBranches() {
		GitHub.getBranchList(user.val(), repository.val(), addOptions(branch.empty(), 'name'));
	}
	
	function updateRace() {
		var remote = new GitHub.Remote(user.val(), repository.val(), branch.val());
		hubrace.race(remote);
	}
	
	function main() {  
		user = $('#user').change(updateRepositories);
		repository = $('#repository').change(updateBranches);
		branch = $('#branch').change(updateRace);
		hubrace = new HubRace("#hubrace");
	}
	
	$(main);
	
})(jQuery);

