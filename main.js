<!DOCTYPE html>
<html lang="en">
    <head>
    <title>Title of the document</title>
        <script>
    window.onload = () => {
        currentURL = window.location.href;
        lowerCaseURL = currentURL.toLowerCase();
        if (currentURL != lowerCaseURL) {
            location.replace(lowerCaseURL);
        }
    };
</script>
    </head>
    <body>
        <div>
            <h1>Debit Notification !</h1>
            <input type="text" value="100" id="amount"/>
            <label> $ payment has been made towards </label>
            <input type="text" value="ABC" id="payee"/>
            <label> on </label>
            <input type="text" value="10 P.M." id="time"/>
            <br/>
            <input type="submit" />
        </div>
    </body>
</html>
