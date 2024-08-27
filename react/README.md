# XTERRA Application Task React

## Task Description

### Task 1: To improve the fetching of the data. The endpoint is setup to fail occasionally, and this needs to be handled properly. If the request fails, the user should receive some kind of message or alert, and not see the default error page.

### Task 2: To order the results. The results from the server are not ordered, and they have no position field. They need to be ordered based on total time, with the fastest time being first. Results that do not have a realistic total time can be considered incorrect, and should be removed.

### Task 3: To indicate on the page in some way which athlete had the fastest swim time, fastest bike time and fastest run time. Each result will have the split times included, but if the time is not realistic (i.e. "00:00:00" or "23:59:59"), it should not be considered valid.
