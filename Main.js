//Use 'Record/Learn' button to begin test recording

function Test(params)
{
	RVL.DoPlayScript("Main.rvl.xlsx", Tester.GetParam("sheetName", "RVL"));
}

g_load_libraries=["Web"]


    Navigator.Open("https://mail.google.com");
    SeS('identifier').DoClick();
    SeS('identifier').DoSetText("AutomationTest.1123");
    SeS('Next').DoClick();
    SeS('Passwd').DoClick();
    SeS('Passwd').DoSetText("AutomationTest@1");
    SeS('Next1').DoClick();
    Tester.Assert("Verify that: InnerText=Inbox1", SeS('Inbox1').GetInnerText() == "Inbox1" );
    Tester.Assert("Verify that: PageTitle=Inbox (1) - automationtest.1123@gmail.com - Gmail", SeS('Google_Community_Te.').GetPageTitle() == "Inbox (1) - automationtest.1123@gmail.com - Gmail" );
    SeS('https://accounts.google.com/Sign').DoClick();
    SeS('Sign_out').DoClick();
