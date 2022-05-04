//This is creating a variable to let the program know ill be pulling a json file.
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://raw.githubusercontent.com/jdmead/COMP1004-Testing-URL/main/Data.json');//This command is pulling in an external link that contains my json file.

ourRequest.onload = function() 
{
    window.localStorage.clear()
    var ourData = JSON.parse(ourRequest.responseText);//This is to make sure that once the file is read it is always in a json format not normal text.
    var error = "false";
    user=prompt('Please enter your email')
    passw=prompt('Enter password to view page','');
    
    for(let i = 0; i < ourData.length; i++)//The for loop is so that the code reads all of the json and tries to match the inputed text with the email and password.
    {
        if((user==ourData[i].email ) && (passw==ourData[i].password)){
            alert('Correct username and password');
            error = "true";
            //Im creating a a key for each username and password needed and assigning it a value based on its json equivelence.
            window.localStorage.setItem("SteamPassword", JSON.stringify(ourData[i].SteamPassword));
            window.localStorage.setItem("SteamUser", JSON.stringify(ourData[i].SteamUser));
            window.localStorage.setItem("UbisoftPassword", JSON.stringify(ourData[i].UbisoftPassword));
            window.localStorage.setItem("UbisoftUser", JSON.stringify(ourData[i].UbisoftUser));
            window.localStorage.setItem("OriginPassword", JSON.stringify(ourData[i].OriginPassword));
            window.localStorage.setItem("OriginUser", JSON.stringify(ourData[i].OriginUser));
            window.localStorage.setItem("ActivisionPassword", JSON.stringify(ourData[i].ActivisionPassword));
            window.localStorage.setItem("ActivisionUser", JSON.stringify(ourData[i].ActivisionUser));
            window.localStorage.setItem("HSBCPassword", JSON.stringify(ourData[i].HSBCPassword));
            window.localStorage.setItem("HSBCUser", JSON.stringify(ourData[i].HSBCUser));
            window.localStorage.setItem("TWPassword", JSON.stringify(ourData[i].TWPassword));
            window.localStorage.setItem("TWUser", JSON.stringify(ourData[i].TWUser));
            window.localStorage.setItem("AmazonPassword", JSON.stringify(ourData[i].AmazonPassword));
            window.localStorage.setItem("AmazonUser", JSON.stringify(ourData[i].AmazonUser));
            window.localStorage.setItem("YoutubePassword", JSON.stringify(ourData[i].YoutubePassword));
            window.localStorage.setItem("YoutubeUser", JSON.stringify(ourData[i].YoutubeUser));
            window.localStorage.setItem("TwitchPassword", JSON.stringify(ourData[i].TwitchPassword));
            window.localStorage.setItem("TwitchUser", JSON.stringify(ourData[i].TwitchUser));
            i = ourData.length +1
            
        }
        else if ((user != ourData[i].email) && (passw != ourData[i].password))
        {
            error = "false";//This assigns an error statement if login was unsuccesfull.
        }
    }
    if(error == "false")
    {
        alert('incorect username or password');
        var nav1 = document.getElementById("AF");
        var nav2 = document.getElementById("CUF");
        var nav4 = document.getElementById("SOF");
        var errorTXT = document.getElementById("ERRORTXT")
        
        $(nav1).hide();
        $(nav2).hide();
        $(nav4).hide();
        $(errorTXT).show();
        
    }
};

ourRequest.send();  

