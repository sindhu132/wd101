function vaidatePassword() {
        if (password.value != confirm_password.value) {
          confirm_password.setCustomValidity("Password dont Match");
        } else {
          confirm - password.setCustomValidity("");
        }
      }
      password.onchange = validitePassword;
      confirm_password.onkeyup = validatePassword;
