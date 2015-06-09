(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function() {
  	this.tab = 1;


  	this.selectTab = function(setTab)
  	{
  		this.tab = setTab;
  	};

  	this.isSelected = function(checkTab)
  	{
  		return this.tab === checkTab;
  	};

  });

  var gems = 
  [
    { 
    	name: 'AngularJS', 
    	price: 2, 
    	images:
    	[
    	{full: 'https://a248.e.akamai.net/assets.github.com/images/gravatars/gravatar-140.png'}
    	],
    	canPurchase: true, 
    	description: "Azurite description iste", 
    	specs: "Azurite her işe yarar.", 
    	reviews: 
    	[
    		{ body: "beyenmedim"},
    		{ body: "oyum ggorunsunn diye eksi verdim"}
    	] 
    },
    { 
    	name: 'EmberJS', 
    	price: 5.95, 
    	images: 
    	[
    		{ full: 'http://icons.iconarchive.com/icons/custom-icon-design/pretty-social-media/256/ember-icon.png' }
    	], 
    	description: "BLOOOOOOODBAAATH",
    	specs: "kaaaaaaan!"  
    },
    { 
    	name: 'Zircon', 
    	price: 3.95 ,
    	images: 
    	[
    		{ full: 'http://jqueryto.com/2013/assets/i/icon-yeoman.png' }
    	],
    	specs: "short verjin of Zhirkov", 
    	reviews: 
    	[
    		{ body: "kraldir bu ya"},
    		{ body: "forks like a charm"}
    	]
    } 
  ];
})();