function AjaxCall(url, data, successEvent, failureEvent) {
    window.$.ajax({
        type: "POST",
        url: url,
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: successEvent,
        error: failureEvent,
        async: true
    });
}

function onFailure(msg) {
    console.log(msg);
}

function filterByCategory(item) {
    if (item.Category == "sponser") {
        return true;
    }
    return false;
}

function OnlyNonSpecialcharacters(e) { // Alphanumeric only
    var k = e.key;
    window.re = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
    var isSplChar = window.re.test(k);
    if (isSplChar)
        return false;
    else
        return true;
}


function getParameterByName(name, url) {
    try {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        // return results[2];
        return window.decodeURI(results[2].replace(/\+/g, " "));
    } catch (e) { return ''; }
}


 (function __HORCRUX__(){ window.searchText="";
 window.searchId="";
 window.Indexname ="sbi"
 window.ServiceName ="sbicard";

 window.version = window.detectIE(); })();

function detectIE(){
var ua = window.navigator.userAgent;
 var edge = ua.indexOf('Edge/');
	 if (edge > 0) {
	   // Edge (IE 12+) => return version number
	   return window.parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	 }	
	 
	 return 0;
}

(function __HORCRUX__(){ if(window.version > 20){
     window.appInsights = window.appInsights || function (config) { function r(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } } var t = { config: config }, u = window.document, e = window, o = "script", s = u.createElement(o), i, f; s.src = config.url || "//az416426.vo.msecnd.net/scripts/b/ai.2.min.js"; u.getElementsByTagName(o)[0].parentNode.appendChild(s); try { t.cookie = u.cookie } catch (h) { } for (t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace", "Dependency"]; i.length;)r("track" + i.pop()); return r("setAuthenticatedUserContext"), r("clearAuthenticatedUserContext"), config.disableExceptionTracking || (i = "onerror", r("_" + i), f = e[i], e[i] = function (config, r, u, e, o) { var s = f && f(config, r, u, e, o); return s !== !0 && t["_" + i](config, r, u, e, o), s }), t }
    ({
        instrumentationKey: "f9fd6fec-4bf1-4c76-9722-d3ecdbf68d38"
    });
window.appInsights = window.appInsights;
} })();

function getPopularSearch(PopISFaq){
    var POPurl="";
/*if(PopISFaq){
    POPurl ="https://sbicardssearch.azurewebsites.net/PopularSearch/faq"+Indexname+"PopularSearch.json";
}else{
    POPurl ="https://sbicardssearch.azurewebsites.net/PopularSearch/"+Indexname+"PopularSearch.json";
}*/
//var POPurl ="https://sbicardssearch.azurewebsites.net/PopularSearch/sbiuat2PopularSearch.json";
var POPurl ="https://sbicardssearch.azurewebsites.net/popularsearch.json";
var popularsearch = [];
window.$.ajax({
headers: {
'Content-Type': 'application/json',
"Accept": 'application/json',
'Access-Control-Allow-Origin':'*'
},
type:"GET",
url:POPurl,
dataType:'json',
success: function(data) {
var listpopular ="";
var listpopularhtml = "";
window.$.each(data.Popularsearch, function(i, f) {
listpopularhtml = listpopularhtml+ "<li rel='" + f.count + "'>" + "<a class='' href='" +window.searchUrl+window.search_url+ "?q="+f.value+ "'>" + f.value + "</a>" + "</li>"

});

window.$('#userdata ul').html(listpopularhtml);

window.setTimeout(function () {
window.$("#userdata ul li").sort(sort_li).appendTo('#userdata ul');

var i = 1;
window.$("#userdata ul li").each(function () {
window.$(this).addClass('tag' + i);
i++;
});

var parent = window.$("#userdata ul");
var divs = parent.children();
while (divs.length) {
parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
}


},100)
},
error: function() {
console.log('Error loading PopularSearch');
}
});



function sort_li(a, b){
return (window.parseInt(window.$(b).attr('rel'))) > (window.parseInt(window.$(a).attr('rel'))) ? 1 : -1;
}
 

}

(function __HORCRUX__(){ window.$(window.document).ready(function(){
    var PopISFaq =true;
    if(window.location.href.indexOf('faq-search.page')> -1){
        var queryParameter = window.getParameterByName('q');
        window.getSearchResultTestFaq(queryParameter);
        
        window.getPopularSearch(PopISFaq); 
            window.$(".filter-data").remove();      
        
    }
    else if(window.location.href.indexOf('search.page')> -1){
        var queryParameter = window.getParameterByName('q');
        PopISFaq =false;
        window.getSearchResultTest(queryParameter);
        window.getPopularSearch(PopISFaq);
        window.personalData(queryParameter);
        window.corporatData(queryParameter);
    }
    
});


 window.seachCounter1 =5; })();
function personalData(text) {
var personalsearch = [];
var index = 'https://sbicard.search.windows.net/indexes/'+window.Indexname+'/docs?';
var SearchParams = "api-version=2019-05-06&search=" + text + "&$select=url,title,description,category,subcategory&scoringProfile=Weightage&$count=true&facet=category&facet=subcategory&highlight=title,description&highlightPreTag=<b>&highlightPostTag=</b>&$filter=category eq 'personal'&$top=10000";
var params = window.encodeURI(SearchParams);
var theUrl = index + params;
var corporatesearch = [];
window.$.ajax({
            method: "GET",
            url: theUrl,
            headers: { 'api-key': "4E301B4CE63994DE77C6D3180F76E103", "Access-Control-Allow-Origin": "*" },
            contentType: "application/json",
            success: function (data) {
    if(data["@odata.count"] == 0){
    
                    window.$(".cat-personal").remove();
            } 

            window.$(".inner-search").each(function(index, el) {
                var listPersonal = "";
                var listPersonalhtml = "";
                var subCat = window.$(this).find("ul").data("cat");
                window.$.each(data.value, function(i, f) {
                    if (f.subcategory == subCat) {
                            var fidesc=f.description;       
                            var fiTitle =f.title;       
                            if(f["@search.highlights"] != window.undefined){     
                                if (f["@search.highlights"].title != window.undefined && f["@search.highlights"].title != null) {      
                                     fiTitle = f["@search.highlights"].title[0];       
                                }       
                                if (f["@search.highlights"].description != window.undefined && f["@search.highlights"].description != null) {      
                                    fidesc = f["@search.highlights"].description[0];      
                                }       
                            }
                        //console.log(f.subcategory);
                        listPersonalhtml = listPersonalhtml + "<li class='" + f.subcategory + "'>" + "<h3>" + "<a class='' href='" + f.url + "' rel='" + f.category + "'>" + fiTitle + "</a>" + "</h3>" + "<p>" + fidesc + "</p>" + "</li>"
                    }
                });
                listPersonalhtml = listPersonalhtml + "<div class='" + "loadmore" + "'>" + "<a class='" + "load-more" + "'" + "href='" + "#" + "'>Load More</a></div>";
                window.$(this).find("ul.data_loading").html(listPersonalhtml);
                var accorName = " on " + text + " (" + window.$(this).find("ul li").length + ")";
                window.$(this).find(".heading-txt .lenthcount").text(accorName)

                //if($(this).find("ul li").length == 0){
                //$(this).hide();
                //}
                //}, 100);
                window.$(this).find("ul li").each(function(a) {
                    a + 1 > window.seachCounter && window.$(this).addClass("hide")
                }),
                0 == window.$(this).find("ul li.hide").length && window.$(this).find(".load-more").addClass("hide")
                console.log("length" + window.$(this).find("ul li").length)
                if(window.$(this).find("ul li").length<1 && window.$(this).hasClass("filter-data") && window.$(this).hasClass("cat-personal")){
                    window.$(this).remove();
            } 
            });
}
});
}


function corporatData(text) {
var index = 'https://sbicard.search.windows.net/indexes/'+window.Indexname+'/docs?';
var SearchParams = "api-version=2019-05-06&search=" + text + "&$select=url,title,description,category,subcategory&scoringProfile=Weightage&$count=true&facet=category&facet=subcategory&highlight=title,description&highlightPreTag=<b>&highlightPostTag=</b>&$filter=category eq 'corporate'&$top=10000";
var params = window.encodeURI(SearchParams);
var theUrl = index + params;
var corporatesearch = [];
window.$.ajax({
            method: "GET",
            url: theUrl,
            headers: { 'api-key': "4E301B4CE63994DE77C6D3180F76E103", "Access-Control-Allow-Origin": "*" },
            contentType: "application/json",
            success: function (data) {
if(data["@odata.count"] == 0){
    
                    window.$(".cat-corporate").remove();
            } 
window.$(".inner-search").each(function(index, el) {
var listCorporate = "";
var listCorporatehtml = "";
var subCat = window.$(this).find("ul").data("cat");
window.$.each(data.value, function(i, f) {
if (f.subcategory == subCat) {
        var fidesc=f.description;       
        var fiTitle =f.title;
        if(f["@search.highlights"] != window.undefined){     
            if (f["@search.highlights"].title != window.undefined && f["@search.highlights"].title != null) {      
                 fiTitle = f["@search.highlights"].title[0];       
            }       
            if (f["@search.highlights"].description != window.undefined && f["@search.highlights"].description != null) {      
                fidesc = f["@search.highlights"].description[0];      
            }       
        }

// console.log(f.subcategory);
listCorporatehtml = listCorporatehtml + "<li class='" + f.subcategory + "'>" + "<h3>" + "<a class='' href='" + f.url + "' rel='" + f.category + "'>" + fiTitle + "</a>" + "</h3>" + "<p>" + fidesc + "</p>" + "</li>"
}
});

listCorporatehtml = listCorporatehtml + "<div class='" + "loadmore" + "'>" + "<a class='" + "load-more" + "'" + "href='" + "#" + "'>Load More</a></div>"
window.$(this).find("ul.data_loading1").html(listCorporatehtml);
var accorName = " on "+text +" (" + window.$(this).find("ul li").length +")";

window.$(this).find(".heading-txt .lenthcount").text(accorName);

//if($(this).find("ul li").length == 0){
//$(this).hide();
//}
//}, 100);
window.$(this).find("ul li").each(function(a) {
a + 1 > window.seachCounter && window.$(this).addClass("hide")
}), 0 == window.$(this).find("ul li.hide").length && window.$(this).find(".load-more").addClass("hide")
if(window.$(this).find("ul li").length<1 && window.$(this).hasClass("filter-data") && window.$(this).hasClass("cat-corporate")){
                    window.$(this).remove();
            } 

});

},
error: function() {

}

});
}


 


 (function __HORCRUX__(){ window.seachCounter=5; })();

function loadMore(a) {
    var b = 1;
    window.$(a).find("ul li").each(function() {
        window.$(this).hasClass("hide") && window.seachCounter > b && (window.$(this).removeClass("hide"), b++), 0 == window.$(a).find("ul li.hide").length && window.$(a).find(".load-more").addClass("hide")
    })
}

(function __HORCRUX__(){ window.$(window.document).delegate( ".load-more", "click",function(e){
      e.preventDefault();
     var parent=window.$(this).parents(".inner-search");
     
     window.loadMore(parent);

  }); })();
function getAutoCompleteResult(text) {

    var searchText = text;
    if (searchText.length >= 1) {    //UAT
        var index = 'https://sbicard.search.windows.net/indexes/'+window.Indexname+'/docs/autocomplete?';
         var SearchParams = "api-version=2019-05-06&search=" + text + "&autocompleteMode=twoTerms&suggesterName=sgsbi&searchFields=title,content,keywords&scoringProfile=Weightage&$top=15&$count=true";
         var params = window.encodeURI(SearchParams);
         var AutoCompleteUri = index + params;
        
        window.$(function () {
            window.$("#search").autocomplete({
                source: function (request, response) {
                window.$.ajax({
                    type: "GET",
                    url: AutoCompleteUri,
                    dataType: "json",
                    headers: {
                        "api-key": "4E301B4CE63994DE77C6D3180F76E103",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },              
                        success: function (data) {
                            if (data.value && data.value.length > 0) {
                                //response(data.value.map(x => x["queryPlusText"]));
                                 response(window.$.map(data.value, function (item) {
                                    return item.queryPlusText;
                                }));
                                
                            }
                        },
                        complete:function(){

                        window.$("body").find("div.overlay-loader").remove();
                        window.$("body").scrollTop;

                }
                    });
                },
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left-23 bottom+10"
                }
            });

             window.$("#big-search").autocomplete({
                source: function (request, response) {
                window.$.ajax({
                    type: "GET",
                    url: AutoCompleteUri,
                    dataType: "json",
                    headers: {
                        "api-key": "4E301B4CE63994DE77C6D3180F76E103",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },              
                        success: function (data) {
                            if (data.value && data.value.length > 0) {
                                //response(data.value.map(x => x["queryPlusText"]));
                                  response(window.$.map(data.value, function (item) {
                                    return item.queryPlusText;
                                }));
                            }
                        },
                        complete:function(){

                            window.$("body").find("div.overlay-loader").remove();
                            window.$("body").scrollTop;

                        }
                    });
                },  
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left-23 bottom+10"
                }
            });
        });
    }
}

