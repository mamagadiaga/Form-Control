	// La fonction qui gere la visibilite de l'icone 
    function change(elem) {
        // Etat normal 
        let etat = document.getElementById(elem).style.visibility;
        if (etat == "hidden"){
    document.getElementById(elem).style.visibility = "visible";
    // document.getElementById(elem).style.border = " 1px solid hsl(0, 100%, 74%)";
  }   
  //Erreur     
        else{
    document.getElementById(elem).style.visibility = "hidden";
    // document.getElementById(elem).style.border = " 1px solid hsl(154, 59%, 51%)";
  }
            
    }

// La fonction qui gere les conditions de validation
  const form = document.querySelector('#formulaire');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.querySelector('#exampleFormControlInput1');
    let lastName = document.querySelector('#exampleFormControlInput2');
    let email = document.querySelector('#exampleFormControlInput3');
    let password = document.querySelector('#exampleFormControlInput4');

     if (!name.value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)) {
      document.getElementById('exampleFormControlInput1').style.border = " 1px solid  hsl(0, 100%, 74%)";
      document.getElementById('erreur1').innerHTML = "Ne doit pas contenir de chiffre.";
      change('icone1');
      name.focus();
    } else if (!lastName.value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)) {
      document.getElementById('exampleFormControlInput2').style.border = " 1px solid  hsl(0, 100%, 74%)";
      document.getElementById('erreur2').innerHTML = "Ne doit pas contenir de chiffre.";
      change('icone2');
      lastName.focus();
    } else if (!email.value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      document.getElementById('exampleFormControlInput3').style.border = " 1px solid  hsl(0, 100%, 74%)";
      document.getElementById('erreur3').innerHTML = "Veuillez entrer un email valide";
      change('icone3');
      email.focus();
    } else if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
      document.getElementById('exampleFormControlInput4').style.border = " 1px solid  hsl(0, 100%, 74%)";
      document.getElementById('erreur4').innerHTML = "Votre mot de passe doit contenir au moins 8 caractères, avec au moins une majuscule, une minuscule et un chiffre.";
      change('icone4');
      password.focus();
    } else {
      alert('Formulaire envoyé avec succès.');
      form.submit();
    }
  });