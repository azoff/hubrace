(function($){ 
	
	var user, repository, branch, hubrace;
	
	function applyOptions(parent) {
		return function(values){
			parent.empty().append(
				$.tmpl(
					'{{each values}}<option>${$value}</option>{{/each}}', 
					{ values: values }
				)
			);
		}
	}
	
	function updateRepositories() {
		GitHub.getRepositoryList(user.val(), applyOptions(repository));
	}
	
	function updateBranches() {
		GitHub.getBranchList(user.val(), repository.val(), applyOptions(branch));
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

