
/*Parse.initialize("TrjA8LPCC4ONymlTyV86tdISYzlOelDVfvSBEPCv", "qWoj6q116WqoLDQuYb5kuCMuVIgw0M6AZCExscDJ");
var vote = Parse.Object.extend("vote");
var query = new Parse.Query(vote);
query.descending("vote_num");
var dataSet = []; 
var school = new Array();
var vote_amount = new Array();
query.find({
    function piedata(vote){
        for (var i = 0; i < 4; i++) {
            /*var object = results[i];*/
            /*dataSet.push("{label:"+object.get('school_name')+", data:"+object.get('vote_num')+",color: #005CDE},");
            var school[i] = vote.get("school_name");
            var vote_amount[i] = vote.gat("vote_num");
        } 
        return school[], vote_amount[];
    }
});*/


/*for (var i=0; i < 20; i++){
    var Num1 = 5 + Math.floor(Math.random() * 255);
    dataset.push(Num1);
};*/
$(document).ready(function () {
      Parse.initialize("TrjA8LPCC4ONymlTyV86tdISYzlOelDVfvSBEPCv", "qWoj6q116WqoLDQuYb5kuCMuVIgw0M6AZCExscDJ");
      var vote = Parse.Object.extend("vote");
      var query = new Parse.Query(vote);
      query.descending("vote_num");
      query.find({
         success: function(results) {
            var object1={};
            var object2={};
            for (var i = 0; i < 4; i++) {
               var object = results[i];
               object1[i] = object.get('school_name');
               object2[i] = object.get('vote_num');
            }
            return object1, object2;
            var dataSet = [
                
                { label: object1[0] , data: object2[0], color: "#005CDE" },
                { label: object1[1] , data: object2[1], color: "#00A36A" },
                { label: object1[2] , data: object2[2], color: "#7D0096" },
                { label: object1[3] , data: object2[3], color: "#992B00" },
            ];

            $.plot($("#flot-placeholder"), dataSet, options);/*顯示圓餅圖*/
            /*$("#flot-placeholder").showMemo();  互動式圓餅圖*/          
         },
         error: function(error) {
            alert("Error: " + error.code + " " + error.message);
         }
         /*var dataSet2 = function(results);
         return dataSet;*/
      });

    console.log(dataSet);
    var options = {
    	series: {
    	    pie: {
    	        show: true,                
    	        label: {
    	            show:true,
    	            radius: 0.8,
    	            formatter: function (label, series) {                
    	                return '<div style="border:1px solid grey;font-size:8pt;text-align:center;padding:5px;color:white;">' +
    	                label + ' : ' +
    	                Math.round(series.percent) +
    	                '%</div>';
    	            },
    	            background: {
    	                opacity: 0.8,
    	                color: '#000'
    	            }
    	        }
    	    }
        	
    	}

    };


    $.fn.showMemo = function () {
        $(this).bind("plothover", function (event, pos, item) {
            if (!item) { return; }
     
            var html = [];
            var percent = parseFloat(item.series.percent).toFixed(2);        
     
            html.push("<div style=\"border:1px solid grey;background-color:",
                 item.series.color,
                 "\">",
                 "<span style=\"color:white\">",
                 item.series.label,
                 " : ",
                 $.formatNumber(item.series.data[0][1], { format: "#,###", locale: "us" }),
                 " (", percent, "%)",
                 "</span>", 
                 "</div>");
            $("#flot-memo").html(html.join(''));
        });
    }
});


/*var object_1;
object_1=query;
alert(object_1[0]);
var school={};
var vote_amount={};
    school[0]=object_1[0].get('school_name');
    school[1]=object_1[1].get('school_name');
    school[2]=object_1[2].get('school_name');
    school[3]=object_1[3].get('school_name');
    vote_amount[0]=object_1[0].get('vote_num');
    vote_amount[1]=object_1[1].get('vote_num');
    vote_amount[2]=object_1[2].get('vote_num');
    vote_amount[3]=object_1[3].get('vote_num');

var dataSet = [
    
    { label: school[0] , data: vote_amount[0], color: "#005CDE" },
    { label: school[1] , data: vote_amount[1], color: "#00A36A" },
    { label: school[2] , data: vote_amount[2], color: "#7D0096" },
    { label: school[3] , data: vote_amount[3], color: "#992B00" },
];*/