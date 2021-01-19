import React from 'react'

function YearCounter() {
    const YearCounterStyles = {
        color: "#B6CEDE",
        fontFamily: "Poppins, sans-serif",
        fontSize: "30px",
        margin: "20px",
        textAlign: "center",
    }

    const currentYear = new Date
    const oneDay = 86400000

    const age = currentYear.getFullYear() - 1997;
    const birthDay = new Date(currentYear.getFullYear() + 1, 0, 9)
    const howManyMiliseconds = (birthDay.getTime() - currentYear.getTime());
    const howManyDaysLeft = Math.round(howManyMiliseconds/oneDay)

    return (
        <div style={YearCounterStyles}>
            Zostało {howManyDaysLeft} dni do {age}. urodzin.
        </div>
    )
}

export default YearCounter
