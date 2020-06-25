var onSignIn = (googleUser) => {
  let profile = googleUser.getBasicProfile();
  console.log(profile)
  console.log(`Full Name: ${profile.getName()}`);
  console.log(`Email: ${profile.getEmail()}`);
  let x = document.querySelectorAll('.logged');
  x.forEach(rem => {
    rem.classList.remove('logged')
  })

  document.getElementById('data').innerHTML = `<div>${profile["BV"]}</div>`
}

const onSignOut = () => {
  let auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function(){
    console.log('User signed out.');
    hideDashboard();
  })
}

const hideDashboard = () => {
  let x = document.querySelectorAll('.onlylogged');
  x.forEach(rem => {
    rem.classList.add('logged')
  })
}

const goToDashboard = () => {
  
}