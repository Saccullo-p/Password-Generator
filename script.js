function generatePassword() {
    var passwordLengthInput = document.getElementById("passwordLength");
    var passwordLength = parseInt(passwordLengthInput.value);

    var includeUppercase = document.getElementById("includeUppercase").checked;
    var includeLowercase = document.getElementById("includeLowercase").checked;
    var includeNumbers = document.getElementById("includeNumbers").checked;
    var includeSymbols = document.getElementById("includeSymbols").checked;

    // Verifica se almeno una opzione di carattere è selezionata
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        alert("Seleziona almeno una opzione di carattere.");
        return;
    }

    var characters = "";
    if (includeUppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeLowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeNumbers) {
        characters += "0123456789";
    }
    if (includeSymbols) {
        characters += "!@#$%^&*()";
    }

    var password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    document.getElementById("generatedPassword").textContent = password;
}