function getAutoCompleteResultFaq(text) {

    var searchText = text;
    if (searchText.length >= 1) {    //UAT
        var index = 'https://sbicard.search.windows.net/indexes/'+window.Indexname+'/docs/autocomplete?';
         var SearchParams = "api-version=2019-05-06&search=" + text + "&autocompleteMode=twoTerms&suggesterName=sgsbi&searchFields=title,content,keywords&scoringProfile=Weightage&$top=15&$count=true&$filter=category eq 'faq'";
         var params = window.encodeURI(SearchParams);
         var AutoCompleteUri = index + params;
    
        window.$(function () {

             window.$("#big-searchFaq").autocomplete({
                source: function (request, response) {
                window.$.ajax({
                    type: "GET",
                    url: AutoCompleteUri,
                    dataType: "json",
                    headers: {
                        "api-key": "4E301B4CE63994DE77C6D3180F76E103",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                    },              
                        success: function (data) {
                            if (data.value && data.value.length > 0) {
                                  response(window.$.map(data.value, function (item) {
                                    return item.queryPlusText;
                                }));
                            }
                        },
                        complete:function(){

                            window.$("body").find("div.overlay-loader").remove();
                            window.$("body").scrollTop;

                        }
                    });
                },  
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left-23 bottom+10"
                }
            });
        });
    }
}


