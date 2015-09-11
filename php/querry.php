<?php
    include_once('db.php');
    $result=mysql_query ("SELECT * FROM hightable ORDER BY points DESC LIMIT 10");
    echo '<table width="100%">';  // opening table tag
    echo'<th width="50%">Ime</th><th width="50%">Bodovi</th>'; //table headers

    while($data = mysql_fetch_array($result))
    {
    // we are running a while loop to print all the rows in a table
    echo'<tr>'; // printing table row
    echo '<td width="50%">'.$data['name'].'</td><td width="50%">'.$data['points'].'</td>'; // we are looping all data to be printed till last row in the table
    echo'</tr>'; // closing table row
    }

    echo '</table>';  //closing table tag
?>  
