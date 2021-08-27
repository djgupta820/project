function validate()
{
    var x = document.forms["loginform"]["username"].value;
    var y = document.forms["loginform"]["password"].value;
    if(x == "" || y == "")
    {
        alert("Please fill the details correctly");
        return false;
    }
}