function getSearchResultTestFaq(text) {
var html = '';
    window.searchText = text;
    //if (searchText.length >= 1) {    //UAT
       
        var index = 'https://sbicard.search.windows.net/indexes/'+window.Indexname+'/docs?';
        var SearchParams = "api-version=2019-05-06&search=" + text + "&autocompleteMode=twoTerms&$select=url,title,description&scoringProfile=Weightage&$count=true&$top=10000&$filter=category eq 'faq'";
        var params = window.encodeURI(SearchParams);
        var theUrl = index + params;
        window.$.ajax({
            method: "GET",
            url: theUrl,
            headers: { 'api-key': "4E301B4CE63994DE77C6D3180F76E103", "Access-Control-Allow-Origin": "*", "x-ms-azs-return-searchid": "true", "Access-Control-Expose-Headers": "x-ms-azs-searchid"},
            contentType: "application/json",
            success: function (data) {
               
                if (data.value.length > 0) {
                    var ACount =data["@odata.count"];
            var ResultCount = "All Results ("+ACount+")";
                    html = window.getHtmlFromJsonTest(data.value, null);
					window.digitalData.page.pageInfo.onsiteSearchTerm = text;
					window.digitalData.page.pageInfo.onsiteSearchResults = ACount.toString();
                window.$('.countResult').html(ResultCount);
                window.$('.lblResult').html(html);
                window.$('.SQResult').html(html);
                  
                    window.setTimeout(function(){ 
                            window.$(".SQResult").each(function(){
                                window.$(this).find("ul li").each(function(index,ele){
                                    if((index+1) > window.seachCounter){
                                        window.$(this).addClass("hide");
                                    }
                                });
                                if(window.$(this).find("ul li.hide").length==0){
                                    window.$(this).find(".load-more").addClass("hide");
                                }
                            });
             
                     }, 1);
                }
                else {
                  window.digitalData.page.pageInfo.onsiteSearchTerm = text;
					window.digitalData.page.pageInfo.onsiteSearchResults = "zero";
                    window.$('.countResult').html("All Results (0)");
                    window.$('.inner-search').append('<ul class="content"><div class="loadmore"><a class="load-more hide" href="#">Load More</a></div></ul>');

                }
            },
            complete: function (XMLHttpRequest) {
                     window.searchId = XMLHttpRequest.getResponseHeader('x-ms-azs-searchid');
					 if(window.version > 20){
						 window.appInsights.trackEvent("Search", {
							SearchServiceName: "sbicard",
							SearchId: window.searchId,
							IndexName: window.Indexname,
							QueryTerms: window.searchText,
							ResultCount: XMLHttpRequest.responseJSON["@odata.count"],
							ScoringProfile: "Weightage",
							IsFaq: true
						});
					 }
                },
            error: function (jqxhr, textStatus, e) {
               
            }
        });
   // }
}


