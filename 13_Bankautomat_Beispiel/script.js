const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
    
    const readLineAsync = () => {
    return new Promise((resolve) => {
    rl.question("", (userRes) => {
    resolve(userRes);
        });
    });
};
    
    let running = true;
    let balance = 0;
    
    console.log("Selektieren Sie die gewünschte Funktion:");
    console.log(" 1. Einzahlen");
    console.log(" 2. Abheben");
    console.log(" 3. Kontostand");
    console.log(" 4. Ende");
    
    const main = async () => {
    while (running) {
    let action = await readLineAsync();
    
    if (action === "1") {
      console.log("Geben Sie den Betrag ein, den Sie einzahlen möchten:");
      let deposit = await readLineAsync();
      balance += parseFloat(deposit);
      console.log(`Sie haben ${deposit} Euro eingezahlt!`);
    }
    if (action === "2") {
      console.log("Wie viel möchten Sie abheben?");
      let withdraw = await readLineAsync();
      balance -= parseFloat(withdraw);
      console.log(`Sie haben ${withdraw} Euro abgehoben.`);
    }
    if (action === "3") {
      console.log(`Der Kontostand beträgt: ${balance}`);
    }
    if (action === "4") {
      console.log("Maschine stoppt!");
      running = false;
    }
    }
    
    rl.close();
    };
    
    main();