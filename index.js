function changeBg() {
  const n = new Date().getHours();
  const styles = {
    message: '',
  };
  if (n >= 24 && n <= 12) {
    styles.message = 'Morning';
  } else if (n >= 12 && n <= 18) {
    styles.message = 'Afternoon!';
  } else if (n >= 18 && n <= 24) {
    styles.message = 'Evening!';
  }
  document.querySelector('#message').innerHTML = styles.message;
}

changeBg();