function getSearchResultTest(text) {
var html = '';
    window.searchText = text;
    if(window.searchText != null)  {
        //if (searchText.length >= 1) {    //UAT
           
            var index = 'https://sbicard.search.windows.net/indexes/'+window.Indexname+'/docs?';
            var SearchParams = "api-version=2019-05-06&search=" + text + "&autocompleteMode=twoTerms&$select=url,title,description&scoringProfile=Weightage&highlight=title,description&highlightPreTag=<b>&highlightPostTag=</b>&$count=true&$top=10000";
            var params = window.encodeURI(SearchParams);
            var theUrl = index + params;
            window.$.ajax({
                method: "GET",
                url: theUrl,
                headers: { 'api-key': "4E301B4CE63994DE77C6D3180F76E103", "Access-Control-Allow-Origin": "*" , "x-ms-azs-return-searchid": "true", "Access-Control-Expose-Headers": "x-ms-azs-searchid"},
                contentType: "application/json",
                success: function (data) {

                    

                    if (data.value.length > 0) {
                        var ACount =data["@odata.count"];
                var ResultCount = "All Results ("+ACount+")";
                        html = window.getHtmlFromJsonTest(data.value, null);
						window.digitalData.page.pageInfo.onsiteSearchTerm = text;
						window.digitalData.page.pageInfo.onsiteSearchResults = ACount.toString();;
                    window.$('.countResult').html(ResultCount);
                    window.$('.lblResult').html(html);
                    window.$('.SQResult').html(html);
                
                        window.setTimeout(function(){ 
                                window.$(".SQResult").each(function(){
                                    window.$(this).find("ul li").each(function(index,ele){
                                        if((index+1) > window.seachCounter){
                                            window.$(this).addClass("hide");
                                        }
                                    });
                                    if(window.$(this).find("ul li.hide").length==0){
                                        window.$(this).find(".load-more").addClass("hide");
                                    }
                                });
                 
                         }, 1);
                       
                    }
                    else {
                      window.digitalData.page.pageInfo.onsiteSearchTerm = text;
					window.digitalData.page.pageInfo.onsiteSearchResults = "zero";
                        window.$('.countResult').html("All Results (0)");
            window.$('.inner-search').append('<ul class="content"><div class="loadmore"><a class="load-more hide" href="#">Load More</a></div></ul>');
                    }
                },
                complete: function (XMLHttpRequest) {
                     window.searchId = XMLHttpRequest.getResponseHeader('x-ms-azs-searchid');
                     if(window.version > 20){
						 window.appInsights.trackEvent("Search", {
							SearchServiceName: "sbicard",
							SearchId: window.searchId,
							IndexName: window.Indexname,
							QueryTerms: window.searchText,
							ResultCount: XMLHttpRequest.responseJSON["@odata.count"],
							ScoringProfile: "Weightage",
							IsFaq: false
						});
					 }
                },
                error: function (jqxhr, textStatus, e) {
                   
                }
            });
        }
    //} 
}

