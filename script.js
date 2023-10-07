const calculation = (e, day, month, year) => {
    e.preventDefault();
    const birthday = new Date(`${year}/${month}/${day}`);
    const age_days = Math.trunc((new Date() - birthday)/86400000);
    const years = Math.trunc(age_days/365.25);
    const months = Math.trunc((age_days%365.25)/30.5);
    const days = Math.trunc((age_days%365.25)%30.5);

    document.getElementById("result_years").innerHTML = years;
    document.getElementById("result_months").innerHTML = months;
    document.getElementById("result_days").innerHTML = days;

    if (years == 1) {
        document.getElementById("years_text").innerHTML = "year";
    } else {
        document.getElementById("years_text").innerHTML = "years"
    };
    if (months == 1) {
        document.getElementById("months_text").innerHTML = "month";
    } else {
        document.getElementById("months_text").innerHTML = "months"
    };
    if (days == 1) {
        document.getElementById("days_text").innerHTML = "day";
    } else {
        document.getElementById("days_text").innerHTML = "days"
    };

}