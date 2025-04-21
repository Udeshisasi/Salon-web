function validate() 
{
  let x = document.forms["sub"]["abcd"].value;
  if (x == "") 
  {
    alert("Enter Your Email Address..");
    return false;
  }
}