//This block off code runs onload of the document. It tells the program once a section is clicked a small dropdown will display bellow.
$(document).ready(function()
{   
    $("#flipUbisoft").click(function()
    {
        $("#panelUbisoft").slideToggle("slow");
    });
    $("#flipSteam").click(function()
    {
        $("#panelSteam").slideToggle("slow");
    });
    $("#flipOrigin").click(function()
    {
        $("#panelOrigin").slideToggle("slow");
    }); 
    $("#flipActivision").click(function()
    {
        $("#panelActivision").slideToggle("slow");
    });
    $("#flipHSBC").click(function()
    {
        $("#panelHSBC").slideToggle("slow");
    });
    $("#flipTW").click(function()
    {
        $("#panelTW").slideToggle("slow");
    });
    $("#flipAmazon").click(function()
    {
        $("#panelAmazon").slideToggle("slow");
    });
    $("#flipYoutube").click(function()
    {
        $("#panelYoutube").slideToggle("slow");
    });
    $("#flipTwitch").click(function()
    {
        $("#panelTwitch").slideToggle("slow");
    });
});
function GamesFunction()
{ 
    var GDIV = document.getElementById("GamesDIV");
    var Steam = document.getElementById("flipSteam");
    var Ubisoft = document.getElementById("flipUbisoft");
    var Origin = document.getElementById("flipOrigin");
    var Activision = document.getElementById("flipActivision");
    var HSBC = document.getElementById("flipHSBC");
    var TW = document.getElementById("flipTW");
    var Amazon = document.getElementById("flipAmazon");
    var Youtube = document.getElementById("flipYoutube");
    var Twitch = document.getElementById("flipTwitch");
    var StrengthDIV = document.getElementById("StrengthDIV");
    
    $(StrengthDIV).hide();
    $(GDIV).show();
    $(Steam).show();
    $(Ubisoft).show();
    $(Origin).show();
    $(Activision).show();
    $(HSBC).show();
    $(TW).show();
    $(Amazon).show();
    $(Youtube).show();
    $(Twitch).show();
    
    //Here im assigning the username and passwords from the json into it's equivelent key in the local storage. 
    document.getElementById("flipSteam").innerHTML = localStorage.getItem("SteamUser");
    document.getElementById("panelSteam").innerHTML = localStorage.getItem("SteamPassword");
    
    document.getElementById("flipUbisoft").innerHTML = localStorage.getItem("UbisoftUser");
    document.getElementById("panelUbisoft").innerHTML = localStorage.getItem("UbisoftPassword");
    
    document.getElementById("flipOrigin").innerHTML = localStorage.getItem("OriginUser");
    document.getElementById("panelOrigin").innerHTML = localStorage.getItem("OriginPassword");
    
    document.getElementById("flipActivision").innerHTML = localStorage.getItem("ActivisionUser");
    document.getElementById("panelActivision").innerHTML = localStorage.getItem("ActivisionPassword");
    
    document.getElementById("flipHSBC").innerHTML = localStorage.getItem("HSBCUser");
    document.getElementById("panelHSBC").innerHTML = localStorage.getItem("HSBCPassword");
    
    document.getElementById("flipTW").innerHTML = localStorage.getItem("TWUser");
    document.getElementById("panelTW").innerHTML = localStorage.getItem("TWPassword");
    
    document.getElementById("flipAmazon").innerHTML = localStorage.getItem("AmazonUser");
    document.getElementById("panelAmazon").innerHTML = localStorage.getItem("AmazonPassword");
    
    document.getElementById("flipYoutube").innerHTML = localStorage.getItem("YoutubeUser");
    document.getElementById("panelYoutube").innerHTML = localStorage.getItem("YoutubePassword");
    
    document.getElementById("flipTwitch").innerHTML = localStorage.getItem("TwitchUser");
    document.getElementById("panelTwitch").innerHTML = localStorage.getItem("TwitchPassword");   
}


