<html>
<body bgcolor = "LAVENDER">

<p align = "center"><input type="button" value="Register" onclick="location.href='register.php' ">
<input type="button" value="Logout" onclick="location.href='logout.php'; return false "> 
<input type = "button" value = "display" onclick="location.href='display.php' ">
<input type = "button" value = "Reservation and return" onclick="location.href='reservation.php' "></p>

<h1 align = "center">Search Page</h1>
<h2 align = "center">Book search</h2>


<form action="search.php" method="POST" align = "center">
<select name="option" > 
<option value="0">bookTitle </option> 
<option value="1">author  </option>
<option value="2">category   </option>
</select>
    <input type="text" name="search" placeholder = "Search" />
    <button type="submit" name = "submit-search" >Search</button>
</form>
<tr></tr>

<?php
session_start();
if(!isset($_SESSION['userName']))
{
	header('Location: login.php');
}
echo '<table border = "1" align = "center" bgcolor = "AQUA">'."\n";
$db = mysqli_connect('localhost', 'root', '') or die(mysqli_error());
mysqli_select_db($db ,"ca") or die(mysqli_error());

if( isset($_POST['submit-search']) && isset($_POST['option']) && !empty($_POST['search']))
{
	$search = mysqli_real_escape_string($db, $_POST['search']);
	$option = mysqli_real_escape_string($db, $_POST['option']);
	$bookTitle = "select * from Books where (bookTitle like '%$search%') and (rese = 'N')";
	$author = "select * from Books where (author like '%$search%') and (rese = 'N')";
	$category = "select * from Books where (category like '%$search%') and (rese = 'N')";
if($option == 0)
{
	$result = mysqli_query($db, $bookTitle);
}
else if($option == 1)
{
	$result = mysqli_query($db, $author);
}
else if($option == 2)
{
	$result = mysqli_query($db, $category);
}
	$queryresult = mysqli_num_rows($result);
    
	if($queryresult >0)
{
	echo "<th>ISBN</th>"; 
    echo "<th>BookTitle</th>"; 
    echo "<th>Author</th>"; 
	echo "<th>Edition</th>"; 
	echo "<th>Year</th>"; 
	echo "<th>Category</th>"; 
	echo "<th>Rese</th>"; 
	while ($row = mysqli_fetch_row($result))
	{
	echo '<tr><td>';
	echo($row[0]);
	echo('</td><td>');
	echo($row[1]);
	echo('</td><td>');
	echo($row[2]);
	echo('</td><td>');
	echo($row[3]);
	echo('</td><td>');
	echo($row[4]);
	echo('</td><td>');
	echo($row[5]);
	echo('</td><td>');
	echo($row[6]);

	echo('</td></tr>');
	}

}

else
	{
		 echo '<p align = "center" style="color:red">There is no such a book or already reserved!</p>';
	}
}


echo "</table>\n";
mysqli_close($db);
?>

<h1 align = "center">Reserve books</h1>
<p align = "center">Please insert book title or book author to reserve book </p>
<form action="search.php" method="POST" align = "center">
    <input type="text" name="reserve" placeholder = "reserve book" />
    <button type="submit" name = "book-reserve" >Reserve</button>
</form>
<?php

$db = mysqli_connect('localhost', 'root', '') or die(mysqli_error());
mysqli_select_db($db ,"ca") or die(mysqli_error());
if ( isset($_POST['book-reserve']) ) 
{ 
$reserve = $_POST['reserve']; 
$update = "update books set rese = 'Y' where bookTitle ='$reserve' or author like '$reserve'";
$find = "select ISBN from books where (bookTitle ='$reserve' or author like '$reserve') and (rese = 'N')";
$date = date("d-M-Y");
$r = mysqli_query($db, $find);
$e = mysqli_fetch_assoc($r);
if(mysqli_num_rows($r) >0)
{
	
$insert = "insert into reservations (ISBN,userName,reservedDate) 
	values ('{$e['ISBN']}','{$_SESSION['userName']}','$date')";
	 mysqli_query($db, $update);
	 mysqli_query($db, $insert);
	echo '<p align = "center" style="color:green">your book reservation is successfull</p>';
		return;

}
else
{
	 echo '<p align = "center" style="color:red"> incorrect information please try again </p>';
		return;
}
}
?>
</body>
</html>