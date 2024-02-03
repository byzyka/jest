export function healthTotal(healthScale) {
   

    for (let i = 0; i < healthScale.length; i++) {
       
        if (healthScale[i].health > 50) {
            return "healthy";
        } 
        if (healthScale[i].health < 50 && healthScale[i].health > 15) {
            return "wounded";
        } 
        if (healthScale[i].health < 15) {
            return "critical";
        }
    }
}

