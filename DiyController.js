module.exports = {
	

	index: function (req, res){
		var id = req.session.userid;
		var username = req.session.username;

		Category.find({open:'on'}).exec(function(err, categories){
			if(err){
				console.log(err);
				return res.send('err');
			}
			Item.find({open:'on'}).sort('category_id ASC').exec(function(err, items){
			   	if(err){
			   		console.log(err);
			   		return res.send('err');
			   	}
			User.findOne({id:id}).exec(function(err, result){
				if(err){
					console.log(err);
					return res.send('err');
				}
				 res.view('diy/index',{categories:categories, items:items, users:result});
				
				});
			
			});
			
		});

	},

	about: function (req, res){
		var id = req.session.userid;
		var username = req.session.username;


		Category.find().exec(function(err, categories){
			if(err){
				return res.send('err');
			}
			Item.find().sort('category_id ASC').exec(function(err, items){
			   	if(err){
			   		return res.send('err');
			   	}
			User.findOne({id:id}).exec(function(err, result){
				if(err){
					return res.send('err');
				}
				return res.view('about/about',{categories:categories, items:items, users:result});
				
				});
			
			});
			
		});

	},

	contact: function (req, res){
		var id = req.session.userid;
		var username = req.session.username;


		Category.find().exec(function(err, categories){
			if(err){
				return res.send('err');
			}
			Item.find().sort('category_id ASC').exec(function(err, items){
			   	if(err){
			   		return res.send('err');
			   	}
			User.findOne({id:id}).exec(function(err, result){
				if(err){
					return res.send('err');
				}
				return res.view('about/contact',{categories:categories, items:items, users:result});
				
				});
			
			});
			
		});

	}



}