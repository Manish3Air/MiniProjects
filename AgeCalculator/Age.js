
function calculate(){
    const currdate = new Date();
	const curryear = currdate.getFullYear();
    const val=document.getElementById('birthday').value;
    const date = new Date(val);
    if (isNaN(date.getTime())) { 
        alert("Please enter a valid birthdate");
        return;
    }
    const year = date.getFullYear();
	const display=document.getElementById('result');
    let Birthday=curryear-year;
    display.textContent="You are " + Birthday + " year old";
}