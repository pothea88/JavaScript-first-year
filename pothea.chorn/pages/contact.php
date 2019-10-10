<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact us</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <?php
        include_once "menu.php";
     ?>
    <div class="main-contact">
        <h3>Contact Us</h3>
        <div class="col-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.013908283856!2d104.8808949145362!3d11.550859791798853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951add5e2cd81%3A0x171e0b69c7c6f7ba!2sPasserelles%20Num%C3%A9riques%20Cambodia%20(PNC)!5e0!3m2!1sen!2skh!4v1567441832135!5m2!1sen!2skh" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
        <div class="col-6">
            <form action="#">
                <label for="email">Email:</label>
                <input type="email" name="name" placeholder="Email Address"><br><br>
                <label for="text">Message:</label><br>
                <textarea name="text" id="" cols="30" rows="5"></textarea>
            </form>
        </div>
    </div>
    <?php 
        include_once "footer.php";
    ?>
</body>
</html>