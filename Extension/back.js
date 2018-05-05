browser.tabs.onCreated.addListener(start);
browser.tabs.onUpdated.addListener(start);

var last_tab = -1;

function start(){
	browser.tabs.query({'active': true}, function(tabs){
		var tab = tabs[0];
		if(last_tab != tab.id && tab.url.indexOf("msn.com/spartan/") > -1){
			last_tab = tab.id;
			url = "page.html";
			browser.tabs.update(tab.id,{url: url});
		}
	});
}

start();