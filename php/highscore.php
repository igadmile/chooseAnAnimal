<?php
    include_once('db.php');

    $name = $_POST['name'];
    $points = $_POST['points'];
    
    mysql_query("INSERT INTO hightable VALUES('$name', '$points')");

//     if(mysql_query("INSERT INTO hightable VALUES('$name', '$points')"))
//         echo "Successfully Inserted";
//     else
//         echo "Insertion Failed";
?> 