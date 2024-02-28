<?php
require_once "C:\\xampp\\htdocs\\phpprograms\\config.php";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("" . $conn->connect_error);
}

function checkPin($conn, $user_id, $user_pin)
{
    $stmt = $conn->prepare("SELECT Pin FROM users WHERE ID = ?");
    $stmt->bind_param("s", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $db_pin = $row['Pin'];

        if ($user_pin == $db_pin) {
            echo json_encode(['status' => 'success', 'message' => 'login']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Invalid PIN']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'User not found']);
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $user_id = $_POST['user_id'];
    $user_pin = $_POST['pin'];

    // Call the checkPin function
    checkPin($conn, $user_id, $user_pin);
}

$conn->close();  
?>