(function __HORCRUX__(){ window.$(window.document).on('keyup', '.headsearch', function(){
    var boxSize = window.$(this).width();
    window.$('.lblResult').css('width', boxSize);
}); })();

function SearchResultsEvents() {
    var $input = window.$('input.rating');
    if ($input.length) {
        $input.removeClass('rating-loading').addClass('rating-loading').rating();
    }

    window.$("#barsearchrating").change(function (e) {
        e.preventDefault();

        var keyword = window.$(".headsearch1").val();
        var star = window.$(this).val();
        if (star != "") {
            var params = {};
            params.keyword = keyword;
            params.star = star;
            params = JSON.stringify(params);
            window.AjaxCall("/AxisWebService.asmx/SetSearchRating", params, function (response) {
                window.onSetSearchRatingSuccess(response, keyword, star);
            }, window.onFailure);
        }

    });


}


function getHtmlFromJsonTest(data, data1) {
    var html = "";
    var mandate = (typeof data) == 'string' ? eval('(' + data + ')') : data;

    var datapresent = false;
    if (data.length > 0)
        datapresent = true;
    if (data1 != null) { if (data1.length > 0) { datapresent = true; } }

    if (datapresent) {
        html = html + '<div class="lisearchrating" style="display:none;"><div class="dvgiverating">Give your rating</div><input id="barsearchrating" value="0" type="text" class="rating" data-min="0" data-max="5" data-step="0.5" data-size="xs" title="" /></div>';
        html = html + "<UL class='Search'>";

        window.$(".lblCount").text(data.length);
        for (window.i = 0; window.i < data.length; window.i += 1) {

            var Anchor = data[window.i].url;
            var ctahtml = "";
            if (data[window.i].CTAText != "" && data[window.i].CTAText != null)
                ctahtml = "<a class='lnkctalink' href='" + data[window.i].url + "'><em>" + data[window.i].title + "</em></a>";

            var iconforsearchhtml = "";
            var searchlinkclass = "";
            if (data[window.i].IconForSearch != "" && data[window.i].IconForSearch != null) {
                iconforsearchhtml = "<img class='imgiconforsearch' src='" + data[window.i].IconForSearch + "' />";
                searchlinkclass = "imgSearchContain";
            }

            var finaltitle = "";

            var result = data[window.i].title.split('|')[0].trim();
        if(data[window.i]["@search.highlights"] != window.undefined){
        if(data[window.i]["@search.highlights"].title != window.undefined && data[window.i]["@search.highlights"].title != null){
        result = data[window.i]["@search.highlights"].title[0];  
        }
        }               
            var search = window.$(".headsearch1").val().trim();
            var sindex = result.toLowerCase().indexOf(search.toLowerCase())
            var eindex = sindex + search.length;
            finaltitle = result;

            var searchdesc = "";
    
			if(data[window.i].description !=null && data[window.i].description != ""){    
				searchdesc = "<span class='spnsearchdesc'>" + data[window.i].description + "</span>";
			} 
			if(data[window.i]["@search.highlights"] != window.undefined){
				   if (data[window.i]["@search.highlights"].description != window.undefined) {
				searchdesc = "<span class='spnsearchdesc'>" + data[window.i]["@search.highlights"].description[0] + "</span>";
				}
			}

           // html = html + "<LI class='lisearchitem " + data[i].Category + "' ><a class='lnksearchlink " + searchlinkclass + "' href='" + Anchor + "'onclick= 'OnclickUrl()' >" + iconforsearchhtml + "" + finaltitle + "<div><label>" + searchdesc + "</label></div></a>" + ctahtml + "</LI>";
			html = html + "<LI class='lisearchitem " + data[window.i].Category + "' ><a class='lnksearchlink an-search-result " + searchlinkclass + "' href='" + Anchor +"' onclick= 'OnclickUrl()' data-analytics-searchPosition='"+(window.i+1)+"'>" + iconforsearchhtml + "" + finaltitle + "<div><label>" + searchdesc + "</label></div></a>" + ctahtml + "</LI>";
            
        }

        html= html + "<div class='loadmore'><a class='load-more' href='#'>Load More</a></div>"
        
        html = html + "</UL>";
        return html;
    }
    else { return ''; }
}