function StrengthFunction()
{
    var Steam = document.getElementById("flipSteam");
    var Ubisoft = document.getElementById("flipUbisoft");
    var Origin = document.getElementById("flipOrigin");
    var Activision = document.getElementById("flipActivision");
    var HSBC = document.getElementById("flipHSBC");
    var TW = document.getElementById("flipTW");
    var Amazon = document.getElementById("flipAmazon");
    var Youtube = document.getElementById("flipYoutube");
    var Twitch = document.getElementById("flipTwitch");
    var StrengthDIV = document.getElementById("StrengthDIV");
    var Steampan = document.getElementById("panelSteam");
    var Ubisoftpan = document.getElementById("panelUbisoft");
    var Originpan = document.getElementById("panelOrigin");
    var Activisionpan = document.getElementById("panelActivision");
    var HSBCpan = document.getElementById("panelHSBC");
    var TWpan = document.getElementById("panelTW");
    var Amazonpan = document.getElementById("panelAmazon");
    var Youtubepan = document.getElementById("panelYoutube");
    var Twitchpan = document.getElementById("panelTwitch");
    
    $(Steampan).hide();
    $(Ubisoftpan).hide();
    $(Originpan).hide();
    $(Activisionpan).hide();
    $(HSBCpan).hide();
    $(TWpan).hide();
    $(Amazonpan).hide();
    $(Youtubepan).hide();
    $(Twitchpan).hide();
    $(Steam).hide();
    $(Ubisoft).hide();
    $(Origin).hide();
    $(Activision).hide();
    $(HSBC).hide();
    $(TW).hide();
    $(Amazon).hide();
    $(Youtube).hide();
    $(Twitch).hide();
    $(StrengthDIV).show();
}
function getOption() 
{
    selectElement = document.querySelector('#select1');//This pulls the string that the user has selected on the webpage
    output = selectElement.value;//This gets it's respected value. 
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');//I have a RegExp that creates parameters into a variable. 
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    var Pass = localStorage.getItem(output);
    if (strongPassword.test(Pass))//The code grabs the password from the respected key choosen and if it matches with the parameters it will display the following code.
    {
        document.querySelector('.output').textContent = "Your password strength is strong";
    }
    else if(mediumPassword.test(Pass))//If condition not met it will try to match this parameter. If not just read the else statement.
    {
        document.querySelector('.output').textContent = "Your password strength is medium";
    }
    else 
    {
        document.querySelector('.output').textContent = "Your password strength is week";
    }
}
function AccountsFunction() 
{
    var ADIV = document.getElementById("AccountDIV");
    var CDIV = document.getElementById("ContactDIV");  
    var SDIV = document.getElementById("SignOutDIV");
    var SF = document.getElementById("SF");
    var StrengthDIV = document.getElementById("StrengthDIV");

    $(StrengthDIV).hide();
    $(SF).show();
    $(ADIV).show();
    $(CDIV).hide();
    $(SDIV).hide();
}


function ContactUsFunction() 
{
    var ADIV = document.getElementById("AccountDIV");
    var CDIV = document.getElementById("ContactDIV");  
    var SDIV = document.getElementById("SignOutDIV");
    var Steam = document.getElementById("flipSteam");
    var Ubisoft = document.getElementById("flipUbisoft");
    var Origin = document.getElementById("flipOrigin");
    var Activision = document.getElementById("flipActivision");
    var HSBC = document.getElementById("flipHSBC");
    var TW = document.getElementById("flipTW");
    var Amazon = document.getElementById("flipAmazon");
    var Youtube = document.getElementById("flipYoutube");
    var Twitch = document.getElementById("flipTwitch");
    var Steampan = document.getElementById("panelSteam");
    var Ubisoftpan = document.getElementById("panelUbisoft");
    var Originpan = document.getElementById("panelOrigin");
    var Activisionpan = document.getElementById("panelActivision");
    var HSBCpan = document.getElementById("panelHSBC");
    var TWpan = document.getElementById("panelTW");
    var Amazonpan = document.getElementById("panelAmazon");
    var Youtubepan = document.getElementById("panelYoutube");
    var Twitchpan = document.getElementById("panelTwitch");
    var StrengthDIV = document.getElementById("StrengthDIV");

    $(StrengthDIV).hide();
    $(Steampan).hide();
    $(Ubisoftpan).hide();
    $(Originpan).hide();
    $(Activisionpan).hide();
    $(HSBCpan).hide();
    $(TWpan).hide();
    $(Amazonpan).hide();
    $(Youtubepan).hide();
    $(Twitchpan).hide();
    $(Steam).hide();
    $(Ubisoft).hide();
    $(Origin).hide();
    $(Activision).hide();
    $(CDIV).show();
    $(ADIV).hide();
    $(SDIV).hide();
    $(HSBC).hide();
    $(TW).hide();
    $(Amazon).hide();
    $(Youtube).hide();
    $(Twitch).hide();
}
