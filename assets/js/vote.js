var fb_url="http://hsiufeng.github.io/green/index.htm"; //FB推播

function share(){
    window.open('http://www.facebook.com/sharer/sharer.php?u='+fb_url,'_blank','width=750,height=500,left=400,top=200');
}

function Vote(value) {
    //alert("HI~~~~~~");
    Parse.initialize("TrjA8LPCC4ONymlTyV86tdISYzlOelDVfvSBEPCv", "qWoj6q116WqoLDQuYb5kuCMuVIgw0M6AZCExscDJ");

    //login_record
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
    //alert("yay! it worked 2");
    });
      
    var mail_id= "#user_mail_"+value;
    var user_mail = $(mail_id).val();      
    var Today=new Date();
    var today=Today.getFullYear()+'-'+(Today.getMonth()+1)+'-'+Today.getDate(); //date_today

    var school_num = "no."+value; //投的學校編號
    //alert(school);
   
    var school = Parse.Object.extend("school");
    var query = new Parse.Query(school);

    query.equalTo("user_mail", user_mail);
    query.count({
        success: function(count) {
            if(count>0){  //是否投過票
                query.descending("createdAt");
                query.find({
                    success: function(results) { 
                        var object = results[0];
                        var date=object.createdAt;
                        var vote_day=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
                        if(vote_day==today){ //今天是否投票
                           alert("你今天已經投過票了!");
                           window.location.href = "index.htm";
                        }else{
                           	var school = Parse.Object.extend("school");
                           	var school = new school();
                           	school.set("school_num", school_num);
                           	school.set("user_mail", user_mail);
                           	school.save(null, {  
                             	success: function(vote) {

                                var vote = Parse.Object.extend("vote");
                                var query = new Parse.Query(vote);
                                query.equalTo("school_no", school_num);
                                query.find({
                                	success: function(results) {
                                    	var object = results[0];
                                       	var vote_num = object.get('vote_num');
                                       	vote_num = vote_num+1;
                                       	results[0].save("vote_num", vote_num);
                                   	},
                                   	error: function(error) {
                                    	alert("Error: " + error.code + " " + error.message);
                                   	}
                                });
                                alert('投票成功!');
                                window.location.href = "index.htm";
                            	},
                            	error: function(vote, error) {
                                	alert('fail');
                                	window.location.href = "index.htm";
                            	}
                        	});
                        }
                    },
                    error: function(error) {
                        alert("Error");
                        window.location.href = "index.htm";
                    }
                });
            }else{
                var school = Parse.Object.extend("school");
                var school = new school();
                school.set("school_num", school_num);
                school.set("user_mail", user_mail);
                school.save(null, { 
                    success: function(vote) {
                    	var vote = Parse.Object.extend("vote");
                        var query = new Parse.Query(vote);
                        query.equalTo("school_no", school_num);
                        query.find({
                        	success: function(results) {
                            var object = results[0];
                            var vote_num = object.get('vote_num');
                            vote_num = vote_num+1;
                            results[0].save("vote_num", vote_num);
                        	},
                        	error: function(error) {
                        		alert("Error: " + error.code + " " + error.message);
                        	}
                    	});
                    	alert('投票成功!');
                    	window.location.href = "index.htm";
                    },
                    error: function(vote, error) {
                    	alert('fail');
                        window.location.href = "index.htm";
                    }
                });
            }
        },
        error: function(error) {
            alert("Error");
            window.location.href = "index.htm";
        }
    });     
}

function list() {
    Parse.initialize("TrjA8LPCC4ONymlTyV86tdISYzlOelDVfvSBEPCv", "qWoj6q116WqoLDQuYb5kuCMuVIgw0M6AZCExscDJ");
    var vote = Parse.Object.extend("vote");
    var query = new Parse.Query(vote);
    query.descending("vote_num");
    query.find({
        success: function(results) {
            $('.tb').append("<tr><th class='tg-s6z2' colspan='2'>頂尖對決</th></tr>");
            for (var i = 0; i < 4; i++) {
               var object = results[i];
               $('.tb').append("<tr><td class='tg-031e'>&nbsp;&nbsp;&nbsp;&nbsp;"+object.get('school_name')+"&nbsp;&nbsp;&nbsp;&nbsp;</td><td class='tg-031e'>&nbsp;&nbsp;&nbsp;&nbsp;"+object.get('vote_num')+"&nbsp;&nbsp;票&nbsp;&nbsp;&nbsp;&nbsp;</td></tr>");
            }
         },
        error: function(error) {
	        alert("Error: " + error.code + " " + error.message);
        }
    });
}   