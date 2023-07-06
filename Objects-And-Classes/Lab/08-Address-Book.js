function sortAddresses(input){
    const addresses = input.reduce((acc, curr) => {
        const [name, address] = curr.split(':');
        acc[name] = address;

    

        return acc;

    },{})

   Object.keys(addresses).sort((a,b) => a.localeCompare(b)).forEach((key) => { console.log(key + ' -> ' + addresses[key])});

   

    };



sortAddresses(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);