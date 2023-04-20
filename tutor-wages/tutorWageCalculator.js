

function tutorWageCalculator(timeSheet,level) {
    let totalTutorWage = 0;
    let tutorWage = timeSheet.split("-");
    for (var i = 0; i < level.length; i++) {
        const currentWage = timeSheet[i].trim();
        if (currentWage.startsWith(7)) {
            totalTutorWage += 75 * 25;
        }

        else if (currentWage.startsWith(4)) {
            totalTutorWage += 90 * 33;
        }

        else if (currentWage.startsWith(0)) {
            totalTutorWage += 105 * 12;
        }

        else { currentWage.startsWith(0) && endsWith(4) || currentWage.startsWith(5) && endsWith(1) }
        return "Invalid";
    }

    return totalTutorWage;

}