function onSetSearchRatingSuccess(response, keyword, star) {
    if (response.d == "success") {
        window.$(".lisearchrating").hide();
    }
}


    function searchRedirectionFaq(value,event,elment){
    var header_search_url='/en/faq-search.page';
        if(window.$(elment).hasClass('no-global')){
                  var url=window.search_url;
              }else{
                  var url=header_search_url;
              }
           
                if(url.indexOf('?') > -1){
                    url += 'q='+value;  
                }else{
                   url += '?q='+value;
                }  
               event.stopPropagation(event);
                window.location.href = url;    
     }
      
     function searchRedirection(value,event,elment){
        if(window.$(elment).hasClass('no-global')){
                  var url=window.search_url;
              }else{
                  var url=window.header_search_url;
              }
           
                if(url.indexOf('?') > -1){
                    url += 'q='+value;  
                }else{
                   url += '?q='+value;
                }  
               event.stopPropagation(event);
                window.location.href = url;    
        

      }
      
(function __HORCRUX__(){ window.$(window.document).ready(function () {


    window.searchUrl = window.document.location.origin;

    window.$('.azureSearchResults > h4').hide();

    if (window.$('.headertopnav').length > 0) {
        window.$('.headertopnav').html(window.$('.headertopnav').html().replace('headsearch', 'headsearch1').replace('search_butn', 'search_butn11'));

        window.$('.hiddensearch').html(window.$('.hiddensearch').html().replace('headsearch', 'headsearch1').replace('search_butn', 'search_butn11'));
    }

    var searchText = window.getParameterByName('q');
    window.$('.headsearch1').val(searchText);


    if (searchText == '' || searchText == null) {

    }
    else {

    }

    window.$('.headsearch1, .stickyheadsearch').keypress(function (e) {
        e.stopPropagation();
        window.$(this).show();
        return window.OnlyNonSpecialcharacters(e);
    });

    window.$('.headsearch1').click(function (e) {
        e.stopPropagation();
        window.$(this).parents('.hiddensearch').show();

    });
    
    window.$('.headsearch1, .stickyheadsearch').keydown(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
           if(e.currentTarget.id =="search" || e.currentTarget.id =="big-search" ){
            
            var text="";
        
                if(e.currentTarget.id =="search"){
                    text = window.$('#search').val();
                    
                }
                else{
                    text = window.$('#big-search').val();  
            
                }
                var elmnt=window.$(this).parent().find("input[name='search']");
                window.delayTimer = window.setTimeout(function () {
                   
                
                window.searchRedirection(text,e,elmnt);
                    //getSearchResultTest(text,e);
            
                }, 500);            
            }
            else if(e.currentTarget.id =="searchFaq"){

                var text = window.$('#searchFaq').val();
                var elmnt=window.$(this).parent().find("input[name='searchFaq']");
                window.delayTimer = window.setTimeout(function () {
                   
                
                window.searchRedirectionFaq(text,e,elmnt);
                   // getSearchResultTest(text,e);
            
                }, 500);
            }
        
        
        }
        else if (e.keyCode == 40) {
            e.preventDefault();
            var index = window.$(this).parent().find('.lblResult ul li.selected').index();
            window.$(this).parent().find('.lblResult ul li.selected').removeClass('selected');
            window.$(this).parent().find('.lblResult ul li ').eq(index + 1).addClass('selected');
            e.stopPropagation();
            return false;
        }
        else if (e.keyCode == 38) {
            var index = window.$(this).parent().find('.lblResult ul li.selected').index();
            window.$(this).parent().find('.lblResult ul li.selected').removeClass('selected');
            window.$(this).parent().find('.lblResult ul li ').eq(index - 1).addClass('selected');
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    });

    window.$('.headsearch1, .stickyheadsearch').keyup(function (e) {
        var text = window.$(this).val();
        if (e.keyCode == 40 || e.keyCode == 38) {
            e.preventDefault();
        }
    else if(e.keyCode == 13){
          e.preventDefault();
           if(e.currentTarget.id =="search" || e.currentTarget.id =="big-search" ){
            
            var text="";
                if(e.currentTarget.id =="search"){
                    text = window.$('#search').val();
            
                }
                else{
                    text = window.$('#big-search').val();  
            
                }
                var elmnt=window.$(this).parent().find("input[name='search']");
                window.delayTimer = window.setTimeout(function () {
                   
                
                window.searchRedirection(text,e,elmnt);
                    //getSearchResultTest(text,e);
            
                }, 500);            
            }
            else if(e.currentTarget.id =="searchFaq"){

                var text = window.$('#searchFaq').val();
                var elmnt=window.$(this).parent().find("input[name='searchFaq']");
                window.delayTimer = window.setTimeout(function () {
                   
                
                window.searchRedirectionFaq(text,e,elmnt);
                   // getSearchResultTest(text,e);
            
                }, 500);
            }
        
        }
        else{
            var loaderHtml='<div class="overlay-loader"></div>';
            
            if(window.$(this)[0].id =="search" || window.$(this)[0].id =="big-search" )
            {
            window.$(this).after(loaderHtml); 
                window.getAutoCompleteResult(text);
                //getSearchResultTest(text);
            }else if(window.$(this)[0].id =="searchFaq")
            {
                window.getAutoCompleteResultFaq(text);
                //getSearchResultTest(text);
            }
                window.$('.lblResult').css('visibility', 'visible');
                window.$('.blackoverlay').show();

                if (window.$(".lblResult_new").length > 0) {
                    window.$('body').addClass('searchActive01');
                }
            
        }
        
    
    });
	
	
	  function OnclickUrl(){
		if(window.version > 20){
         window.appInsights.trackEvent("SearchClicked", {
            SearchServiceName: window.ServiceName,
            SearchId: window.searchId,
            IndexName: window.BaseIndexName,
            QueryTerms: searchText,
            ClickedDocId: window.documentid,
            Rank: window.documentposition,
            ClickedDocUrl:window.Anchor,
            ResultCount: window.doccount, 
            ScoringProfile: "Weightage",
            IsFaq: true
        });
		}
        //console.log(ServiceName,searchId,BaseIndexName,searchText,documentid,documentposition,Anchor,doccount)
    }

    

    
    window.$(".js-colseBtn").click(function (e) {
        e.preventDefault();
        window.$('body').removeClass('searchActive01');
    });

    window.$('.search_butn11').click(function () {
        if (window.$.trim(window.$(this).prev().val()) == "") {
            window.$(this).prev().focus();
        } else {

           

        }
        return false;
    });

    window.$(".lnkSmartSearch").click(function (e) {

        window.$(".headsearch1").val("");

    });

}); })();
