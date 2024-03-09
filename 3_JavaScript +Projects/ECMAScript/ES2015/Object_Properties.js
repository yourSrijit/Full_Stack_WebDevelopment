//5️⃣ Object Properties 

// ➡ we can now use Dynamic Properties 

      let myName = "Srijit";
      const myBio = {
        [myName] : "hello how are you?",
        [20 + 6] : "is my age"
      }
 //     Key      : Value
      console.log(myBio);

  // ➡ no need to write key and value, if both are same 

  let Name = "Srijit Bera";
  let myAge = 22;

  const Bio = {Name,myAge}

  console.log(Bio);

