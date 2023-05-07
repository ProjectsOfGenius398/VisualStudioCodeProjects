// Function to check if a visitor has already visited the website
function isReturningVisitor() {
    // Check if a 'visit' cookie exists
    if (document.cookie.indexOf('visit=true') >= 0) {
      return true; // Returning visitor
    } else {
      // Set a 'visit' cookie with expiration of 1 year
      document.cookie = 'visit=true; expires=' + new Date(Date.now() + 31536000000).toUTCString();
      return false; // New visitor
    }
  }
  
  // Function to log the number of visits in the console
  function logVisitCount() {
    // Check if the visitor is returning or new
    if (isReturningVisitor()) {
      console.log('Welcome back!'); // Returning visitor message
    } else {
      // Increment the visit count stored in the local storage
      var visitCount = localStorage.getItem('visitCount');
      visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
      localStorage.setItem('visitCount', visitCount);
      console.log('Number of visits: ' + visitCount); // New visitor message
    }
  }
  
  // Call the logVisitCount function when the website is opened
  logVisitCount();