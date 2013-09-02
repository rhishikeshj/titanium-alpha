//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	var helpshift = require('com.helpshift.android');
	
	var network = Titanium.Network;
	 var showSupport = Titanium.UI.createButton({
   	 title: 'Show support',
  	 top: 10,
 	 width: 600,
  	 height: 100
  });
  showSupport.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked showSupport");
   	 helpshift.showSupport();
  });
  
  var reportIssue = Titanium.UI.createButton({
   	 title: 'Report issue',
  	 top: 110,
 	 width: 600,
  	 height: 100
  });
  reportIssue.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked reportIssue");
   	 helpshift.reportIssueWithConfig({showConvOnReportIssue:true});
  });

  var showFaqSection = Titanium.UI.createButton({
   	 title: 'Show faq section',
  	 top: 220,
 	 width: 600,
  	 height: 100
  });
  showFaqSection.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked show faq section");
   	 helpshift.showFaqSection(73);
  });
  
  var showFaq = Titanium.UI.createButton({
   	 title: 'Show faq question',
  	 top: 330,
 	 width: 600,
  	 height: 100
  });
  showFaq.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked show faq section");
   	 helpshift.showFAQ(151);
  });

  var showInbox = Titanium.UI.createButton({
   	 title: 'Show Inbox',
  	 top: 440,
 	 width: 600,
  	 height: 100
  });
  showInbox.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked show faq section");
   	 helpshift.showInbox();
  });

  var showFaqs = Titanium.UI.createButton({
   	 title: 'Show faqs',
  	 top: 550,
 	 width: 600,
  	 height: 100
  });
  showFaqs.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked show faq section");
   	 helpshift.showFAQsWithConfig({showReportIssue:false});
  });

  var clearDb = Titanium.UI.createButton({
   	 title: 'Clear DB',
  	 top: 660,
 	 width: 600,
  	 height: 100
  });
  clearDb.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked show faq section");
   	 helpshift.getNotificationCountAsync();
  });

  helpshift.addEventListener('notificationCountAsyncReceived', function  (data) {alert("1 : Got a callback !!" + data.count)});
  self.add(showSupport);
  self.add(reportIssue);
  self.add(showFaqSection);
  self.add(showFaq);
  self.add(showFaqs);
  self.add(showInbox);
  self.add(clearDb);  

  return self;
}

module.exports = FirstView;
