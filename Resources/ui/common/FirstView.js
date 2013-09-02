//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	var helpshift = require('com.helpshift.ios');
	
	var label1 = Ti.UI.createLabel({
	  color: '#987',
	  text: 'Show Conversation after issue report',
	  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	  top: 10,
	  width: Ti.UI.SIZE, height: 20
	});
	var ConvSwitch = Ti.UI.createSwitch({
	  value:true, // mandatory property for iOS 
	  top: 30
	});

	var label2 = Ti.UI.createLabel({
	  color: '#987',
	  text: 'Show report issue button on search',
	  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	  top: 60,
	  width: Ti.UI.SIZE, height: 20
	});
	
	var ReportIssueSwitch = Ti.UI.createSwitch({
	  value:true, // mandatory property for iOS 
	  top: 80
	});


/*	var network = Titanium.Network;
	Ti.API.info("*************** This is called *****************skdjhfksjdhfkjsdf!!");
	network.registerForPushNotifications ({
		callback : function (notification) 
		{
			alert("got data as " + notification.data);
		},
		error : function (error) 
		{
			alert("We got an error" + error.error);
		},
		success : function (success)
		{
			alert("Code: " + success.code + "deviceToken : " + success.deviceToken + "Success : " + success.success);
		},
		types : [Titanium.Network.NOTIFICATION_TYPE_ALERT, Titanium.Network.NOTIFICATION_TYPE_BADGE]		
	});
*/
	 var showSupport = Titanium.UI.createButton({
   	 title: 'Show support',
  	 top: 120,
 	 width: 150,
  	 height: 50
  });
  showSupport.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked showSupport");
  	 var notifCount = helpshift.notificationCountAsync(true);
	 Titanium.API.info("Notif count is " + notifCount);
	 if (ConvSwitch.value)
	   	 helpshift.showSupport({showConvOnReportIssue:"yes"});
   	 else
	   	 helpshift.showSupport({showConvOnReportIssue:"no"});
  });
  
  var reportIssue = Titanium.UI.createButton({
   	 title: 'Report issue',
  	 top: 170,
 	 width: 150,
  	 height: 50
  });
  reportIssue.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked reportIssue");
  	 if (ConvSwitch.value)
  	 	helpshift.reportIssue({showConvOnReportIssue:"yes"});
  	 else
  	 	helpshift.reportIssue({showConvOnReportIssue:"no"});
  });

  var showFaqSection = Titanium.UI.createButton({
   	 title: 'Show faq section',
  	 top: 220,
 	 width: 150,
  	 height: 50
  });
  showFaqSection.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked show faq section with 125");
   	 helpshift.showFaqSection(125);
  });
  
  var showFaq = Titanium.UI.createButton({
   	 title: 'Show faq question',
  	 top: 270,
 	 width: 150,
  	 height: 50
  });
  showFaq.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked show faq section");
   	 helpshift.showFAQ(151);
  });

  var showInbox = Titanium.UI.createButton({
   	 title: 'Show Inbox',
  	 top: 320,
 	 width: 150,
  	 height: 50
  });
  showInbox.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked show faq section");
   	 helpshift.showInbox();
  });

  var showFaqs = Titanium.UI.createButton({
   	 title: 'Show faqs',
  	 top: 370,
 	 width: 150,
  	 height: 50
  });
  showFaqs.addEventListener('click',function(e) {
  	 Titanium.API.info("You clicked show faq section");
    var reportIssueFlag = "no", convOnReportIssue = "no";
    if (ReportIssueSwitch.value)
           reportIssueFlag = "yes"
    if (ConvSwitch.value)
      convOnReportIssue = "yes";

    helpshift.showFAQs({showReportIssue : reportIssueFlag, showConvOnReportIssue : convOnReportIssue});
  });

	self.add(label1);

	self.add(label2);
	self.add(ConvSwitch);
	self.add(ReportIssueSwitch);
	
  self.add(showSupport);
  self.add(reportIssue);
  self.add(showFaqSection);
  self.add(showFaq);
  self.add(showFaqs);
  self.add(showInbox);
	helpshift.setUserIdentifier('sdasdasdasd-sadasdasd-asdasd');
	helpshift.setUsername('Rhishikesh');
	helpshift.setUseremail('rhishikeshj@gmail.com');
	helpshift.leaveBreadcrumb("this is a bread crumb");
	//helpshift.registerDeviceToken("ewjrijserwe12123123werwerwer");
	//helpshift.handleNotification('issue-id');
  helpshift.addEventListener('notificationCountAsyncReceived', function  (data) {Ti.API.info("1 : Got a callback !!" + data.count)});
  helpshift.addEventListener('helpshiftSessionHasEnded', function  (data) {Ti.API.info("2 : Got a callback !!")});
  return self;
}

module.exports = FirstView;
