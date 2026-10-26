const payments = [
    { petName: "Chester", amount: 50, status: "APPROVED" },
    { petName: "Mochi", amount: 80, status: "PENDING" },
    { petName: "Mira", amount: 40, status: "DECLINED" },
];


console.log("Mochi's payment status: " + payments[1].status);


for (const pet of payments) {
    if (pet.status === "APPROVED") {
        console.log("Pet-care service for " + pet.petName + " confirmed");
    }

    if (pet.status === "PENDING") {
        console.log("Payment for " + pet.petName + " is being processed");
    }

    if (pet.status === "DECLINED") {
        console.log("Payment for " + pet.petName + " unsuccessful");
    }
}