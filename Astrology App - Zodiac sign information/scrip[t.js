const zodiacData = [
    { sign: "Aries", start: "03-21", end: "04-19", symbol: "♈", traits: "Bold, ambitious, and confident." },
    { sign: "Taurus", start: "04-20", end: "05-20", symbol: "♉", traits: "Reliable, patient, and practical." },
    { sign: "Gemini", start: "05-21", end: "06-20", symbol: "♊", traits: "Adaptable, outgoing, and intelligent." },
    { sign: "Cancer", start: "06-21", end: "07-22", symbol: "♋", traits: "Compassionate, protective, and intuitive." },
    { sign: "Leo", start: "07-23", end: "08-22", symbol: "♌", traits: "Generous, loyal, and enthusiastic." },
    { sign: "Virgo", start: "08-23", end: "09-22", symbol: "♍", traits: "Practical, analytical, and hardworking." },
    { sign: "Libra", start: "09-23", end: "10-22", symbol: "♎", traits: "Diplomatic, artistic, and social." },
    { sign: "Scorpio", start: "10-23", end: "11-21", symbol: "♏", traits: "Resourceful, powerful, and brave." },
    { sign: "Sagittarius", start: "11-22", end: "12-21", symbol: "♐", traits: "Optimistic, funny, and generous." },
    { sign: "Capricorn", start: "12-22", end: "01-19", symbol: "♑", traits: "Disciplined, responsible, and patient." },
    { sign: "Aquarius", start: "01-20", end: "02-18", symbol: "♒", traits: "Original, independent, and humanitarian." },
    { sign: "Pisces", start: "02-19", end: "03-20", symbol: "♓", traits: "Artistic, gentle, and wise." }
];

function findZodiac() {
    const inputDate = document.getElementById("birthDate").value;
    if (!inputDate) return;

    // Convert input date to MM-DD format for easy comparison
    const date = new Date(inputDate);
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    const userMD = `${m}-${d}`;

    // Find the matching sign
    const signMatch = zodiacData.find(z => {
        if (z.sign === "Capricorn") {
            // Special case for Capricorn (wraps around New Year)
            return userMD >= "12-22" || userMD <= "01-19";
        }
        return userMD >= z.start && userMD <= z.end;
    });

    if (signMatch) displayResult(signMatch);
}

function displayResult(data) {
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("zName").innerText = data.sign;
    document.getElementById("zSymbol").innerText = data.symbol;
    document.getElementById("zDateRange").innerText = `${data.start} to ${data.end}`;
    document.getElementById("zTraits").innerText = data.traits;
}