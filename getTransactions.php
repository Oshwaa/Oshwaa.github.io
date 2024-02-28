<?php
require_once "C:\\xampp\\htdocs\\phpprograms\\config.php";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
try{
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Get the data from the POST request
        $data = isset($_POST['user_ID']) ? $_POST['user_ID'] : null;
        if ($data !== null) {
            // Android App registered user ID
            $user_id = $data;
            $sql = "SELECT * FROM transactions WHERE ID = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("s", $user_id);
            $stmt->execute();
            $result = $stmt->get_result();
            $rows = array();
            while ($row = $result->fetch_assoc()) {
                $rows[] = $row;
            }
            echo json_encode($rows);
    
            // Close statement
            $stmt->close();
        }
    }
}
catch(Exception $e) {
    echo $e->getMessage();
}


// Close connection
$conn->close();
?>
