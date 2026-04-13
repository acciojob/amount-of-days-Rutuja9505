function daysOfAYear(year) {
	let days=0;
	if(year%4==0&&year%100!=0||year%400==0)
	{
		days=366;
	}
	else{
		days=365;
	}
	return days;
}
daysOfAYear(2022);
daysOfAYear(2024);
