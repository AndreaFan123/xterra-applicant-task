## Task 1: To improve the fetching of the data. The endpoint is setup to fail occasionally, and this needs to be handled properly. If the request fails, the user should receive some kind of message or alert, and not see the default error page.

### Walkthrough:

1. Separated the logic and created functions for fetching data, create Table and display error message. Create MVC pattern.
   - model: Contains the logic for fetching data.
   - view: Contains the logic for creating table and displaying error message.
   - controller: Contains the logic for sorting data.
2. Added try catch block to handle the error and display the error message.
3. Remove table headers from HTML and added it to view, reason being:
   - Headers should be displayed with table body on the page when the data is fetched successfully.
4. Simplified and unified the error message as it would be easier for user to understand and it's not safe to revile the detail of the error.

5. 🛠️ Nice to have: Adding loading spinner while the data is being fetched.

## Task 2: To order the results. The results from the server are not ordered, and they have no position field. They need to be ordered based on total time, with the fastest time being first. Results that do not have a realistic total time can be considered incorrect, and should be removed.

### Walkthrough:

1. Parse time and convert it to seconds.
2. Calculate total time and sort the data based on total time.
3. Display sorted total time in the table with ascending order.
4. 🛠️ Nice to have: Implementing filter button with asc and desc and display result accordingly.

## Task 3: To indicate on the page in some way which athlete had the fastest swim time, fastest bike time and fastest run time. Each result will have the split times included, but if the time is not realistic (i.e. "00:00:00" or "23:59:59"), it should not be considered valid.

### Walkthrough:

1. Create an object with keys swim, bike and run and assign the athlete with the fastest time to each key.
2. Loop through the data and create a new object called splits, inside the splits, we need to find the target category and its time.
3. Compare the splits time with the fastest time and if it's the fastest time, assign the athlete and time to the keys.
