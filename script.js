const obj = [
    {
      id : 1,
      name : "Deep",
      age : 19,
      Salary : 10000,
      img : 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/432570323_768999165389608_4947711063413238289_n.jpg?ccb=11-4&oh=01_Q5AaIARIT4dfNCVoxOadCM9EhASQ88KLQ0Jq2H_dF_8kOfCz&oe=666FA2CF&_nc_sid=e6ed6c&_nc_cat=102 '
    },

    {
      id : 2,
      name : "Kunal",
      age : 23,
      Salary : 25000,
      img : 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/328122104_805762418197092_8504714972505511180_n.jpg?ccb=11-4&oh=01_Q5AaILDxq3QPNOiAzb7d7fahH11KtcmHr842-UwIDgtRYH0U&oe=66691485&_nc_sid=e6ed6c&_nc_cat=110'
    },

    {
      id : 3,
      name : "Nikul Bhai",
      age : 27,
      Salary : 1000000,
      img : 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/445325856_1427545277865750_5909586740294492966_n.jpg?ccb=11-4&oh=01_Q5AaIJkVJxNV28_xOxyZ7N6N-zNMb182NcfSM28OhpSN9VNu&oe=666F9CCF&_nc_sid=e6ed6c&_nc_cat=110'
    },

    {
      id : 4,
      name : "Sarad",
      age : 19,
      Salary : 10000,
      img : 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/429997385_298062906696449_5569471023561481700_n.jpg?ccb=11-4&oh=01_Q5AaIE2fc2etXNpFEBEbZyx3KBAVR4TXRO8RLNhmSJocv4WG&oe=666FC728&_nc_sid=e6ed6c&_nc_cat=100'
    },
    {
      id : 5,
      name : "Rushep",
      age : 19,
      Salary : 77000,
      img : 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/430117676_25119492577694442_2983147125730731259_n.jpg?ccb=11-4&oh=01_Q5AaIEngx9RlPze4a2_13gJGMBY23ilgefvimIkOtxQr3Ypg&oe=666FBAAF&_nc_sid=e6ed6c&_nc_cat=110'
    },
    {
      id : 6,
      name : "Mihir",
      age : 21,
      Salary : 1000000,
      img : 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/437945164_980773896870105_8164777926969332137_n.jpg?ccb=11-4&oh=01_Q5AaIBCriraxW7xhah-LRBAGxbIx6kGEbCprHtIOLTMUbMpy&oe=666FC024&_nc_sid=e6ed6c&_nc_cat=109'
    },
    {
      id : 7,
      name : "Keura",
      age : 25,
      Salary : 1000000,
      img : 'https://pps.whatsapp.net/v/t61.24694-24/427566082_936154558141112_997800060561687248_n.jpg?ccb=11-4&oh=01_Q5AaIK2uWN5zuB00H4buMvXxnoiCXRlv3qzqB-UsfFXzCjIc&oe=666FAF73&_nc_sid=e6ed6c&_nc_cat=104'
    },
    {
      id : 8,
      name : "Mitul bhai",
      age : 25,
      Salary : 1000000,
      img : 'https://pps.whatsapp.net/v/t61.24694-24/445608223_474497838355143_8307339362948046035_n.jpg?ccb=11-4&oh=01_Q5AaIMWE0vClYhH7pSbWNHoUsRxOCVq3p-N9ixoxm3bNuAbv&oe=666FA152&_nc_sid=e6ed6c&_nc_cat=110'
    },
    {
      id : 9,
      name : "Milan bhai",
      age : 25,
      Salary : 1000000,
      img : 'https://pps.whatsapp.net/v/t61.24694-24/325955088_7562217247207880_7914991603845518870_n.jpg?ccb=11-4&oh=01_Q5AaIGk73ONLboi7DmPDvWzHESLgv1Vjxt7NMO03PpoEyyIx&oe=6668F5AF&_nc_sid=e6ed6c&_nc_cat=107'
    },
    {
      id : 10,
      name : "maheshe mama",
      age : 25,
      Salary : 1000000,
      img : 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/364245014_263990346423771_3912534057557869331_n.jpg?ccb=11-4&oh=01_Q5AaIKnuaF3uBg2-PLkYNcDFtjZyOMsKfPYdbaaOMroKy3A9&oe=666FAFA8&_nc_sid=e6ed6c&_nc_cat=105'
    },


  ]

  
  // 1 : Traget app element 
  // 2 : Foreach loop in array of object
  // 3 : Create a div
  // 4 : List a class in div
  // 5 : Add innerHTML in class
  // 6 : Append Class to app


 // 1 : Traget app element 

 const app = document.getElementById('app');


// 2 : Foreach loop in array of object
  obj.forEach(el =>{
      
       // 3 : Create a div
       const card = document.createElement('div');

        // 4 : List a class in div

        card.classList.add('card');

        card.innerHTML = `
        
          <img src="${el.img}">

          <h4>${el.name} </h4>
          <p> ${el.Salary}</p>
          <p>${el.age} </p>

        `;

           // 6 : Append Class to app

           app.appendChild(card)

       console.log(card);
  
  });
