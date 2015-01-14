var dataSet = [
    { label: "高雄大學", data: 4625, color: "#005CDE" },
    { label: "東華大學", data: 3265, color: "#00A36A" },
    { label: "屏科大", data: 2658, color: "#7D0096" },
    { label: "暨南大學", data: 1203, color: "#992B00" },
    
];
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
    /*legend: {
            show: false;
        }
	grid: {
            hoverable: true,
            clickable: true
        }*/
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
$(document).ready(function () {
    $.plot($("#flot-placeholder"), dataSet, options);
    $("#flot-placeholder").showMemo();
});


